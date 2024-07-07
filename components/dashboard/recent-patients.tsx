// This component displays a list of recently added patients

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentPatients = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Smith", email: "jane@example.com" },
  { name: "Alice Johnson", email: "alice@example.com" },
]

export function RecentPatients() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Patients</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentPatients.map((patient, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>{patient.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{patient.name}</p>
                <p className="text-sm text-muted-foreground">{patient.email}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}