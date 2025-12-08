import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "../ApplicationForm";

interface PersonalInfoStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors?: Record<string, string>;
}

const PersonalInfoStep = ({ formData, setFormData, errors = {} }: PersonalInfoStepProps) => {
  const nationalities = [
    "Nederlandse",
    "Belgische",
    "Duitse",
    "Franse",
    "Spaanse",
    "Italiaanse",
    "Andere",
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nationality">Nationaliteit *</Label>
          <Select
            value={formData.nationality}
            onValueChange={(value) => setFormData({ ...formData, nationality: value })}
          >
            <SelectTrigger id="nationality" className={errors.nationality ? "border-destructive" : ""}>
              <SelectValue placeholder="Selecteer nationaliteit" />
            </SelectTrigger>
            <SelectContent>
              {nationalities.map((nat) => (
                <SelectItem key={nat} value={nat}>
                  {nat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.nationality && (
            <p className="text-xs text-destructive">{errors.nationality}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Geboortedatum *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            className={errors.dateOfBirth ? "border-destructive" : ""}
            max={new Date().toISOString().split('T')[0]}
          />
          {errors.dateOfBirth && (
            <p className="text-xs text-destructive">{errors.dateOfBirth}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Voornaam *</Label>
          <Input
            id="firstName"
            placeholder="Zoals op paspoort"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={errors.firstName ? "border-destructive" : ""}
            maxLength={100}
          />
          {errors.firstName && (
            <p className="text-xs text-destructive">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Achternaam *</Label>
          <Input
            id="lastName"
            placeholder="Zoals op paspoort"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={errors.lastName ? "border-destructive" : ""}
            maxLength={100}
          />
          {errors.lastName && (
            <p className="text-xs text-destructive">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">E-mailadres *</Label>
          <Input
            id="email"
            type="email"
            placeholder="uw@email.nl"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "border-destructive" : ""}
            maxLength={255}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefoonnummer *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+31 6 12345678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={errors.phone ? "border-destructive" : ""}
            maxLength={16}
          />
          <p className="text-xs text-muted-foreground">
            Gebruik internationaal formaat (bijv. +31612345678)
          </p>
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
