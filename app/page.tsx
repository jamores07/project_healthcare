import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to CarePulse</h1>
      <p className="mb-6">Your comprehensive healthcare management solution.</p>
      <Button>Get Started</Button>
    </div>
  );
}