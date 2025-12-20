import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, Calendar, Globe, Users } from "lucide-react";

interface Traveler {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  passportNationality: string;
  passportNumber: string;
  passportExpiry: string;
  skipPassport: boolean;
}

interface BasicInfoStepProps {
  nationality: string;
  setNationality: (value: string) => void;
  travelers: Traveler[];
  setTravelers: (travelers: Traveler[]) => void;
  errors?: Record<string, string>;
}

const nationalities = [
  "Nederlands",
  "Belgisch",
  "Duits",
  "Frans",
  "Spaans",
  "Italiaans",
  "Portugees",
  "Pools",
  "Oostenrijks",
  "Zweeds",
  "Noors",
  "Deens",
  "Fins",
  "Iers",
  "Grieks",
  "Tsjechisch",
  "Hongaars",
  "Roemeens",
  "Bulgaars",
  "Kroatisch",
  "Slowaaks",
  "Sloveens",
  "Ests",
  "Lets",
  "Litouws",
  "Cypriotisch",
  "Maltees",
  "Luxemburgs",
  "Amerikaans",
  "Canadees",
  "Australisch",
  "Japans",
  "Zuid-Koreaans",
  "Braziliaans",
  "Mexicaans",
  "Argentijns",
  "Chileens",
  "Colombiaans",
];

const BasicInfoStep = ({ nationality, setNationality, travelers, setTravelers, errors }: BasicInfoStepProps) => {
  const addTraveler = () => {
    const newTraveler: Traveler = {
      id: Date.now(),
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      passportNationality: nationality,
      passportNumber: "",
      passportExpiry: "",
      skipPassport: false,
    };
    setTravelers([...travelers, newTraveler]);
  };

  const removeTraveler = () => {
    if (travelers.length > 1) {
      setTravelers(travelers.slice(0, -1));
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Vraag nu je ETA voor het Verenigd Koninkrijk aan</h2>
        <p className="text-muted-foreground">U heeft een reisdocument nodig als u van plan bent het land binnen te komen.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="nationality" className="text-base font-medium">
              Wat is je nationaliteit?
            </Label>
            <Select value={nationality} onValueChange={setNationality}>
              <SelectTrigger id="nationality" className="h-12 bg-background">
                <SelectValue placeholder="Selecteer nationaliteit" />
              </SelectTrigger>
              <SelectContent className="bg-background border shadow-lg z-50">
                {nationalities.map((nat) => (
                  <SelectItem key={nat} value={nat} className="cursor-pointer">
                    {nat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Zorg dat je de nationaliteit kiest van het paspoort waarmee je reist.
            </p>
            {errors?.nationality && (
              <p className="text-sm text-destructive">{errors.nationality}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label className="text-base font-medium">Totaal aantal aanvragers</Label>
            <div className="flex items-center gap-4">
              <Button 
                type="button"
                variant="outline" 
                size="icon" 
                onClick={removeTraveler}
                disabled={travelers.length <= 1}
                className="h-12 w-12 rounded-full"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-2xl font-semibold w-8 text-center">{travelers.length}</span>
              <Button 
                type="button"
                variant="outline" 
                size="icon" 
                onClick={addTraveler}
                className="h-12 w-12 rounded-full"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Card className="p-6 bg-muted/30 border-0">
          <h3 className="text-xl font-bold text-foreground mb-6">Verenigd Koninkrijk ETA</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Geldig gedurende</p>
                <p className="font-semibold text-foreground">2 jaar na afgifte ervan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Aantal reizen</p>
                <p className="font-semibold text-foreground">Meermaals inreizen</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Maximaal verblijf</p>
                <p className="font-semibold text-foreground">186 dagen per verblijf</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BasicInfoStep;
