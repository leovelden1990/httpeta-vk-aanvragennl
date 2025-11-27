import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, FileCheck, X } from "lucide-react";
import { FormData } from "../ApplicationForm";

interface DocumentUploadStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const DocumentUploadStep = ({ formData, setFormData }: DocumentUploadStepProps) => {
  const passportInputRef = useRef<HTMLInputElement>(null);
  const selfieInputRef = useRef<HTMLInputElement>(null);
  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);

  const handlePassportUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, passportPhoto: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassportPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelfieUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, selfiePhoto: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelfiePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePassport = () => {
    setFormData({ ...formData, passportPhoto: undefined });
    setPassportPreview(null);
    if (passportInputRef.current) {
      passportInputRef.current.value = "";
    }
  };

  const removeSelfie = () => {
    setFormData({ ...formData, selfiePhoto: undefined });
    setSelfiePreview(null);
    if (selfieInputRef.current) {
      selfieInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div>
          <Label className="text-base">Paspoortfoto *</Label>
          <p className="text-sm text-muted-foreground">
            Upload een duidelijke foto van de datapagina van uw paspoort
          </p>
        </div>
        
        <input
          ref={passportInputRef}
          type="file"
          accept="image/*"
          onChange={handlePassportUpload}
          className="hidden"
        />
        
        {!passportPreview ? (
          <div
            onClick={() => passportInputRef.current?.click()}
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 p-12 transition-colors hover:border-primary hover:bg-muted"
          >
            <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="mb-2 text-sm font-medium">Klik om bestand te uploaden</p>
            <p className="text-xs text-muted-foreground">JPG, PNG of PDF (max. 10MB)</p>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-lg border">
            <img src={passportPreview} alt="Passport preview" className="h-64 w-full object-cover" />
            <Button
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2"
              onClick={removePassport}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center gap-2 text-white">
                <FileCheck className="h-5 w-5" />
                <span className="text-sm font-medium">Paspoortfoto geüpload</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-base">Pasfoto *</Label>
          <p className="text-sm text-muted-foreground">
            Upload een recente pasfoto van uzelf (zoals op paspoort)
          </p>
        </div>
        
        <input
          ref={selfieInputRef}
          type="file"
          accept="image/*"
          onChange={handleSelfieUpload}
          className="hidden"
        />
        
        {!selfiePreview ? (
          <div
            onClick={() => selfieInputRef.current?.click()}
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 p-12 transition-colors hover:border-primary hover:bg-muted"
          >
            <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="mb-2 text-sm font-medium">Klik om bestand te uploaden</p>
            <p className="text-xs text-muted-foreground">JPG, PNG (max. 10MB)</p>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-lg border">
            <img src={selfiePreview} alt="Selfie preview" className="h-64 w-full object-cover" />
            <Button
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2"
              onClick={removeSelfie}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center gap-2 text-white">
                <FileCheck className="h-5 w-5" />
                <span className="text-sm font-medium">Pasfoto geüpload</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
        <h4 className="mb-2 font-semibold text-accent">Foto vereisten</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Foto moet helder en scherp zijn</li>
          <li>• Gezicht moet duidelijk zichtbaar zijn</li>
          <li>• Foto mag niet ouder zijn dan 6 maanden</li>
          <li>• Neutrale achtergrond voor pasfoto</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentUploadStep;
