import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { enquiriesData } from "@/data/enquiries";

const AdminEnquiries = () => (
  <AdminLayout>
    <h1 className="text-2xl font-bold mb-6">Admission Enquiries</h1>
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Phone</TableHead>
              <TableHead>Class</TableHead>
              <TableHead className="hidden lg:table-cell">Message</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enquiriesData.map((e) => (
              <TableRow key={e.id}>
                <TableCell className="font-medium">{e.name}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell className="hidden md:table-cell">{e.phone}</TableCell>
                <TableCell>{e.classApplied}</TableCell>
                <TableCell className="hidden lg:table-cell text-muted-foreground text-sm truncate max-w-[200px]">{e.message}</TableCell>
                <TableCell>{e.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </AdminLayout>
);

export default AdminEnquiries;
