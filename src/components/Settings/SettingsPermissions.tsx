import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pen, Trash } from 'lucide-react'; 
const SettingsPermissions = () => {
    const roles = [
        { name: 'Administrator', users: 4, permissions: ['Full Access'] },
        { name: 'Manager', users: 6, permissions: ['Read', 'Write', 'Delete'] },
        { name: 'Editor', users: 12, permissions: ['Read', 'Write'] },
        { name: 'Viewer', users: 3458, permissions: ['Read'] },
    ];

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
                <CardContent>
                    <div className="space-y-4">
                        {roles.map((role) => (
                            <div
                                key={role.name}
                                className="flex flex-col gap-3 p-3 border rounded-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium">{role.name}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {role.users} users
                                        </p>
                                    </div>
                                    <div className="flex gap-1">
                                        {role.permissions.map((permission) => (
                                            <Badge
                                                key={permission}
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {permission}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                    >
                                        <Pen className="w-4 h-4 mr-1" />
                                        Edit
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                    >
                                        <Trash className="w-4 h-4 mr-1" />
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4"
                    >
                        Add New Role
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default SettingsPermissions;