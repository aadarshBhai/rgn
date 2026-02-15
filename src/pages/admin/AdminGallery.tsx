import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { galleryData } from "@/data/gallery";
import { Plus, Trash2 } from "lucide-react";

const AdminGallery = () => (
  <AdminLayout>
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Manage Gallery</h1>
      <Button><Plus className="h-4 w-4 mr-2" /> Upload Image</Button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryData.map((img) => (
        <Card key={img.id} className="overflow-hidden group relative">
          <img src={img.image} alt={img.title} className="w-full h-40 object-cover" />
          <CardContent className="p-3">
            <p className="text-sm font-medium truncate">{img.title}</p>
            <p className="text-xs text-muted-foreground capitalize">{img.category}</p>
          </CardContent>
          <Button variant="destructive" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8">
            <Trash2 className="h-4 w-4" />
          </Button>
        </Card>
      ))}
    </div>
  </AdminLayout>
);

export default AdminGallery;
