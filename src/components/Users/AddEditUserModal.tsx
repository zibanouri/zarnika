import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface AddEditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddEditUserModal = ({ isOpen, onClose }: AddEditUserModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-hidden">
                <DialogHeader>
                    <DialogTitle>
                        Add new user
                    </DialogTitle>
                </DialogHeader>


                <form action="javascript:void(0)" className='space-y-4'>
                    <div className='flex flex-col items-center gap-3'>
                        <Avatar className='w-20 h-20'>
                            <AvatarImage>
                                <AvatarFallback>
                                    Ar
                                </AvatarFallback>
                            </AvatarImage>
                        </Avatar>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
export default AddEditUserModal;
