import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/firebase.ts';
import { SurveyResponse, SurveySchema } from './survey-schema.ts';

/**
 * Fetches the list of user surveys
 * @param userId User ID
 * @param limitCount Number of records (default 5)
 * @returns Array of user surveys
 */
export async function getUserSurveys(
  userId: string,
  limitCount: number = 5
): Promise<SurveyResponse[]> {
  try {
    // Создаем запрос для получения опросов конкретного пользователя
    // сортируем по дате создания в обратном порядке и ограничиваем количество
    // Query without sorting by createdAt to avoid the need to create a composite index
    const surveysQuery = query(
      collection(db, 'surveys'),
      where('userId', '==', userId)
      // Removed orderBy as it requires creating an index in Firebase
      // limit(limitCount) - also removed, we'll limit programmatically
    );

    const querySnapshot = await getDocs(surveysQuery);
    const surveys: SurveyResponse[] = [];

    // Преобразуем каждый документ в объект SurveyResponse
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const survey = await SurveySchema.parseAsync({
        id: doc.id,
        ...data,
      });
      surveys.push(survey);
    }

    // Sort programmatically
    surveys.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA; // descending by date (newest to oldest)
    });

    // Limit programmatically
    return limitCount > 0 ? surveys.slice(0, limitCount) : surveys;
  } catch (error) {
    console.error('Error fetching surveys:', error);
    return [];
  }
}
