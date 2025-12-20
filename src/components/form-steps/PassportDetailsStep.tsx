import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, User } from "lucide-react";
import { useState } from "react";

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

interface PassportDetailsStepProps {
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

const PassportDetailsStep = ({ travelers, setTravelers, errors }: PassportDetailsStepProps) => {
  const [openTravelers, setOpenTravelers] = useState<number[]>(travelers.map(t => t.id));

  const updateTraveler = (id: number, field: keyof Traveler, value: string | boolean) => {
    setTravelers(travelers.map(t => 
      t.id === id ? { ...t, [field]: value } : t
    ));
  };

  const toggleTraveler = (id: number) => {
    setOpenTravelers(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  // Minimum date for passport expiry (today + 6 months)
  const minExpiryDate = new Date();
  minExpiryDate.setMonth(minExpiryDate.getMonth() + 6);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Paspoortgegevens</h2>
        <p className="text-muted-foreground">U kunt deze gegevens nu invullen of later aanleveren.</p>
      </div>

      <div className="space-y-4">
        {travelers.map((traveler, index) => (
          <Card key={traveler.id} className="overflow-hidden">
            <Collapsible 
              open={openTravelers.includes(traveler.id)}
              onOpenChange={() => toggleTraveler(traveler.id)}
            >
              <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">
                    Reiziger #{index + 1} - {traveler.firstName || 'Onbekend'}
                  </span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${openTravelers.includes(traveler.id) ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`passportNationality-${traveler.id}`}>Nationaliteit volgens je paspoort</Label>
                  <Select 
                    value={traveler.passportNationality} 
                    onValueChange={(value) => updateTraveler(traveler.id, 'passportNationality', value)}
                    disabled={traveler.skipPassport}
                  >
                    <SelectTrigger id={`passportNationality-${traveler.id}`} className="h-12 bg-background">
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
                </div>

                <div className="flex items-center space-x-2 py-2">
                  <Checkbox
                    id={`skipPassport-${traveler.id}`}
                    checked={traveler.skipPassport}
                    onCheckedChange={(checked) => updateTraveler(traveler.id, 'skipPassport', checked as boolean)}
                  />
                  <Label 
                    htmlFor={`skipPassport-${traveler.id}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    Paspoortgegevens later aanleveren
                  </Label>
                </div>

                {!traveler.skipPassport && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor={`passportNumber-${traveler.id}`}>Paspoortnummer</Label>
                      <Input
                        id={`passportNumber-${traveler.id}`}
                        value={traveler.passportNumber}
                        onChange={(e) => updateTraveler(traveler.id, 'passportNumber', e.target.value.toUpperCase())}
                        placeholder="AB1234567"
                        className="h-12 uppercase"
                      />
                      {errors?.[`passportNumber-${index}`] && (
                        <p className="text-sm text-destructive">{errors[`passportNumber-${index}`]}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`passportExpiry-${traveler.id}`}>Geldig tot</Label>
                      <Input
                        id={`passportExpiry-${traveler.id}`}
                        type="date"
                        value={traveler.passportExpiry}
                        onChange={(e) => updateTraveler(traveler.id, 'passportExpiry', e.target.value)}
                        min={minExpiryDate.toISOString().split('T')[0]}
                        className="h-12"
                      />
                      {errors?.[`passportExpiry-${index}`] && (
                        <p className="text-sm text-destructive">{errors[`passportExpiry-${index}`]}</p>
                      )}
                    </div>
                  </>
                )}
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PassportDetailsStep;
