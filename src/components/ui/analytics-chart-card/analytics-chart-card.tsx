import './analytics-chart-card.scss';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export type ChartDataItem = {
  month: string;
  people: number;
};

export interface ChartData {
  data: ChartDataItem[];
}

export const AnalyticsChartCard = ({ data }: ChartData) => {
  if (data.length === 0) {
    return (
      <span className={'chart-card-warning'}>Нет данных для отображения</span>
    );
  }

  return (
    <div className={'chart-card'}>
      <header className={'chart-card__header'}>
        <span className={'chart-card__title'}>Question Responses</span>
        <span className={'chart-card__subtitle'}>Satisfaction by question</span>
      </header>
      <div className={'chart-card__content'}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} margin={{ left: -20 }}>
            <CartesianGrid vertical={false} strokeOpacity={0.5} />
            <XAxis
              dataKey='month'
              interval={0}
              className={'chart-card__xaxis'}
            />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey='people'
              fill='#3366FF'
              radius={[4, 4, 0, 0]}
              name='people'
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
