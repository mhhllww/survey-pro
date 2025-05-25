import { doc, getDoc } from 'firebase/firestore';
import { queryOptions } from '@tanstack/react-query';
import { baseKey } from '@/api/survey/keys.ts';
import { db } from '@/shared/lib/firebase/firebase.ts';
import { SurveySchema } from '@/api/survey/survey-schema.ts';

export const getItemOptions = (id: string) =>
  queryOptions({
    queryKey: [baseKey, id],
    queryFn: async () => {
      const docRef = doc(db, 'surveys', id);
      const docSnap = await getDoc(docRef);

      return await SurveySchema.parseAsync({ id, ...docSnap.data() });
    },
    staleTime: 1000 * 60 * 20,
  });
