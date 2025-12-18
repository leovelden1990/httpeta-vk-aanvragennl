import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, CreditCard } from "lucide-react";
import { FormData } from "../ApplicationForm";

interface ReviewStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const ReviewStep = ({ formData }: ReviewStepProps) => {
  const totalPrice = 89.00;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Persoonlijke gegevens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Naam</p>
              <p className="font-medium">{formData.firstName} {formData.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nationaliteit</p>
              <p className="font-medium">{formData.nationality || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Geboortedatum</p>
              <p className="font-medium">{formData.dateOfBirth || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">E-mail</p>
              <p className="font-medium">{formData.email || "-"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Paspoort informatie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Paspoortnummer</p>
              <p className="font-medium">{formData.passportNumber || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Vervaldatum</p>
              <p className="font-medium">{formData.passportExpiry || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Aankomstdatum UK</p>
              <p className="font-medium">{formData.arrivalDate || "-"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documenten</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Paspoortfoto</span>
            {formData.passportPhoto ? (
              <Badge variant="default" className="bg-trust">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Geüpload
              </Badge>
            ) : (
              <Badge variant="secondary">Niet geüpload</Badge>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Pasfoto</span>
            {formData.selfiePhoto ? (
              <Badge variant="default" className="bg-trust">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Geüpload
              </Badge>
            ) : (
              <Badge variant="secondary">Niet geüpload</Badge>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <CardTitle>Betalingsoverzicht</CardTitle>
          </div>
          <CardDescription>Eenmalige betaling voor uw UK ETA aanvraag</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Totaal</span>
            <span className="text-primary">€ {totalPrice.toFixed(2)}</span>
          </div>

          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            Na betaling ontvangt u een bevestigingsmail. Uw aanvraag wordt direct verwerkt.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewStep;
