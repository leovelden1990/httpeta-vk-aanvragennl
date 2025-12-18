import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import PersonalInfoStep from "./form-steps/PersonalInfoStep";
import PassportStep from "./form-steps/PassportStep";
import DocumentUploadStep from "./form-steps/DocumentUploadStep";
import ReviewStep from "./form-steps/ReviewStep";
import { personalInfoSchema, passportSchema, validateStep } from "@/lib/validations/applicationSchema";
import { toast } from "sonner";
import { createDirectCheckout } from "@/lib/shopify";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const validateCurrentStep = (): boolean => {
    let validationResult: { success: boolean; errors: Record<string, string> };

    switch (currentStep) {
      case 1:
        validationResult = validateStep(personalInfoSchema, {
          nationality: formData.nationality,
          firstName: formData.firstName,
          lastName: formData.lastName,
          dateOfBirth: formData.dateOfBirth,
          email: formData.email,
          phone: formData.phone,
        });
        break;
      case 2:
        validationResult = validateStep(passportSchema, {
          passportNumber: formData.passportNumber,
          passportExpiry: formData.passportExpiry,
          arrivalDate: formData.arrivalDate,
        });
        break;
      default:
        return true;
    }

    setErrors(validationResult.errors);
    
    if (!validationResult.success) {
      toast.error("Vul alle verplichte velden correct in");
    }
    
    return validationResult.success;
  };

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < totalSteps) {
      setErrors({});
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
    // Final validation before submit
    const personalResult = validateStep(personalInfoSchema, {
      nationality: formData.nationality,
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      email: formData.email,
      phone: formData.phone,
    });

    const passportResult = validateStep(passportSchema, {
      passportNumber: formData.passportNumber,
      passportExpiry: formData.passportExpiry,
      arrivalDate: formData.arrivalDate,
    });

    if (!personalResult.success || !passportResult.success) {
      toast.error("Er zijn nog validatiefouten in het formulier");
      return;
    }

    setIsSubmitting(true);

    try {
      // UK ETA Aanvraag product variant ID
      const variantId = "gid://shopify/ProductVariant/57052864381315";
      
      // Create Shopify checkout
      const checkoutUrl = await createDirectCheckout(variantId, 1);
      
      // Store form data in localStorage for after payment
      localStorage.setItem('eta_application_data', JSON.stringify(formData));
      
      toast.success("Doorsturen naar betaling...");
      
      // Redirect to Shopify checkout in new tab
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Er is een fout opgetreden. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
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
          <CurrentStepComponent formData={formData} setFormData={setFormData} errors={errors} />
          
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
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verwerken...
                  </>
                ) : (
                  "Betalen & Indienen"
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
