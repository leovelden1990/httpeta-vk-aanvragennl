import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Eye, Mail, User, FileText, Shield } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

// Hardcoded credentials
const ADMIN_EMAIL = "leovelden1990@gmail.com";
const ADMIN_PASSWORD = "Nederland2026";

interface Application {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  birth_date: string;
  birth_place: string;
  nationality: string;
  passport_number: string;
  passport_issue_date: string;
  passport_expiry_date: string;
  passport_issue_country: string;
  passport_photo_url: string | null;
  personal_photo_url: string | null;
  status: string;
  created_at: string;
}

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already logged in from session storage
    const loggedIn = sessionStorage.getItem("dashboard_logged_in");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      fetchApplications();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      sessionStorage.setItem("dashboard_logged_in", "true");
      fetchApplications();
      toast({
        title: "Welkom!",
        description: "Je bent succesvol ingelogd.",
      });
    } else {
      setLoginError("Ongeldige inloggegevens");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("dashboard_logged_in");
    setEmail("");
    setPassword("");
    setApplications([]);
  };

  const fetchApplications = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching applications:", error);
      toast({
        title: "Fout",
        description: "Kon aanvragen niet laden.",
        variant: "destructive",
      });
    } else {
      setApplications(data || []);
    }
    setIsLoading(false);
  };

  const openApplicationDetail = (application: Application) => {
    setSelectedApplication(application);
    setIsSheetOpen(true);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("applications")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      toast({
        title: "Fout",
        description: "Kon status niet bijwerken.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succes",
        description: "Status bijgewerkt.",
      });
      fetchApplications();
      if (selectedApplication?.id === id) {
        setSelectedApplication({ ...selectedApplication, status: newStatus });
      }
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "secondary",
      approved: "default",
      rejected: "destructive",
    };
    const labels: Record<string, string> = {
      pending: "In behandeling",
      approved: "Goedgekeurd",
      rejected: "Afgewezen",
    };
    return <Badge variant={variants[status] || "outline"}>{labels[status] || status}</Badge>;
  };

  const formatDate = (date: string) => {
    try {
      return format(new Date(date), "d MMMM yyyy", { locale: nl });
    } catch {
      return date;
    }
  };

  // Login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Dashboard Login</CardTitle>
            <CardDescription>
              Log in om aanvragen te beheren
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mailadres</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@voorbeeld.nl"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Wachtwoord</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              {loginError && (
                <p className="text-sm text-destructive">{loginError}</p>
              )}
              <Button type="submit" className="w-full">
                Inloggen
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Dashboard view
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">IBO Exclusive - Dashboard</h1>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Uitloggen
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>ETA Aanvragen</CardTitle>
                <CardDescription>{applications.length} aanvragen totaal</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={fetchApplications} disabled={isLoading}>
                {isLoading ? "Laden..." : "Vernieuwen"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : applications.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                Nog geen aanvragen ontvangen.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Naam</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>Nationaliteit</TableHead>
                      <TableHead>Paspoort</TableHead>
                      <TableHead>Datum</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actie</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">
                          {app.first_name} {app.last_name}
                        </TableCell>
                        <TableCell>{app.email}</TableCell>
                        <TableCell>{app.nationality}</TableCell>
                        <TableCell>
                          <span className={app.passport_number === "LATER" ? "text-muted-foreground italic" : ""}>
                            {app.passport_number === "LATER" ? "Later aanleveren" : app.passport_number}
                          </span>
                        </TableCell>
                        <TableCell>{formatDate(app.created_at)}</TableCell>
                        <TableCell>{getStatusBadge(app.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openApplicationDetail(app)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Bekijken
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          {selectedApplication && (
            <>
              <SheetHeader>
                <SheetTitle>
                  {selectedApplication.first_name} {selectedApplication.last_name}
                </SheetTitle>
                <SheetDescription>
                  Aanvraag ingediend op {formatDate(selectedApplication.created_at)}
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-2">
                  {getStatusBadge(selectedApplication.status)}
                  <div className="flex gap-2 ml-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus(selectedApplication.id, "approved")}
                      disabled={selectedApplication.status === "approved"}
                    >
                      Goedkeuren
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => updateStatus(selectedApplication.id, "rejected")}
                      disabled={selectedApplication.status === "rejected"}
                    >
                      Afwijzen
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Persoonlijke gegevens
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Naam</p>
                      <p className="font-medium">{selectedApplication.first_name} {selectedApplication.last_name}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Geboortedatum</p>
                      <p className="font-medium">{formatDate(selectedApplication.birth_date)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Nationaliteit</p>
                      <p className="font-medium">{selectedApplication.nationality}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contactgegevens
                  </h3>
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">E-mail</p>
                      <p className="font-medium">{selectedApplication.email}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Paspoortgegevens
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Paspoortnummer</p>
                      <p className={`font-medium ${selectedApplication.passport_number === "LATER" ? "italic text-muted-foreground" : ""}`}>
                        {selectedApplication.passport_number === "LATER" ? "Wordt later aangeleverd" : selectedApplication.passport_number}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Uitgifteland</p>
                      <p className="font-medium">{selectedApplication.passport_issue_country}</p>
                    </div>
                    {selectedApplication.passport_number !== "LATER" && (
                      <div>
                        <p className="text-muted-foreground">Vervaldatum</p>
                        <p className="font-medium">{formatDate(selectedApplication.passport_expiry_date)}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Dashboard;
