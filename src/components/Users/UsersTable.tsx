import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type User } from "@/components/UsersPage";

interface UsersTableProps {
  users: User[]; 
}

const UsersTable = ({ users }: UsersTableProps) => { 
  return (
    <div className="space-y-4 w-full">
      userstable
      <div className="border rounded-lg">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">ID</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead className="w-32">User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>

                </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}; 

export default UsersTable;