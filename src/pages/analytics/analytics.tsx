import './analytics.scss';

import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuTrigger,
  UiDropdownMenuCheckboxItem,
} from '@/shared/ui/dropdown-menu/dropdown-menu.tsx';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

const surveys = [
  'Customer Satisfaction Survey',
  'Product Feedback Survey',
  'Employee Engagement Survey',
];

export const Analytics = () => {
  const [selected, setSelected] = useState<string>(surveys[0]);

  return (
    <div className={'analytics'}>
      <div className={'analytics-inner'}>
        <div className={'analytics-inner__header'}>
          <div className={'analytics-inner__header-text'}>
            <h2>Analytics</h2>
            <span className={'analytics-inner__subtitle'}>
              View and analyze your survey responses
            </span>
          </div>

          <UiDropdownMenu>
            <UiDropdownMenuTrigger
              asChild
              className={'analytics-inner__UiDropdownMenuTrigger'}>
              <button className={'analytics-inner__header-dropdown-trigger'}>
                <span>{selected}</span>
                <ChevronDownIcon size={16} />
              </button>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent
              sideOffset={5}
              className={'analytics-inner__UiDropdownMenuContent'}>
              {surveys.map((survey) => (
                <UiDropdownMenuCheckboxItem
                  className={'analytics-inner__UiDropdownMenuCheckboxItem'}
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
      </div>
    </div>
  );
};
