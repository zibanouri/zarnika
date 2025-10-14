import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
    SmilePlus,
    FileText,
    Upload,
    Users,
    Download,
    Settings,
} from 'lucide-react';
import { Button } from '../ui/button';
const actions = [
    { icon: SmilePlus, lable: 'NewProject', color: 'bg-red-300' },
    { icon: Users, lable: 'Team', color: 'bg-amber-300' },
    { icon: FileText, lable: 'Document', color: 'bg-blue-300' },
    { icon: Upload, lable: 'Upload', color: 'bg-green-300' },
    { icon: Download, lable: 'Download', color: 'bg-indigo-300' },
    { icon: Settings, lable: 'Settings', color: 'bg-orang-300' },
];
const QuickActions = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center">
                <CardTitle>QuickActions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        variant="outline"
                        className="h-20 flex flex-col gap-2 hover:bg-accent"
                    >
                        <div className="p-2 rounded-lg text-white bg-red-500">
                            <SmilePlus className="h-5 w-5" />
                        </div>
                        <span className="text-sm">New Project</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickActions;
