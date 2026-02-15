import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    console.log("Expected email: admin@rgn.edu");
    console.log("Expected password: admin@123");
    console.log("Email match:", email === "admin@rgn.edu");
    console.log("Password match:", password === "admin@123");
    
    // Demo credentials for testing
    if (email === "admin@rgn.edu" && password === "admin@123") {
      console.log("Login successful, navigating to dashboard...");
      navigate("/admin/dashboard");
    } else {
      console.log("Login failed");
      alert("Invalid credentials. Please use demo credentials shown below.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <GraduationCap className="h-12 w-12 mx-auto text-primary mb-2" />
          <CardTitle className="text-xl">Admin Login</CardTitle>
          <p className="text-sm text-muted-foreground">R.G.N. Public School</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
          
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm font-semibold text-center mb-2">Demo Credentials</p>
            <div className="text-xs space-y-1 mb-3">
              <p><strong>Email:</strong> admin@rgn.edu</p>
              <p><strong>Password:</strong> admin@123</p>
            </div>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => {
                setEmail("admin@rgn.edu");
                setPassword("admin@123");
              }}
            >
              Auto-Fill Demo Credentials
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
