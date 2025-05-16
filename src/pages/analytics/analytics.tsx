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

import { QuestionTable } from '@/components/ui/questions-table/questions-table.tsx';

import {
  fullSurveyData,
  FullSurveyData,
} from '@/pages/analytics/full-survey-data.ts';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';

const surveys = [
  'Graph with first survey',
  'Graph with the second survey',
  'Graph with the third survey',
];

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
    <UiScrollArea>
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
                <button
                  className={'analytics-content__header-dropdown-trigger'}>
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
                <QuestionTable surveyName={selected} />
              </UiTabsContent>
            </UiTabs>
          </div>
        </div>
      </div>
    </UiScrollArea>
  );
};
