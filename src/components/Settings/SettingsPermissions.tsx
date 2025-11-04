import { Card, CardHeader, CardTitle } from '@/components/ui/card';
const SettingsPermissions = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    User & Permissions
                </h2>
                <p className="text-muted-foreground">
                    Manage user roles, permissions, and access policies.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
            </Card>
        </div>
    );
};
export default SettingsPermissions;
