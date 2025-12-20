import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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

interface TravelerInfoStepProps {
  travelers: Traveler[];
  setTravelers: (travelers: Traveler[]) => void;
  errors?: Record<string, string>;
}

const TravelerInfoStep = ({ travelers, setTravelers, errors }: TravelerInfoStepProps) => {
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

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Persoonlijke gegevens</h2>
        <p className="text-muted-foreground">Voer de gegevens in zoals ze in uw paspoort staan.</p>
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
                    Reiziger #{index + 1} {traveler.firstName && `- ${traveler.firstName}`}
                  </span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${openTravelers.includes(traveler.id) ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`firstName-${traveler.id}`}>Voornaam *</Label>
                    <Input
                      id={`firstName-${traveler.id}`}
                      value={traveler.firstName}
                      onChange={(e) => updateTraveler(traveler.id, 'firstName', e.target.value)}
                      placeholder="Voornaam"
                      className="h-12"
                    />
                    {errors?.[`firstName-${index}`] && (
                      <p className="text-sm text-destructive">{errors[`firstName-${index}`]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`lastName-${traveler.id}`}>Achternaam *</Label>
                    <Input
                      id={`lastName-${traveler.id}`}
                      value={traveler.lastName}
                      onChange={(e) => updateTraveler(traveler.id, 'lastName', e.target.value)}
                      placeholder="Achternaam"
                      className="h-12"
                    />
                    {errors?.[`lastName-${index}`] && (
                      <p className="text-sm text-destructive">{errors[`lastName-${index}`]}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`dateOfBirth-${traveler.id}`}>Geboortedatum *</Label>
                  <Input
                    id={`dateOfBirth-${traveler.id}`}
                    type="date"
                    value={traveler.dateOfBirth}
                    onChange={(e) => updateTraveler(traveler.id, 'dateOfBirth', e.target.value)}
                    className="h-12"
                    max={new Date().toISOString().split('T')[0]}
                  />
                  {errors?.[`dateOfBirth-${index}`] && (
                    <p className="text-sm text-destructive">{errors[`dateOfBirth-${index}`]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`email-${traveler.id}`}>E-mailadres *</Label>
                  <Input
                    id={`email-${traveler.id}`}
                    type="email"
                    value={traveler.email}
                    onChange={(e) => updateTraveler(traveler.id, 'email', e.target.value)}
                    placeholder="email@voorbeeld.nl"
                    className="h-12"
                  />
                  {errors?.[`email-${index}`] && (
                    <p className="text-sm text-destructive">{errors[`email-${index}`]}</p>
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelerInfoStep;
