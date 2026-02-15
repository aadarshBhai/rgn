import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold text-lg">R.G.N. Public School</span>
          </div>
          <p className="text-sm opacity-80">
            A CBSE affiliated school in Gaya, Bihar committed to providing quality education and holistic development of students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { label: "About Us", path: "/about" },
              { label: "Academics", path: "/academics" },
              { label: "Admission", path: "/admission" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Gaya - Sherghati Rd, Mahavir Colony, Gaya, Bihar 823001
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              091995 19154
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              info@rgnpublicschool.edu.in
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-semibold mb-4">School Hours</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Monday - Friday: 8:00 AM - 2:30 PM</li>
            <li>Saturday: 8:00 AM - 12:30 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10 py-4 text-center text-xs opacity-60">
      © 2025 R.G.N. Public School, Gaya. All rights reserved.
    </div>
  </footer>
);

export default Footer;
