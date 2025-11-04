import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash, Pen } from 'lucide-react';

export const SettingsPermissions = () => {
    const roles = [
        { name: 'Administrator', users: 3, permissions: ['Full Access'] },
        { name: 'Manager', users: 8, permissions: ['Read', 'Write', 'Delete'] },
        { name: 'Editor', users: 15, permissions: ['Read', 'Write'] },
        { name: 'Viewer', users: 2034, permissions: ['Read'] },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-2">Users & Permissions</h2>
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
                                className="flex items-start justify-between p-3 border rounded-lg"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-medium">{role.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {role.users} users
                                    </p>
                                    <div className="flex flex-wrap gap-1 mt-1">
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
                                <div className="flex gap-2 flex-shrink-0">
                                    <Button variant="outline" size="sm">
                                        <Pen className="w-4 h-4 mr-1" />
                                        Edit
                                    </Button>
                                    <Button variant="destructive" size="sm">
                                        <Trash className="w-4 h-4 mr-1" />
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))}
                        <Button variant="outline" size="sm" className="w-full mt-2">
                            Add New Role
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};