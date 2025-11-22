import { Dialog, DialogContent, DialogHeader,DialogTitle } from '@/components/ui/dialog';
interface AddEditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddEditUserModal = ({ isOpen, onClose }: AddEditUserModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-hidden">
                <DialogHeader><DialogTitle>
                    </DialogTitle>
                    </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
export default AddEditUserModal;
