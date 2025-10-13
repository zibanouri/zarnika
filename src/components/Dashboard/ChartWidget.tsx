import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Jan',
        revenue: 4000,
        users: 2400,
        views: 1400,
    },
    {
        name: 'Feb',
        revenue: 3000,
        users: 1398,
        views: 2210,
    },
    {
        name: 'Mar',
        revenue: 2000,
        users: 9800,
        views: 1290,
    },
    {
        name: 'Apr',
        revenue: 2780,
        users: 3908,
        views: 1700,
    },
    {
        name: 'May',
        revenue: 1890,
        users: 4800,
        views: 2500,
    },
    {
        name: 'Jun',
        revenue: 2390,
        users: 3800,
        views: 1100,
    },
    {
        name: 'Jul',
        revenue: 3490,
        users: 4300,
        views: 2180,
    },
{
        name: 'Aug',
        revenue: 4000,
        users: 2400,
        views: 1400,
    },
    {
        name: 'Sep',
        revenue: 3000,
        users: 1398,
        views: 2210,
    },
    {
        name: 'Oct',
        revenue: 2000,
        users: 9800,
        views: 1290,
    },
    {
        name: 'Nov',
        revenue: 2780,
        users: 3908,
        views: 1700,
    },
    {
        name: 'Dec',
        revenue: 1890,
        users: 4800,
        views: 2500,
    },

];

const colorChange = (status:string) =>{
    switch (status) {
        case "revenue":
            return "#FF9B50" ;
        case "users":
            return "#E25E3E";
        case "views":
            return "#C63D2F";        
    }
}  
const ChartWidget = () => {
    const [activeMetric, setActiveMetric] = useState<
        'revenue' | 'users' | 'views'
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
                        variant={activeMetric === 'views' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveMetric('views')}
                    >
                        Views
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
                            <Bar dataKey={activeMetric} fill={colorChange(activeMetric)} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};
export default ChartWidget;
