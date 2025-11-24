import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Building2, CalendarDays, Pencil } from 'lucide-react';
import { type User } from '@/components/UsersPage';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    onEdit?: (user: User) => void;
}

const UserDetailsModal = ({ isOpen, onClose, user, onEdit }: Props) => {
    if (!user) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-xl p-6">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle className="text-xl font-semibold">
                        User Details
                    </DialogTitle>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEdit?.(user)}
                        className="flex items-center gap-2"
                    >
                        <Pencil className="w-4 h-4" />
                        Edit User
                    </Button>
                </DialogHeader>
                <div className="flex items-center gap-4 mt-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                            {user.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                        </AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-sm text-muted-foreground">
                            {user.employeeId}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">{user.role}</span>
                            <Badge>{user.status}</Badge>
                        </div>
                    </div>
                </div>
                <h3 className="mt-6 font-semibold text-sm">
                    Contact Information
                </h3>

                <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="rounded-lg border p-3 flex items-start gap-3">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Email
                            </p>
                            <p className="text-sm font-medium">{user.email}</p>
                        </div>
                    </div>
                    <div className="rounded-lg border p-3 flex items-start gap-3">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Phone
                            </p>
                            <p className="text-sm font-medium">
                                {user.phone}
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg border p-3 flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-muted-foreground" />
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Department
                            </p>
                            <p className="text-sm font-medium">
                                {user.department}
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg border p-3 flex items-start gap-3">
                        <CalendarDays className="w-5 h-5 text-muted-foreground" />
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Last Login
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UserDetailsModal;
