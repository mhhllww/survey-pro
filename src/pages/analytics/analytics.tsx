import './analytics.scss';

import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuTrigger,
  UiDropdownMenuCheckboxItem,
} from '@/shared/ui/dropdown-menu/dropdown-menu.tsx';
import {
  ChevronDownIcon,
  UsersIcon,
  CircleCheckBigIcon,
  ClockIcon,
} from 'lucide-react';
import { useState } from 'react';
import { AnalyticsCard } from '@/components/ui/analytics-card/analytics-card';

import {
  UiTabs,
  UiTabsContent,
  UiTabsList,
  UiTabsTrigger,
} from '@/shared/ui/tabs/tabs.tsx';
import {
  AnalyticsChartCard,
  ChartDataItem,
} from '@/components/ui/analytics-chart-card/analytics-chart-card.tsx';

const surveys = [
  'Graph with first poll',
  'Graph with the second survey',
  'Employee Engagement Survey',
];
//////////////
type AnswerCounts = {
  [answer: string]: number; // например: "a": 50, "b": 30
};

type QuestionAnswers = {
  [question: string]: AnswerCounts;
};

type MonthlySurveyData = {
  [month: string]: QuestionAnswers;
};

type FullSurveyData = {
  [surveyName: string]: MonthlySurveyData;
};

export const fullSurveyData: FullSurveyData = {
  'Graph with first poll': {
    Jan: {
      question1: { a: 20, b: 25, c: 15 },
      question2: { a: 30, b: 20, c: 10 },
    },
    Feb: {
      question1: { a: 40, b: 35, c: 10 },
      question2: { a: 25, b: 20, c: 5 },
    },
    Mar: {
      question1: { a: 30, b: 50, c: 10 },
      question2: { a: 40, b: 20, c: 10 },
    },
    Apr: {
      question1: { a: 20, b: 10, c: 5 },
      question2: { a: 30, b: 15, c: 10 },
    },
    May: {
      question1: { a: 25, b: 30, c: 15 },
      question2: { a: 20, b: 10, c: 5 },
    },
    Jun: {
      question1: { a: 35, b: 20, c: 10 },
      question2: { a: 30, b: 25, c: 15 },
    },
    Jul: {
      question1: { a: 25, b: 20, c: 15 },
      question2: { a: 15, b: 10, c: 10 },
    },
    Aug: {
      question1: { a: 30, b: 30, c: 10 },
      question2: { a: 25, b: 25, c: 10 },
    },
    Sep: {
      question1: { a: 10, b: 5, c: 5 },
      question2: { a: 10, b: 5, c: 5 },
    },
    Oct: {
      question1: { a: 25, b: 15, c: 10 },
      question2: { a: 20, b: 20, c: 10 },
    },
    Nov: {
      question1: { a: 20, b: 25, c: 5 },
      question2: { a: 25, b: 15, c: 10 },
    },
    Dec: {
      question1: { a: 40, b: 30, c: 10 },
      question2: { a: 50, b: 20, c: 10 },
    },
  },

  'Graph with the second survey': {
    Jan: {
      question1: { a: 30, b: 20, c: 10 },
      question2: { a: 25, b: 25, c: 10 },
    },
    Feb: {
      question1: { a: 40, b: 30, c: 10 },
      question2: { a: 30, b: 20, c: 10 },
    },
    Mar: {
      question1: { a: 50, b: 20, c: 10 },
      question2: { a: 30, b: 10, c: 5 },
    },
    Apr: {
      question1: { a: 20, b: 25, c: 10 },
      question2: { a: 25, b: 20, c: 5 },
    },
    May: {
      question1: { a: 30, b: 25, c: 10 },
      question2: { a: 20, b: 15, c: 5 },
    },
    Jun: {
      question1: { a: 35, b: 20, c: 10 },
      question2: { a: 30, b: 25, c: 10 },
    },
    Jul: {
      question1: { a: 30, b: 25, c: 5 },
      question2: { a: 25, b: 20, c: 10 },
    },
    Aug: {
      question1: { a: 40, b: 30, c: 10 },
      question2: { a: 35, b: 25, c: 10 },
    },
    Sep: {
      question1: { a: 10, b: 10, c: 5 },
      question2: { a: 5, b: 5, c: 5 },
    },
    Oct: {
      question1: { a: 25, b: 20, c: 5 },
      question2: { a: 20, b: 20, c: 5 },
    },
    Nov: {
      question1: { a: 25, b: 15, c: 10 },
      question2: { a: 20, b: 25, c: 10 },
    },
    Dec: {
      question1: { a: 50, b: 30, c: 20 },
      question2: { a: 40, b: 20, c: 10 },
    },
  },
};
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
      for (const answers of Object.values(questions)) {
        for (const count of Object.values(answers)) {
          total += count;
        }
      }
    }

    return { month, people: total };
  });
};

