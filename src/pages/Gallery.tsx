import { useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { galleryData, GalleryImage } from "@/data/gallery";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered = tab === "all" ? galleryData : galleryData.filter((g) => g.category === tab);

  return (
    <PublicLayout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="mt-2 opacity-80">Moments captured at R.G.N. Public School</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="mb-8 mx-auto flex w-fit">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="campus">Campus</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>

            <TabsContent value={tab}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((img) => (
                  <div
                    key={img.id}
                    className="relative group cursor-pointer rounded-lg overflow-hidden aspect-[4/3]"
                    onClick={() => setSelected(img)}
                  >
                    <img src={img.image} alt={img.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                      <span className="text-background text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selected && (
            <div>
              <img src={selected.image} alt={selected.title} className="w-full max-h-[70vh] object-contain bg-foreground/5" />
              <div className="p-4">
                <h3 className="font-semibold">{selected.title}</h3>
                <p className="text-sm text-muted-foreground capitalize">{selected.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PublicLayout>
  );
};

export default Gallery;
