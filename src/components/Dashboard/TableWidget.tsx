import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {Button} from '@/components/ui/button'
const TableWidget = () => {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
             <CardTitle>
                Recent Orders
             </CardTitle>
             <Button variant="outline" size="sm">
                View all

             </Button>
            </CardHeader>
        </Card>
    )
};

export default TableWidget;