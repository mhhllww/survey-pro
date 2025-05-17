import { FullSurveyData } from '@/pages/analytics/full-survey-data.ts';
import { ChartDataItem } from '@/components/ui/analytics-chart-card/analytics-chart-card.tsx';

export const getChartData = (
  surveyName: string,
  data: FullSurveyData
): ChartDataItem[] => {
  const monthsOrder = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const survey = data[surveyName];
  if (!survey) return [];

  return monthsOrder.map((month) => {
    const questions = survey[month];
    let total = 0;

    if (questions) {
      for (const question of Object.values(questions)) {
        const answers = question.answers;
        for (const count of Object.values(answers)) {
          total += count;
        }
      }
    }

    return { month, people: total };
  });
};
