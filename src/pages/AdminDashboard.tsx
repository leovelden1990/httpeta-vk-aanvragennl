import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Eye, Calendar, Mail, Phone, User, FileText, Globe } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

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

const AdminDashboard = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuthAndFetch();
  }, []);

  const checkAuthAndFetch = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/admin/login");
      return;
    }

    // Verify admin role
    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate("/admin/login");
      return;
    }

    fetchApplications();
  };

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
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
    return format(new Date(date), "d MMMM yyyy", { locale: nl });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Uitloggen
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Visumaanvragen</CardTitle>
            <CardDescription>{applications.length} aanvragen totaal</CardDescription>
          </CardHeader>
          <CardContent>
            {applications.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                Nog geen aanvragen ontvangen.
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Naam</TableHead>
                    <TableHead>E-mail</TableHead>
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
                      <p className="text-muted-foreground">Geboorteplaats</p>
                      <p className="font-medium">{selectedApplication.birth_place}</p>
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
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">E-mail</p>
                      <p className="font-medium">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Telefoon</p>
                      <p className="font-medium">{selectedApplication.phone}</p>
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
                      <p className="font-medium">{selectedApplication.passport_number}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Uitgifteland</p>
                      <p className="font-medium">{selectedApplication.passport_issue_country}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Afgiftedatum</p>
                      <p className="font-medium">{formatDate(selectedApplication.passport_issue_date)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Vervaldatum</p>
                      <p className="font-medium">{formatDate(selectedApplication.passport_expiry_date)}</p>
                    </div>
                  </div>
                </div>

                {(selectedApplication.passport_photo_url || selectedApplication.personal_photo_url) && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Documenten
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedApplication.passport_photo_url && (
                        <div>
                          <p className="text-muted-foreground text-sm mb-2">Pasfoto</p>
                          <img
                            src={selectedApplication.passport_photo_url}
                            alt="Pasfoto"
                            className="rounded-lg border border-border w-full object-cover"
                          />
                        </div>
                      )}
                      {selectedApplication.personal_photo_url && (
                        <div>
                          <p className="text-muted-foreground text-sm mb-2">Paspoort scan</p>
                          <img
                            src={selectedApplication.personal_photo_url}
                            alt="Paspoort"
                            className="rounded-lg border border-border w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminDashboard;
