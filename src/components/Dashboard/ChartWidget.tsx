import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
const ChartWidget = () => {
    return (
        <Card className='bg-red-300'>
        <CardHeader className='flex flex-row items-center '>
      <CardTitle>
        Performanc Overview
      </CardTitle>
      <div className='flex gap-2'>

      </div>
        </CardHeader>
        </Card>
    )
    
};

export default ChartWidget;
