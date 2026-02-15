import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdmin } from "@/contexts/AdminContext";
import { BookOpen, Phone, GraduationCap, Calendar, ArrowRight, Users } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";

const Index = () => {
  const { news } = useAdmin();
  const latestNews = news.filter((n) => n.category === "news").slice(0, 3);
  const events = news.filter((n) => n.category === "event").slice(0, 3);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">R.G.N. Public School</h1>
          <p className="text-lg md:text-xl opacity-90 mb-2">CBSE Affiliated Institution | Gaya, Bihar</p>
          <p className="text-base md:text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Committed to academic excellence, character development, and holistic education for future leaders.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admission">Begin Application</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/about">Explore Institution</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Welcome to R.G.N. Public School</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              R.G.N. Public School, located in Gaya, Bihar, is a distinguished CBSE-affiliated educational institution dedicated to fostering academic excellence and comprehensive character development. Our institution provides an environment where students cultivate intellectual growth, physical wellness, and moral integrity.
            </p>
            <Button variant="link" asChild>
              <Link to="/about">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: GraduationCap, title: "Academics", desc: "Discover our comprehensive CBSE curriculum from Nursery through Class XII.", path: "/academics" },
              { icon: BookOpen, title: "Admissions", desc: "Begin the application process for the 2025-26 academic session.", path: "/admission" },
              { icon: Phone, title: "Contact", desc: "Reach out to our administration for inquiries and assistance.", path: "/contact" },
            ].map((item) => (
              <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                    <item.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={item.path}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/news-events">View All News <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex gap-4 items-start bg-background rounded-lg p-4 shadow-sm">
                <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                  <div className="text-lg font-bold">{new Date(event.date).getDate()}</div>
                  <div className="text-xs">{new Date(event.date).toLocaleString("default", { month: "short" })}</div>
                </div>
                <div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Admissions Open for Academic Session 2025-26</h2>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">
            Enroll at R.G.N. Public School and provide your child with an exceptional foundation for future success.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/admission">Begin Application</Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Index;
