import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft } from "lucide-react";
import PersonalInfoStep from "./form-steps/PersonalInfoStep";
import PassportStep from "./form-steps/PassportStep";
import DocumentUploadStep from "./form-steps/DocumentUploadStep";
import ReviewStep from "./form-steps/ReviewStep";

export interface FormData {
  nationality: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  passportNumber: string;
  passportExpiry: string;
  arrivalDate: string;
  passportPhoto?: File;
  selfiePhoto?: File;
}

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nationality: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    passportNumber: "",
    passportExpiry: "",
    arrivalDate: "",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: "Persoonlijke gegevens", component: PersonalInfoStep },
    { number: 2, title: "Paspoort details", component: PassportStep },
    { number: 3, title: "Document uploads", component: DocumentUploadStep },
    { number: 4, title: "Overzicht & betaling", component: ReviewStep },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>Stap {currentStep} van {totalSteps}</span>
              <span>{Math.round(progress)}% voltooid</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>
            Vul alsjeblieft alle vereiste velden nauwkeurig in
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <CurrentStepComponent formData={formData} setFormData={setFormData} />
          
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Vorige
            </Button>
            
            {currentStep < totalSteps ? (
              <Button onClick={handleNext}>
                Volgende
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                Aanvraag indienen
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
