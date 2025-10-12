import { useState } from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Jan', revenue: 4000, users: 2400 },
    { name: 'Feb', revenue: 3000, users: 1398 },
    { name: 'Mar', revenue: 2000, users: 9800 },
    { name: 'Apr', revenue: 2780, users: 3908 },
    { name: 'May', revenue: 1890, users: 4800 },
    { name: 'Jun', revenue: 2390, users: 3800 },
    { name: 'Jul', revenue: 3490, users: 4300 },
    { name: 'Aug', revenue: 4000, users: 2400 },
    { name: 'Sep', revenue: 3000, users: 1398 },
    { name: 'Oct', revenue: 2000, users: 9800 },
    { name: 'Nov', revenue: 2780, users: 3908 },
    { name: 'Dec', revenue: 1890, users: 4800 },
];

export const ChartWidget = () => {
    const [activeMetric, setActiveMetric] = useState<'revenue' | 'users'>(
        'users'
    );
    const dataKey = activeMetric;
    const color = activeMetric === 'revenue' ? '#8884d8' : '#82ca9d';

    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Performance Overview</CardTitle>
                <div className="flex gap-2">
                    <Button
                        variant={
                            activeMetric === 'revenue' ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setActiveMetric('revenue')}
                    >
                        Revenue
                    </Button>
                    <Button
                        variant={
                            activeMetric === 'users' ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setActiveMetric('users')}
                    >
                        Users
                    </Button>
                </div>
            </CardHeader>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey={dataKey}
                            stroke={color}
                            fill={color}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default ChartWidget;
