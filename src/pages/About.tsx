import PublicLayout from "@/components/PublicLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, BookOpen, FlaskConical, Dumbbell, Library, Monitor, Trees } from "lucide-react";

const About = () => (
  <PublicLayout>
    {/* Page Banner */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 opacity-80">Learn about our history, mission and values</p>
      </div>
    </section>

    {/* Overview */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          R.G.N. Public School, established in Gaya, Bihar, has been a beacon of quality education in the region. Affiliated with the Central Board of Secondary Education (CBSE), our school offers comprehensive education from Nursery to Class XII.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Over the years, we have built a reputation for academic excellence, discipline, and holistic student development. Our dedicated faculty, modern infrastructure, and student-centric approach make us one of the leading schools in Gaya.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-14 w-14 rounded-full bg-accent flex items-center justify-center mb-2">
                <Eye className="h-7 w-7 text-accent-foreground" />
              </div>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be a centre of excellence in education that nurtures future leaders with strong moral values, critical thinking abilities, and a passion for lifelong learning.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-14 w-14 rounded-full bg-accent flex items-center justify-center mb-2">
                <Target className="h-7 w-7 text-accent-foreground" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide a stimulating and supportive learning environment that empowers every student to achieve academic excellence and develop into responsible global citizens.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Principal's Message */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Principal's Message</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center shrink-0">
            <span className="text-4xl">👨‍🏫</span>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "At R.G.N. Public School, we believe that every child is unique and has the potential to excel. Our dedicated team of educators works tirelessly to create an environment where students can discover their talents and develop them to the fullest."
            </p>
            <p className="font-semibold">— Principal, R.G.N. Public School</p>
          </div>
        </div>
      </div>
    </section>

    {/* Infrastructure */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Infrastructure</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Library, label: "Library" },
            { icon: FlaskConical, label: "Science Labs" },
            { icon: Monitor, label: "Computer Lab" },
            { icon: Dumbbell, label: "Sports Complex" },
            { icon: BookOpen, label: "Smart Classes" },
            { icon: Trees, label: "Playground" },
            { icon: Monitor, label: "Activity Hall" },
            { icon: FlaskConical, label: "Math Lab" },
          ].map((item) => (
            <Card key={item.label} className="text-center py-6">
              <item.icon className="h-8 w-8 mx-auto text-primary mb-2" />
              <p className="font-medium text-sm">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </PublicLayout>
);

export default About;
