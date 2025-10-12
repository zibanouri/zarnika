import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const TableWidget = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button variant="outline" size="sm">
                    View all
                </Button>
            </CardHeader>
            <CardContent>
                <div className='space-y-4'>
                    <div className='flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors'>

                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TableWidget;
