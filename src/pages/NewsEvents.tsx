import { useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/contexts/AdminContext";

const ITEMS_PER_PAGE = 4;

const NewsEvents = () => {
  const { news } = useAdmin();
  const [tab, setTab] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = tab === "all" ? news : news.filter((n) => n.category === tab);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <PublicLayout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">News & Events</h1>
          <p className="mt-2 opacity-80">Stay updated with the latest happenings</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={tab} onValueChange={(v) => { setTab(v); setPage(1); }} className="max-w-4xl mx-auto">
            <TabsList className="mb-8 mx-auto flex w-fit">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="event">Events</TabsTrigger>
            </TabsList>

            <TabsContent value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paged.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${item.category === "news" ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                          {item.category === "news" ? "News" : "Event"}
                        </span>
                        <span className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button key={i} variant={page === i + 1 ? "default" : "outline"} size="sm" onClick={() => setPage(i + 1)}>
                      {i + 1}
                    </Button>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PublicLayout>
  );
};

export default NewsEvents;
