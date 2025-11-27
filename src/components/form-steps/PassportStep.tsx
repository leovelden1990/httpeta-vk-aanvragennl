import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "../ApplicationForm";

interface PassportStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PassportStep = ({ formData, setFormData }: PassportStepProps) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="passportNumber">Paspoortnummer *</Label>
          <Input
            id="passportNumber"
            placeholder="Bijvoorbeeld: N12345678"
            value={formData.passportNumber}
            onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
          />
          <p className="text-xs text-muted-foreground">
            Te vinden op de datapagina van uw paspoort
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="passportExpiry">Vervaldatum paspoort *</Label>
          <Input
            id="passportExpiry"
            type="date"
            value={formData.passportExpiry}
            onChange={(e) => setFormData({ ...formData, passportExpiry: e.target.value })}
          />
          <p className="text-xs text-muted-foreground">
            Uw paspoort moet minimaal 6 maanden geldig zijn
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="arrivalDate">Verwachte aankomstdatum in UK *</Label>
        <Input
          id="arrivalDate"
          type="date"
          value={formData.arrivalDate}
          onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
        />
        <p className="text-xs text-muted-foreground">
          De UK ETA is 2 jaar geldig vanaf datum van uitgifte
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
        <h4 className="mb-2 font-semibold text-primary">Belangrijk</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Controleer of alle gegevens exact overeenkomen met uw paspoort</li>
          <li>• Uw paspoort moet geldig zijn voor de hele duur van uw verblijf</li>
          <li>• De UK ETA is geldig voor meerdere reizen binnen 2 jaar</li>
        </ul>
      </div>
    </div>
  );
};

export default PassportStep;
