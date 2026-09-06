import { Check } from "lucide-react";

export default function ProgressSteps({ steps, current }) {
  return (
    <ol className="flex items-center gap-2 sm:gap-4" aria-label="Progress">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isDone = stepNumber < current;
        const isActive = stepNumber === current;
        return (
          <li key={step} className="flex flex-1 items-center gap-2">
            <span
              aria-current={isActive ? "step" : undefined}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                isDone
                  ? "bg-brand-500 text-white"
                  : isActive
                    ? "bg-gold-300 text-ink-900"
                    : "bg-ink-100 text-ink-400"
              }`}
            >
              {isDone ? <Check size={16} aria-hidden="true" /> : stepNumber}
            </span>
            <span
              className={`hidden text-sm font-medium sm:inline ${
                isActive ? "text-ink-900" : "text-ink-400"
              }`}
            >
              {step}
            </span>
            {stepNumber < steps.length && <span className="h-px flex-1 bg-ink-100" />}
          </li>
        );
      })}
    </ol>
  );
}
