import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
} from '@/components/ui/table';
import { type User } from '@/components/UsersPage';
import { Checkbox } from '../ui/checkbox';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu, DropdownMenuTrigger,
    DropdownMenuItem, DropdownMenuContent
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import { ChevronDown , Trash2 } from 'lucide-react';
import { Eye } from "lucide-react"

interface UsersTableProps {
    users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
    return (
        <div className="space-y-4 w-full">
            <div className="border rounded-lg">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">
                                    <Checkbox className='mr-2' />
                                    ID
                                </TableHead>
                                <TableHead className="w-32">User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Login</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Checkbox className='mr-2' />
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-2'>
                                        <Avatar className='h-8 w-8'>
                                            <AvatarImage src='/zarnika/avatar/image2.webp' alt='Ar' />
                                            <AvatarFallback>ID</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className='font-medium truncate'>Arnika</div>
                                            <div className='text-sm text-muted-foreground'>Arnika@company.com</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                    >Admin</Badge>
                                </TableCell>
                                <TableCell>IT</TableCell>
                                <TableCell>
                                    <Badge>Active</Badge>
                                </TableCell>
                                <TableCell className='text-sm text-muted-foreground' >
                                    '2025-10-12T16:35:24'
                                </TableCell>
                                <TableCell className='text-sm text-muted-foreground' >
                                    gyhfdghd
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="sm">

                                                <ChevronDown className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align='end'>
                                            < DropdownMenuItem className="cursor-pointer">
                                                <Eye className="mr-2 w-4 h-4" />
                                                view
                                            </DropdownMenuItem>
                                            < DropdownMenuItem className="cursor-pointer">
                                                <Eye className="mr-2 w-4 h-4" />
                                                Edit
                                            </DropdownMenuItem>
                                            < DropdownMenuItem className="cursor-pointer text-destructive">
                                                <Eye className="mr-2 w-4 h-4" />
                                                <Trash2 className='mr-2 w-4 h-4' />
                                                Delete
                                            </DropdownMenuItem>

                                        </DropdownMenuContent>

                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UsersTable;