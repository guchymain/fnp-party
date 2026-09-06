import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { TextField, TextareaField } from "../components/FormField.jsx";
import { isRequired, isEmail, runValidation } from "../utils/validators.js";
import { appendToLocalStorageList } from "../hooks/useLocalStorage.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const stepErrors = runValidation(form, {
      name: [[isRequired, "Name is required"]],
      email: [[isRequired, "Email is required"], [isEmail, "Enter a valid email"]],
      message: [[isRequired, "Message is required"]],
    });
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    appendToLocalStorageList("fnp_contact_messages", { ...form, submittedAt: new Date().toISOString() });
    setSent(true);
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" description="Questions, press inquiries, or feedback — we'd like to hear from you." />
      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-bold text-ink-900">National Secretariat</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-600">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-brand-500" aria-hidden="true" /> Plot 14, Unity Crescent, Central Business District, Abuja, FCT</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-500" aria-hidden="true" /> +234 800 000 0000</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-brand-500" aria-hidden="true" /> info@forwardnigeriaparty.ng</li>
          </ul>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-ink-100 bg-white p-6 text-center">
            <Send className="mx-auto mb-3 text-brand-500" size={32} aria-hidden="true" />
            <h2 className="font-display text-lg font-bold text-ink-900">Message sent</h2>
            <p className="mt-2 text-sm text-ink-600">We'll get back to you within a few business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-ink-100 bg-white p-6">
            <TextField id="c-name" label="Full name" required value={form.name} error={errors.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
            <TextField id="c-email" type="email" label="Email address" required value={form.email} error={errors.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
            <TextareaField id="c-message" label="Message" required value={form.message} error={errors.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
            <Button type="submit" variant="primary" size="lg" className="w-full">Send message</Button>
          </form>
        )}
      </section>
    </>
  );
}
