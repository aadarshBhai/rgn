import PublicLayout from "@/components/PublicLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Palette, Trophy, Globe, BookOpen, Cpu } from "lucide-react";

const classes = [
  "Nursery", "LKG", "UKG",
  "Class I", "Class II", "Class III", "Class IV", "Class V",
  "Class VI", "Class VII", "Class VIII",
  "Class IX", "Class X", "Class XI", "Class XII",
];

const activities = [
  { icon: Trophy, label: "Sports & Athletics" },
  { icon: Palette, label: "Art & Craft" },
  { icon: Music, label: "Music & Dance" },
  { icon: Globe, label: "Quiz & Debates" },
  { icon: BookOpen, label: "Reading Club" },
  { icon: Cpu, label: "Robotics & Coding" },
];

const Academics = () => (
  <PublicLayout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">Academics</h1>
        <p className="mt-2 opacity-80">Our curriculum, classes and co-curricular activities</p>
      </div>
    </section>

    {/* Classes */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Classes Offered</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-3xl mx-auto">
          {classes.map((c) => (
            <Card key={c} className="text-center py-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-sm">{c}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Curriculum */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">CBSE Curriculum</h2>
        <p className="text-muted-foreground leading-relaxed text-center mb-6">
          We follow the CBSE curriculum which is designed to provide a comprehensive and balanced education. Our teaching methodology combines traditional classroom learning with modern pedagogical techniques.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Primary (Nursery - V)</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Focus on foundational literacy and numeracy through activity-based learning, storytelling, and creative play.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Middle (VI - VIII)</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Emphasis on conceptual understanding with hands-on experiments, projects, and critical thinking exercises.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Secondary (IX - X)</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Board exam preparation with comprehensive study material, regular assessments, and career guidance.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Senior Secondary (XI - XII)</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Specialized streams (Science, Commerce, Arts) with expert faculty and competitive exam coaching.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Co-curricular */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Co-Curricular Activities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {activities.map((a) => (
            <Card key={a.label} className="text-center py-6 hover:shadow-md transition-shadow">
              <a.icon className="h-10 w-10 mx-auto text-primary mb-3" />
              <p className="font-medium">{a.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </PublicLayout>
);

export default Academics;
