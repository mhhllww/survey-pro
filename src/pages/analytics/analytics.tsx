import './analytics.scss';

import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuTrigger,
  UiDropdownMenuCheckboxItem,
} from '@/shared/ui/dropdown-menu/dropdown-menu.tsx';
import { ChevronDownIcon, UsersIcon } from 'lucide-react';
import { useState } from 'react';
import { AnalyticsCard } from '@/components/ui/analytics-card/analytics-card';

const surveys = [
  'Customer Satisfaction Survey',
  'Product Feedback Survey',
  'Employee Engagement Survey',
];

export const Analytics = () => {
  const [selected, setSelected] = useState<string>(surveys[0]);

  return (
    <div className={'analytics'}>
      <div className={'analytics-content'}>
        <div className={'analytics-content__header'}>
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
        </div>
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
            title={'Total Responses'}
            icon={<UsersIcon size={16} />}
            value={'1,284'}
            change={{
              direction: 'up',
              percent: '12.5',
              caption: 'from last month',
            }}
          />
        </section>
      </div>
    </div>
  );
};
