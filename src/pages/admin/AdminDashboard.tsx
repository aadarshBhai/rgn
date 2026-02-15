import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Calendar, Image, Users } from "lucide-react";
import { newsData } from "@/data/news";
import { galleryData } from "@/data/gallery";
import { enquiriesData } from "@/data/enquiries";
import { noticesData } from "@/data/notices";

const stats = [
  { label: "Total News", value: newsData.filter((n) => n.category === "news").length, icon: Newspaper, color: "text-primary" },
  { label: "Total Events", value: newsData.filter((n) => n.category === "event").length, icon: Calendar, color: "text-primary" },
  { label: "Gallery Items", value: galleryData.length, icon: Image, color: "text-primary" },
  { label: "Enquiries", value: enquiriesData.length, icon: Users, color: "text-primary" },
];

const AdminDashboard = () => (
  <AdminLayout>
    <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
            <s.icon className={`h-5 w-5 ${s.color}`} />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{s.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle className="text-lg">Recent Notices</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {noticesData.slice(0, 3).map((n) => (
              <li key={n.id} className="flex justify-between items-start border-b pb-2 last:border-0">
                <span className="text-sm">{n.title}</span>
                <span className="text-xs text-muted-foreground shrink-0 ml-4">{n.date}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-lg">Recent Enquiries</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {enquiriesData.slice(0, 3).map((e) => (
              <li key={e.id} className="flex justify-between items-start border-b pb-2 last:border-0">
                <div>
                  <span className="text-sm font-medium">{e.name}</span>
                  <span className="text-xs text-muted-foreground block">{e.classApplied}</span>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 ml-4">{e.date}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  </AdminLayout>
);

export default AdminDashboard;
