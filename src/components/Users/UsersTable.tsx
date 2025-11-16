import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



const UsersTable = () => {
    return (
        <div className="space-y-4 w-full">userstable
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
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default UsersTable;