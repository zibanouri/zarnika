import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { Eye,EyeClosed } from 'lucide-react';

interface AddEditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddEditUserModal = ({ isOpen, onClose }: AddEditUserModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add new user</DialogTitle>
                </DialogHeader>

                <form action="javascript:void(0)" className="space-y-4">
                    <div className="flex flex-col items-center gap-3">
                        <Avatar className="w-20 h-20">
                            <AvatarImage
                                src="/zarnika/avatar/image1.webp"
                                alt="Profile"
                            />
                            <AvatarFallback className="text-lg">
                                Ar
                            </AvatarFallback>
                        </Avatar>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="cursor-pointer"
                        >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload photo
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter full name" required
                        />

                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type='email'
                            name="email"
                            placeholder="Enter email address" required
                        />

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="role">Role *</Label>
                            <Select required>
                                <SelectTrigger id="role" className="w-full">
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Admin">Admin</SelectItem>
                                    <SelectItem value="Editor">
                                        Editor
                                    </SelectItem>
                                    <SelectItem value="Viewer">
                                        Viewer
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="status">Status *</Label>
                            <Select>
                                <SelectTrigger id="status" className="w-full">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Active">
                                        Active
                                    </SelectItem>
                                    <SelectItem value="Pending">
                                        Pending
                                    </SelectItem>
                                    <SelectItem value="Disabled">
                                        Disabled
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="department">Department *</Label>
                        <Input
                            id="department"
                            name="department"
                            placeholder="Enter Department"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="Enter Phone number"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="employee">Employee ID</Label>
                        <Input
                            id="employee"
                            name="employee"
                            placeholder="Enter Employee ID"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password *</Label>
                        <div className='relative'>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                        >
                            <EyeClosed className='h-4 w-4 text-slate-800'></EyeClosed>
                        </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddEditUserModal;
