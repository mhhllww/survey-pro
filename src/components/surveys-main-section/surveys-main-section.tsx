import { NewSurvey } from '@/components/dashboard-header/new-survey/new-survey.tsx';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { SearchIcon } from 'lucide-react';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { SurveysCard } from '@/components/surveys-main-section/surveys-card/surveys-card.tsx';
import './surveys-main-section.scss';
import React, { useState } from 'react';

const initialSurveyCards = [
  {
    id: 1,
    title: 'Customer Satisfaction',
    description: 'Survey about our product quality',
    status: 'Completed',
    metrics: { responses: 284, date: 'April 10, 2025' },
  },
  {
    id: 2,
    title: 'Employee Feedback',
    description: 'Internal HR survey',
    status: 'In Process',
    metrics: { responses: 100, date: 'April 10, 2025' },
  },
  {
    id: 3,
    title: 'Product Features',
    description: 'What features do users want',
    status: 'In Process',
    metrics: { responses: 0, date: 'April 10, 2025' },
  },
];

export const SurveysMainSection = () => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredCards, setFilteredCards] = useState(initialSurveyCards);

  const handleFilter = (status: string) => {
    let filtered = initialSurveyCards;

    if (searchItem) {
      filtered = filtered.filter(
        (card) =>
          card.title.toLowerCase().includes(searchItem) ||
          card.description.toLowerCase().includes(searchItem)
      );
    }

    if (status !== 'All') {
      filtered = filtered.filter((card) => card.status === status);
    }

    setFilteredCards(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchItem(term);

    const filtered = initialSurveyCards.filter(
      (card) =>
        card.title.toLowerCase().includes(term) ||
        card.description.toLowerCase().includes(term)
    );

    setFilteredCards(filtered);
  };

  return (
    <section className='survey-main-section'>
      <div className='main-section__content'>
        <div className='main-section__header'>
          <div className='main-section__title-group'>
            <h2 className='main-section__title'>Surveys</h2>
            <p className='main-section__subtitle'>
              Create, manage, and analyze your surveys
            </p>
          </div>
          <NewSurvey buttonText='Create New Survey' />
        </div>
        <div className='main-section__controls'>
          <div className='main-section__search'>
            <SearchIcon className='main-section__search-icon' size={16} />
            <UiInput
              placeholder='Search surveys...'
              value={searchItem}
              onChange={handleSearch}
              className='main-section__search-input'
            />
          </div>
          <div className='main-section__actions'>
            <div className='main-section__actions-container'>
              <UiButton design='outline' onClick={() => handleFilter('All')}>
                All
              </UiButton>
              <UiButton
                design='outline'
                onClick={() => handleFilter('Completed')}>
                Completed
              </UiButton>
              <UiButton
                design='outline'
                onClick={() => handleFilter('In Process')}>
                In Process
              </UiButton>
            </div>
          </div>
        </div>
        <div className='main-section__container'>
          <SurveysCard cards={filteredCards} />
        </div>
      </div>
    </section>
  );
};
