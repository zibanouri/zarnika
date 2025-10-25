import { Badge } from "@/components/ui/badge"
const SettingsHeader = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">Settings</h1>
                <div className="text-sm text-muted-foreground">
                    <span>Last Modified: 2 hours ago by Ziba</span>
                    <Badge variant="destructive" className="animate-pulse">
                        8 Unsaved Changes
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default SettingsHeader;