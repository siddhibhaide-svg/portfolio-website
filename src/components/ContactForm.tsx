import { AlertCircle, Send } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { SITE } from '@/lib/site';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const EMPTY_VALUES: FormValues = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INPUT_CLASS =
  'w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink placeholder:text-muted/70 transition-all duration-300 focus:border-brand focus:outline-none focus:glow-brand';

function validate(values: FormValues): string | null {
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) return 'Please enter your name.';
  if (name.length > 100) return 'Name must be 100 characters or fewer.';
  if (!EMAIL_PATTERN.test(email) || email.length > 255) return 'Please enter a valid email address.';
  if (!message) return 'Please write a message.';
  if (message.length > 2000) return 'Message must be 2000 characters or fewer.';
  return null;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const problem = validate(values);
    setErrorMessage(problem);
    if (problem) return;

    const name = values.name.trim();
    const email = values.email.trim();
    const subject = `Portfolio message from ${name}`;
    const body = `${values.message.trim()}\n\nFrom: ${name} (${email})`;

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            className={INPUT_CLASS}
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={INPUT_CLASS}
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell me about your idea, opportunity, or question."
          className={`${INPUT_CLASS} resize-y`}
        />
      </label>

      {errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-rose/50 bg-canvas px-4 py-3 text-sm text-ink"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose" aria-hidden />
          {errorMessage}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Your email app opens with this message ready to send.</p>
        <button
          type="submit"
          className="btn-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:glow-rose"
        >
          Open Mail Draft
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </button>
      </div>
    </form>
  );
}