//////////////
export const Analytics = () => {
  const [selected, setSelected] = useState<string>(surveys[0]);

  return (
    <div className={'analytics'}>
      <div className={'analytics-content'}>
        <header className={'analytics-content__header'}>
          <div className={'analytics-content__header-text'}>
            <h2>Analytics</h2>
            <span className={'analytics-content__subtitle'}>
              View and analyze your survey responses
            </span>
          </div>

          <UiDropdownMenu>
            <UiDropdownMenuTrigger
              asChild
              className={'analytics-content__UiDropdownMenuTrigger'}>
              <button className={'analytics-content__header-dropdown-trigger'}>
                <span>{selected}</span>
                <ChevronDownIcon size={16} />
              </button>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent
              sideOffset={5}
              className={'analytics-content__UiDropdownMenuContent'}>
              {surveys.map((survey) => (
                <UiDropdownMenuCheckboxItem
                  className={'analytics-content__UiDropdownMenuCheckboxItem'}
                  onSelect={() =>
                    console.log('на данный момент без функционала')
                  }
                  key={survey}
                  checked={survey === selected}
                  onCheckedChange={(checked) => {
                    if (checked) setSelected(survey);
                  }}>
                  <div>{survey}</div>
                </UiDropdownMenuCheckboxItem>
              ))}
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </header>
        <section className={'analytics-content__cards'}>
          <AnalyticsCard
            title={'Total Responses'}
            icon={<UsersIcon size={16} />}
            value={'1,284'}
            change={{
              direction: 'up',
              percent: '12.5',
              caption: 'from last month',
            }}
          />
          <AnalyticsCard
            title={'Completion Rate'}
            icon={<CircleCheckBigIcon size={16} />}
            value={'86%'}
            change={{
              direction: 'up',
              percent: '2.3',
              caption: 'from last month',
            }}
          />
          <AnalyticsCard
            title={'Avg. Time to Complete'}
            icon={<ClockIcon size={16} />}
            value={'4m 12s'}
            change={{
              direction: 'down',
              percent: '18',
              caption: 'from last month',
            }}
          />
          <AnalyticsCard
            title={'Satisfaction Score'}
            icon={<UsersIcon size={16} />}
            value={'4.2/5'}
            change={{
              direction: 'up',
              percent: '0.3',
              caption: 'from last month',
            }}
          />
        </section>
        <div>
          <UiTabs defaultValue='overview'>
            <UiTabsList aria-label='Пример вкладок'>
              <UiTabsTrigger value='overview'>Overview</UiTabsTrigger>
              <UiTabsTrigger value='questions'>Questions</UiTabsTrigger>
            </UiTabsList>

            <UiTabsContent value='overview'>
              <AnalyticsChartCard
                data={getChartData(selected, fullSurveyData)}
              />
            </UiTabsContent>

            <UiTabsContent value='questions'>
              <span>Содержимое вкладки 2</span>
            </UiTabsContent>
          </UiTabs>
        </div>
      </div>
    </div>
  );
};
