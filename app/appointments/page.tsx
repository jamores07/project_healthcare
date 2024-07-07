// This page component represents the Appointments section of the application.
// It includes the AppointmentBookingForm for scheduling new appointments.

import { AppointmentBookingForm } from "@/components/appointment-booking-form"

export default function Appointments() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Appointment Booking</h1>
      <p className="mb-6">Schedule a new appointment or manage existing ones.</p>
      
      {/* The AppointmentBookingForm component allows users to book new appointments */}
      <AppointmentBookingForm />
      
      {/* TODO: Add a section for displaying existing appointments */}
      {/* This could include a list or table of upcoming and past appointments */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your Appointments</h2>
        <p>Feature coming soon: View and manage your existing appointments here.</p>
      </div>
    </div>
  )
}