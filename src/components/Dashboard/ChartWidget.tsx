import { useState } from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type MonthData = {
  month: string;
  revenue: number;
  users: number;
};

const Data = [
  { month: 'Jan', revenue: 4000, users: 2400 },
  { month: 'Feb', revenue: 3000, users: 1398 },
  { month: 'Mar', revenue: 2000, users: 9800 },
  { month: 'Apr', revenue: 2780, users: 3908 },
  { month: 'May', revenue: 1890, users: 4800 },
  { month: 'Jun', revenue: 2390, users: 3800 },
  { month: 'Jul', revenue: 3490, users: 4300 },
  { month: 'Aug', revenue: 4000, users: 2400 },
  { month: 'Sep', revenue: 3000, users: 1398 },
  { month: 'Oct', revenue: 2000, users: 9800 },
  { month: 'Nov', revenue: 2780, users: 3908 },
  { month: 'Dec', revenue: 1890, users: 4800 },
];

const AMBER_COLOR = '#FFA000';
interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: MonthData;
  onClick?: (payload: MonthData) => void;
}

const CustomDot = ({ cx, cy, payload, onClick }: CustomDotProps) => {
  if (cx === undefined || cy === undefined || !payload) return null;
  
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill={AMBER_COLOR}
      stroke="#fff"
      strokeWidth={2}
      style={{ cursor: 'pointer' }}
      onClick={() => onClick?.(payload)}
    />
  );
};

 const  ChartWidget = () => {
  const [activeMetric, setActiveMetric] = useState<'revenue' | 'users'>('users');
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const handleDotClick = (payload: MonthData) => {
    console.log('Selected month:', payload.month);
    setSelectedMonth(payload.month);
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Performance Overview</CardTitle>
          {selectedMonth && (
            <p className="text-sm text-muted-foreground mt-1">
              Selected: <span className="font-medium">{selectedMonth}</span>
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant={activeMetric === 'revenue' ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              setActiveMetric('revenue');
              setSelectedMonth(null);
            }}
          >
            Revenue
          </Button>
          <Button
            variant={activeMetric === 'users' ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              setActiveMetric('users');
              setSelectedMonth(null);
            }}
          >
            Users
          </Button>
        </div>
      </CardHeader>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={Data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={activeMetric}
              stroke={AMBER_COLOR}
              strokeWidth={2}
              dot={<CustomDot onClick={handleDotClick} />}
              activeDot={{ 
                r: 8, 
                fill: AMBER_COLOR, 
                stroke: '#fff', 
                strokeWidth: 2 
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ChartWidget;