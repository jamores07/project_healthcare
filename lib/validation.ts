import { z } from "zod";

// Patient Registration Validation
export const patientSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  birthDate: z.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z.string().min(5, "Address must be at least 5 characters"),
  emergencyContactName: z.string().min(2, "Emergency contact name must be at least 2 characters"),
  emergencyContactNumber: z.string().min(10, "Emergency contact number must be at least 10 digits"),
  medicalHistory: z.string().optional(),
  allergies: z.string().optional(),
  currentMedications: z.string().optional(),
  consentToTreatment: z.boolean().refine((val) => val === true, {
    message: "You must agree to the consent for treatment",
  }),
});

export type PatientFormValues = z.infer<typeof patientSchema>;

// Date picker Validation
export const appointmentSchema = z.object({
    patientId: z.string(),
    doctorId: z.string(),
    date: z.date(),
    time: z.string(),
    reason: z.string().min(5, "Reason must be at least 5 characters"),
  });
  
export type AppointmentFormValues = z.infer<typeof appointmentSchema>;