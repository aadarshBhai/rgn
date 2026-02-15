import { useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ClipboardList, FileText, UserCheck, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { icon: ClipboardList, title: "Step 1", desc: "Fill the admission enquiry form online or visit the school office." },
  { icon: FileText, title: "Step 2", desc: "Submit required documents (birth certificate, previous marksheet, photos)." },
  { icon: UserCheck, title: "Step 3", desc: "Appear for the admission test/interaction as per schedule." },
  { icon: CheckCircle, title: "Step 4", desc: "Complete fee payment and collect your admission confirmation." },
];

const Admission = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", classApplied: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.classApplied) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Enquiry Submitted!", description: "We will get back to you shortly." });
    setForm({ name: "", email: "", phone: "", classApplied: "", message: "" });
  };

  return (
    <PublicLayout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Admission</h1>
          <p className="mt-2 opacity-80">Join R.G.N. Public School — Admissions Open for 2025-26</p>
        </div>
      </section>

      {/* Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Admission Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            R.G.N. Public School welcomes admissions for Nursery to Class XII. We seek students who are eager to learn and grow. Our admission process is simple, transparent, and designed to identify the potential in every child.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Admission Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <Card key={i} className="text-center py-6">
                <s.icon className="h-10 w-10 mx-auto text-primary mb-3" />
                <CardHeader className="py-2"><CardTitle className="text-lg">{s.title}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{s.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Admission Enquiry</h2>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <Input placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <Select value={form.classApplied} onValueChange={(v) => setForm({ ...form, classApplied: v })}>
                  <SelectTrigger><SelectValue placeholder="Select Class *" /></SelectTrigger>
                  <SelectContent>
                    {["Nursery","LKG","UKG","Class I","Class II","Class III","Class IV","Class V","Class VI","Class VII","Class VIII","Class IX","Class X","Class XI","Class XII"].map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea placeholder="Message (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <Button type="submit" className="w-full">Submit Enquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Admission;
