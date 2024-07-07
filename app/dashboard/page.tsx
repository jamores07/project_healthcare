// This is the main dashboard page, displaying an overview of the healthcare management system

import { StatCard } from "@/components/dashboard/stat-card"
import { RecentPatients } from "@/components/dashboard/recent-patients"
import { UpcomingAppointments } from "@/components/dashboard/upcoming-appointments"
import { Users, Calendar, Activity } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatCard title="Total Patients" value={1234} icon={<Users className="h-4 w-4 text-muted-foreground" />} />
        <StatCard title="Appointments Today" value={12} icon={<Calendar className="h-4 w-4 text-muted-foreground" />} />
        <StatCard title="Active Treatments" value={56} icon={<Activity className="h-4 w-4 text-muted-foreground" />} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <RecentPatients />
        <UpcomingAppointments />
      </div>
    </div>
  )
}