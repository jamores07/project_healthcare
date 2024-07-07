// This component displays a list of upcoming appointments

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingAppointments = [
  { patient: "John Doe", date: "2023-07-10", time: "10:00 AM" },
  { patient: "Jane Smith", date: "2023-07-11", time: "2:30 PM" },
  { patient: "Alice Johnson", date: "2023-07-12", time: "11:15 AM" },
]

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {upcomingAppointments.map((appointment, index) => (
            <div key={index} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{appointment.patient}</p>
                <p className="text-sm text-muted-foreground">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}