import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {type User} from "@/components/UsersPage";
interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: User | null
}

const UserDetailsModal = ({ isOpen, onClose ,user}: UserDetailsModalProps) => {
  
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add new user</DialogTitle>
                </DialogHeader>

            </DialogContent>
        </Dialog>
    );
};

export default UserDetailsModal;
