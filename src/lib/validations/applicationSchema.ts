import { z } from 'zod';

// Validatie schema voor persoonlijke gegevens
export const personalInfoSchema = z.object({
  nationality: z.string().min(1, 'Selecteer een nationaliteit'),
  firstName: z.string()
    .min(1, 'Voornaam is verplicht')
    .max(100, 'Voornaam mag maximaal 100 tekens bevatten')
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, 'Voornaam mag alleen letters, spaties en koppeltekens bevatten'),
  lastName: z.string()
    .min(1, 'Achternaam is verplicht')
    .max(100, 'Achternaam mag maximaal 100 tekens bevatten')
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, 'Achternaam mag alleen letters, spaties en koppeltekens bevatten'),
  dateOfBirth: z.string()
    .min(1, 'Geboortedatum is verplicht')
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      return birthDate < today;
    }, 'Geboortedatum moet in het verleden liggen')
    .refine((date) => {
      const birthDate = new Date(date);
      const minDate = new Date('1900-01-01');
      return birthDate >= minDate;
    }, 'Ongeldige geboortedatum'),
  email: z.string()
    .min(1, 'E-mailadres is verplicht')
    .email('Ongeldig e-mailadres')
    .max(255, 'E-mailadres mag maximaal 255 tekens bevatten'),
  phone: z.string()
    .min(1, 'Telefoonnummer is verplicht')
    .regex(/^\+[0-9]{10,15}$/, 'Ongeldig telefoonnummer (gebruik formaat: +31612345678)')
    .max(16, 'Telefoonnummer mag maximaal 16 tekens bevatten'),
});

// Validatie schema voor paspoort details
export const passportSchema = z.object({
  passportNumber: z.string()
    .min(6, 'Paspoortnummer moet minimaal 6 tekens bevatten')
    .max(20, 'Paspoortnummer mag maximaal 20 tekens bevatten')
    .regex(/^[A-Za-z0-9]+$/, 'Paspoortnummer mag alleen letters en cijfers bevatten'),
  passportExpiry: z.string()
    .min(1, 'Vervaldatum paspoort is verplicht')
    .refine((date) => {
      const expiryDate = new Date(date);
      const today = new Date();
      const sixMonthsFromNow = new Date();
      sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
      return expiryDate > sixMonthsFromNow;
    }, 'Paspoort moet minimaal 6 maanden geldig zijn'),
  arrivalDate: z.string()
    .min(1, 'Aankomstdatum is verplicht')
    .refine((date) => {
      const arrivalDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return arrivalDate >= today;
    }, 'Aankomstdatum moet in de toekomst liggen'),
});

// Gecombineerd schema voor het volledige formulier
export const applicationFormSchema = personalInfoSchema.merge(passportSchema);

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type PassportFormData = z.infer<typeof passportSchema>;
export type ApplicationFormData = z.infer<typeof applicationFormSchema>;

// Validatie functie voor een specifiek schema
export function validateStep<T>(schema: z.ZodSchema<T>, data: Partial<T>): { success: boolean; errors: Record<string, string> } {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return { success: true, errors: {} };
  }
  
  const errors: Record<string, string> = {};
  result.error.errors.forEach((error) => {
    const path = error.path.join('.');
    if (path) {
      errors[path] = error.message;
    }
  });
  
  return { success: false, errors };
}
