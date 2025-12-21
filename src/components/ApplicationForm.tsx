import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ArrowLeft, Loader2, Check } from "lucide-react";
import BasicInfoStep from "./form-steps/BasicInfoStep";
import TravelerInfoStep from "./form-steps/TravelerInfoStep";
import PassportDetailsStep from "./form-steps/PassportDetailsStep";
import PaymentStep from "./form-steps/PaymentStep";
import OrderSidebar from "./OrderSidebar";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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

const processingPrices: Record<string, number> = {
  urgent: 119.95,
  fast: 79.95,
  standard: 49.95,
};

const governmentFee = 19.28;

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nationality, setNationality] = useState("");
  const [selectedProcessing, setSelectedProcessing] = useState("fast");
  const [travelers, setTravelers] = useState<Traveler[]>([
    {
      id: Date.now(),
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      passportNationality: "",
      passportNumber: "",
      passportExpiry: "",
      skipPassport: false,
    },
  ]);

  const totalSteps = 3;

  // Map internal steps to display steps (3 visible steps)
  const getDisplayStep = (step: number) => {
    if (step === 1) return 1; // Reisdetails
    if (step === 2 || step === 3) return 2; // Uw informatie (includes passport)
    return 3; // Kassa
  };

  const steps = [
    { number: 1, title: "Reisdetails" },
    { number: 2, title: "Uw informatie" },
    { number: 3, title: "Kassa" },
  ];

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!nationality) {
      newErrors.nationality = "Selecteer je nationaliteit";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    travelers.forEach((traveler, index) => {
      if (!traveler.firstName.trim()) {
        newErrors[`firstName-${index}`] = "Voornaam is verplicht";
      }
      if (!traveler.lastName.trim()) {
        newErrors[`lastName-${index}`] = "Achternaam is verplicht";
      }
      if (!traveler.dateOfBirth) {
        newErrors[`dateOfBirth-${index}`] = "Geboortedatum is verplicht";
      }
      if (!traveler.email.trim()) {
        newErrors[`email-${index}`] = "E-mailadres is verplicht";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(traveler.email)) {
        newErrors[`email-${index}`] = "Ongeldig e-mailadres";
      }
    });
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      toast.error("Vul alle verplichte velden correct in");
    }
    
    return Object.keys(newErrors).length === 0;
  };

  // Internal steps: 1=Reisdetails, 2=Traveler Info, 3=Passport, 4=Kassa
  // We have 4 internal steps but show only 3 in the indicator
  const internalTotalSteps = 4;

  const handleNext = () => {
    let isValid = true;
    
    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    }
    
    if (isValid && currentStep < internalTotalSteps) {
      setErrors({});
      // Update passport nationality from main nationality if not set
      if (currentStep === 1) {
        setTravelers(travelers.map(t => ({
          ...t,
          passportNationality: t.passportNationality || nationality
        })));
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setErrors({});
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const processingTime = selectedProcessing === "urgent" ? "1 uur" : selectedProcessing === "fast" ? "4 uur" : "24 uur";
      const pricePerPerson = processingPrices[selectedProcessing];
      const totalPrice = pricePerPerson * travelers.length;

      // Save each traveler to the database
      for (const traveler of travelers) {
        const { error } = await supabase.from("applications").insert({
          nationality: nationality,
          first_name: traveler.firstName,
          last_name: traveler.lastName,
          birth_date: traveler.dateOfBirth,
          birth_place: "N/A", // Not collected in new form
          email: traveler.email,
          phone: "N/A", // Not collected in new form
          passport_number: traveler.skipPassport ? "LATER" : traveler.passportNumber || "LATER",
          passport_expiry_date: traveler.skipPassport ? new Date().toISOString().split('T')[0] : traveler.passportExpiry || new Date().toISOString().split('T')[0],
          passport_issue_date: new Date().toISOString().split('T')[0], // Placeholder
          passport_issue_country: traveler.passportNationality || nationality,
          status: "pending",
        });

        if (error) {
          console.error("Error saving application:", error);
          throw error;
        }
      }

      toast.success(`Aanvraag succesvol ingediend! Totaal: €${totalPrice.toFixed(2)} voor ${travelers.length} reiziger(s) met ${processingTime} verwerking.`);
      
      // Reset form
      setCurrentStep(1);
      setNationality("");
      setTravelers([{
        id: Date.now(),
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        passportNationality: "",
        passportNumber: "",
        passportExpiry: "",
        skipPassport: false,
      }]);
      setSelectedProcessing("fast");
      
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Er is een fout opgetreden. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => {
    const displayStep = getDisplayStep(currentStep);
    
    return (
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                displayStep > step.number 
                  ? 'bg-primary text-primary-foreground' 
                  : displayStep === step.number 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
              }`}>
                {displayStep > step.number ? <Check className="h-4 w-4" /> : step.number}
              </div>
              <span className={`text-xs mt-1 ${
                displayStep >= step.number ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}>
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 md:w-32 h-0.5 mx-2 ${
                displayStep > step.number ? 'bg-primary' : 'bg-muted'
              }`} />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoStep
            nationality={nationality}
            setNationality={setNationality}
            travelers={travelers}
            setTravelers={setTravelers}
            errors={errors}
          />
        );
      case 2:
        return (
          <TravelerInfoStep
            travelers={travelers}
            setTravelers={setTravelers}
            errors={errors}
          />
        );
      case 3:
        return (
          <PassportDetailsStep
            travelers={travelers}
            setTravelers={setTravelers}
            errors={errors}
          />
        );
      case 4:
        return (
          <PaymentStep
            travelers={travelers}
            selectedOption={selectedProcessing}
            setSelectedOption={setSelectedProcessing}
          />
        );
      default:
        return null;
    }
  };

  // Always show sidebar for consistent layout
  const showSidebar = true;

  const handleNextAction = () => {
    if (currentStep < internalTotalSteps) {
      handleNext();
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {renderStepIndicator()}
      
      <Card className="border shadow-lg bg-card/95 backdrop-blur-sm rounded-2xl overflow-hidden">
        <CardContent className="p-6 md:p-8">
          {renderStep()}
        </CardContent>

        {/* Sidebar content now inside the card */}
        <div className="border-t border-border">
          <OrderSidebar 
            step={currentStep} 
            travelers={travelers.length}
            selectedProcessing={selectedProcessing}
            governmentFee={governmentFee}
            onNext={handleNextAction}
            onPrevious={handlePrevious}
            isSubmitting={isSubmitting}
            isLastStep={currentStep === internalTotalSteps}
          />
        </div>
      </Card>
    </div>
  );
};

export default ApplicationForm;
