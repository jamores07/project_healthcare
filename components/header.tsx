import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-dark-400 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CarePulse
        </Link>
        <nav>
          <Button asChild variant="link">
            <Link href="/appointments">Appointments</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/patients">Patients</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}