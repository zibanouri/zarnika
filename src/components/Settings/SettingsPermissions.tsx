import { Card, CardHeader, CardTitle } from '@/components/ui/card';
const SettingsPermissions = () => {
    const roles = [
        { name: "Adminstrator", user: 4, permisions: ["Full Access"] },
         { name: "Manager", user: 6, permisions: ["REad","Write","Delete"] },
          { name: "Editor", user: 12, permisions: ["Read","Write",] },
           { name: "Viewer", user: 3458, permisions: ["Read"] },
    ]
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
                    <CardTitle>Role Management</CardTitle>
                </CardHeader>
            </Card>
        </div>
    );
};
export default SettingsPermissions;
