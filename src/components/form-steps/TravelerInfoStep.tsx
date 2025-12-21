import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { value: "01", label: "Januari" },
  { value: "02", label: "Februari" },
  { value: "03", label: "Maart" },
  { value: "04", label: "April" },
  { value: "05", label: "Mei" },
  { value: "06", label: "Juni" },
  { value: "07", label: "Juli" },
  { value: "08", label: "Augustus" },
  { value: "09", label: "September" },
  { value: "10", label: "Oktober" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

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

  const parseDateOfBirth = (dateString: string) => {
    if (!dateString) return { day: "", month: "", year: "" };
    const parts = dateString.split("-");
    if (parts.length === 3) {
      return { year: parts[0], month: parts[1], day: parts[2] };
    }
    return { day: "", month: "", year: "" };
  };

  const updateDateOfBirth = (id: number, type: "day" | "month" | "year", value: string) => {
    const traveler = travelers.find(t => t.id === id);
    if (!traveler) return;
    
    const current = parseDateOfBirth(traveler.dateOfBirth);
    const newDate = { ...current, [type]: value };
    
    if (newDate.year && newDate.month && newDate.day) {
      const formattedDay = newDate.day.toString().padStart(2, "0");
      updateTraveler(id, "dateOfBirth", `${newDate.year}-${newDate.month}-${formattedDay}`);
    } else {
      // Store partial date temporarily
      const partialDate = `${newDate.year || "0000"}-${newDate.month || "00"}-${newDate.day?.toString().padStart(2, "0") || "00"}`;
      updateTraveler(id, "dateOfBirth", partialDate);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Persoonlijke gegevens</h2>
        <p className="text-muted-foreground">Voer de gegevens in zoals ze in uw paspoort staan.</p>
      </div>

      <div className="space-y-4">
        {travelers.map((traveler, index) => {
          const dateValues = parseDateOfBirth(traveler.dateOfBirth);
          
          return (
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
                    <Label>Geboortedatum *</Label>
                    <div className="grid grid-cols-3 gap-3">
                      <Select
                        value={dateValues.day ? parseInt(dateValues.day).toString() : ""}
                        onValueChange={(value) => updateDateOfBirth(traveler.id, "day", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Dag" />
                        </SelectTrigger>
                        <SelectContent>
                          {days.map((day) => (
                            <SelectItem key={day} value={day.toString()}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        value={dateValues.month}
                        onValueChange={(value) => updateDateOfBirth(traveler.id, "month", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Maand" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month.value} value={month.value}>
                              {month.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        value={dateValues.year}
                        onValueChange={(value) => updateDateOfBirth(traveler.id, "year", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Jaar" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
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
          );
        })}
      </div>
    </div>
  );
};

export default TravelerInfoStep;