import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
    SmilePlus,
    FileText,
    Upload,
    Users,
    Download,
    Wrench,
} from 'lucide-react';
import { Button } from '../ui/button';
const actions = [
    { icon: SmilePlus, label: 'NewProject', color: 'bg-red-300' },
    { icon: Users, label: 'Users', color: 'bg-amber-300' },
    { icon: FileText, label: 'Document', color: 'bg-blue-300' },
    { icon: Upload, label: 'Upload', color: 'bg-green-300' },
    { icon: Download, label: 'Download', color: 'bg-indigo-300' },
    { icon: Wrench, label: 'Settings', color: 'bg-orange-300' },
];
const QuickActions = () => {
    return (
        <Card>
            <CardHeader className="flex flex-col items-center ">
                <CardTitle>QuickActions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-3">
                    {actions.map((action, index) => {
                        const Icon = action.icon;
                        return (
                            <Button
                                key={index}
                                variant="outline"
                                className="h-15 w-50 justify-start gap-2 hover:bg-accent cursor-pointer"
                            >
                                <div
                                    className={`p-2 rounded-lg text-white ${action.color}`}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="text-sm">{action.label}</span>
                            </Button>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickActions;
