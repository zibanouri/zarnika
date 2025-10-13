import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        revenue: 4000,
        users: 2400,
        amt: 1400,
    },
    {
        name: 'Page B',
        revenue: 3000,
        users: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        revenue: 2000,
        users: 9800,
        amt: 1290,
    },
    {
        name: 'Page D',
        revenue: 2780,
        users: 3908,
        amt: 1700,
    },
    {
        name: 'Page E',
        revenue: 1890,
        users: 4800,
        amt: 2500,
    },
    {
        name: 'Page F',
        revenue: 2390,
        users: 3800,
        amt: 1100,
    },
    {
        name: 'Page G',
        revenue: 3490,
        users: 4300,
        amt: 2180,
    },
];
const ChartWidget = () => {
    const [activeMetric, setActiveMetric] = useState<
        'revenue' | 'users' | 'amt'
    >('revenue');
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
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
                    <Button
                        variant={activeMetric === 'amt' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveMetric('amt')}
                    >
                        Amt
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey={activeMetric} fill="#fbbf21" />
                            <Bar
                                dataKey="pv"
                                fill="#8884d8"
                                activeBar={
                                    <Rectangle fill="pink" stroke="blue" />
                                }
                            />
                            <Bar
                                dataKey="uv"
                                fill="#82ca9d"
                                activeBar={
                                    <Rectangle fill="gold" stroke="purple" />
                                }
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};
export default ChartWidget;
