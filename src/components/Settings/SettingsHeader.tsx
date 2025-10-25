import { Badge } from "@/components/ui/badge"
const SettingsHeader = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">Settings</h1>
                <div className="text-sm text-muted-foreground">
                    <span>Last Modified: 2 hours ago by Ziba</span>
                    <Badge variant="destructive" className="animate-caret-blink">
                        8 Unsaved Changes
                    </Badge>
                </div>
            </div>
              <div className="flex items-center gap-2">
                    <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
                        Production
                    </Badge>
                </div>
            </div>
    );
};

export default SettingsHeader;