import { Card, CardHeader, CardTitle } from '@/components/ui/card';
const SettingsPermissions = () => {
    const roles = [
        { name: 'Adminstrator', users: 4, permisions: ['Full Access'] },
        { name: 'Manager', users: 6, permisions: ['REad', 'Write', 'Delete'] },
        { name: 'Editor', users: 12, permisions: ['Read', 'Write'] },
        { name: 'Viewer', users: 3458, permisions: ['Read'] },
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
                <div className='space-y-4'>
                    {
                        roles.map((role) =>(
                            <div
                            key={role.name}
                            className='flex items-center justify-between p-3 border rounded-lg'
                            >
                            <div>
                                <h4 className='font-medium'>{role.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                        {role.users} users
                                    </p>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </Card>
        </div>
    );
};
export default SettingsPermissions;
