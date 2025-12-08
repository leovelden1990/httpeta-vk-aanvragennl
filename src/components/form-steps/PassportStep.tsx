import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "../ApplicationForm";

interface PassportStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors?: Record<string, string>;
}

const PassportStep = ({ formData, setFormData, errors = {} }: PassportStepProps) => {
  // Calculate minimum expiry date (6 months from now)
  const minExpiryDate = new Date();
  minExpiryDate.setMonth(minExpiryDate.getMonth() + 6);
  const minExpiryDateStr = minExpiryDate.toISOString().split('T')[0];

  // Today's date for arrival minimum
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="passportNumber">Paspoortnummer *</Label>
          <Input
            id="passportNumber"
            placeholder="Bijvoorbeeld: N12345678"
            value={formData.passportNumber}
            onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value.toUpperCase() })}
            className={errors.passportNumber ? "border-destructive" : ""}
            maxLength={20}
          />
          <p className="text-xs text-muted-foreground">
            Te vinden op de datapagina van uw paspoort
          </p>
          {errors.passportNumber && (
            <p className="text-xs text-destructive">{errors.passportNumber}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="passportExpiry">Vervaldatum paspoort *</Label>
          <Input
            id="passportExpiry"
            type="date"
            value={formData.passportExpiry}
            onChange={(e) => setFormData({ ...formData, passportExpiry: e.target.value })}
            className={errors.passportExpiry ? "border-destructive" : ""}
            min={minExpiryDateStr}
          />
          <p className="text-xs text-muted-foreground">
            Uw paspoort moet minimaal 6 maanden geldig zijn
          </p>
          {errors.passportExpiry && (
            <p className="text-xs text-destructive">{errors.passportExpiry}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="arrivalDate">Verwachte aankomstdatum in UK *</Label>
        <Input
          id="arrivalDate"
          type="date"
          value={formData.arrivalDate}
          onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
          className={errors.arrivalDate ? "border-destructive" : ""}
          min={today}
        />
        <p className="text-xs text-muted-foreground">
          De UK ETA is 2 jaar geldig vanaf datum van uitgifte
        </p>
        {errors.arrivalDate && (
          <p className="text-xs text-destructive">{errors.arrivalDate}</p>
        )}
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
