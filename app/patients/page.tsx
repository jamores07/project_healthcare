import { PatientRegistrationForm } from "@/components/patient-registration-form"

export default function Patients() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Patient Registration</h1>
      <PatientRegistrationForm />
    </div>
  )
}