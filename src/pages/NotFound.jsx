import { Compass } from "lucide-react";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center sm:px-6">
      <Compass className="mb-4 text-brand-500" size={48} aria-hidden="true" />
      <h1 className="font-display text-2xl font-bold text-ink-900">Page not found</h1>
      <p className="mt-2 text-ink-600">The page you're looking for doesn't exist or has moved.</p>
      <Button to="/" variant="primary" className="mt-6">Back to home</Button>
    </section>
  );
}
