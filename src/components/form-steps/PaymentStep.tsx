import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Timer, Shield, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessingOption {
  id: string;
  name: string;
  time: string;
  price: number;
  icon: React.ReactNode;
  popular?: boolean;
}

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

interface PaymentStepProps {
  travelers: Traveler[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const processingOptions: ProcessingOption[] = [
  {
    id: "urgent",
    name: "Dringend",
    time: "1 uur verwerking",
    price: 119.95,
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "fast",
    name: "Snel",
    time: "4 uur verwerking",
    price: 79.95,
    icon: <Timer className="h-5 w-5" />,
    popular: true,
  },
  {
    id: "standard",
    name: "Standaard",
    time: "24 uur verwerking",
    price: 49.95,
    icon: <Clock className="h-5 w-5" />,
  },
];

const PaymentStep = ({ travelers, selectedOption, setSelectedOption }: PaymentStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Kies je verwerkingstijd</h2>
        <p className="text-muted-foreground">Selecteer hoe snel je je ETA wilt ontvangen.</p>
      </div>

      <div className="grid gap-4">
        {processingOptions.map((option) => (
          <Card
            key={option.id}
            className={cn(
              "relative p-4 cursor-pointer transition-all border-2",
              selectedOption === option.id 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/50"
            )}
            onClick={() => setSelectedOption(option.id)}
          >
            {option.popular && (
              <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                Populair
              </Badge>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-2 rounded-lg",
                  selectedOption === option.id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  {option.icon}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{option.name} - {option.time}</p>
                  <p className="text-sm text-muted-foreground">Per reiziger</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-xl font-bold text-foreground">€ {option.price.toFixed(2)}</p>
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                  selectedOption === option.id 
                    ? "border-primary bg-primary" 
                    : "border-muted-foreground"
                )}>
                  {selectedOption === option.id && <Check className="h-4 w-4 text-primary-foreground" />}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PaymentStep;
