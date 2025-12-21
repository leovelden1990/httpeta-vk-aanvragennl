import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, Calendar, Plane, Clock } from "lucide-react";

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
  { name: "Nederlands", flag: "🇳🇱" },
  { name: "Belgisch", flag: "🇧🇪" },
  { name: "Duits", flag: "🇩🇪" },
  { name: "Frans", flag: "🇫🇷" },
  { name: "Spaans", flag: "🇪🇸" },
  { name: "Italiaans", flag: "🇮🇹" },
  { name: "Portugees", flag: "🇵🇹" },
  { name: "Pools", flag: "🇵🇱" },
  { name: "Oostenrijks", flag: "🇦🇹" },
  { name: "Zweeds", flag: "🇸🇪" },
  { name: "Noors", flag: "🇳🇴" },
  { name: "Deens", flag: "🇩🇰" },
  { name: "Fins", flag: "🇫🇮" },
  { name: "Iers", flag: "🇮🇪" },
  { name: "Grieks", flag: "🇬🇷" },
  { name: "Tsjechisch", flag: "🇨🇿" },
  { name: "Hongaars", flag: "🇭🇺" },
  { name: "Roemeens", flag: "🇷🇴" },
  { name: "Bulgaars", flag: "🇧🇬" },
  { name: "Kroatisch", flag: "🇭🇷" },
  { name: "Slowaaks", flag: "🇸🇰" },
  { name: "Sloveens", flag: "🇸🇮" },
  { name: "Ests", flag: "🇪🇪" },
  { name: "Lets", flag: "🇱🇻" },
  { name: "Litouws", flag: "🇱🇹" },
  { name: "Cypriotisch", flag: "🇨🇾" },
  { name: "Maltees", flag: "🇲🇹" },
  { name: "Luxemburgs", flag: "🇱🇺" },
  { name: "Amerikaans", flag: "🇺🇸" },
  { name: "Canadees", flag: "🇨🇦" },
  { name: "Australisch", flag: "🇦🇺" },
  { name: "Japans", flag: "🇯🇵" },
  { name: "Zuid-Koreaans", flag: "🇰🇷" },
  { name: "Braziliaans", flag: "🇧🇷" },
  { name: "Mexicaans", flag: "🇲🇽" },
  { name: "Argentijns", flag: "🇦🇷" },
  { name: "Chileens", flag: "🇨🇱" },
  { name: "Colombiaans", flag: "🇨🇴" },
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

  const selectedNationality = nationalities.find(n => n.name === nationality);

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
                <SelectValue placeholder="Selecteer nationaliteit">
                  {selectedNationality && (
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{selectedNationality.flag}</span>
                      {selectedNationality.name}
                    </span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-background border shadow-lg z-50 max-h-80">
                {nationalities.map((nat) => (
                  <SelectItem key={nat.name} value={nat.name} className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{nat.flag}</span>
                      {nat.name}
                    </span>
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

        <Card className="p-6 bg-card border border-border shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🇬🇧</span>
            <h3 className="text-xl font-bold text-foreground">United Kingdom ETA</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="p-3 bg-emerald-500/20 rounded-full">
                <Calendar className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Geldig gedurende</p>
                <p className="font-semibold text-foreground">2 jaar na afgifte</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Plane className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Aantal reizen</p>
                <p className="font-semibold text-foreground">Meermaals inreizen</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="p-3 bg-amber-500/20 rounded-full">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Maximaal verblijf</p>
                <p className="font-semibold text-foreground">180 dagen per verblijf</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BasicInfoStep;
