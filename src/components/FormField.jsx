function FieldWrapper({ id, label, error, hint, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-900">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-ink-400">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const baseInputClasses =
  "w-full rounded-xl border px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500";

function borderClass(error) {
  return error ? "border-red-400" : "border-ink-100";
}

export function TextField({ id, label, error, hint, required, ...props }) {
  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint} required={required}>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${baseInputClasses} ${borderClass(error)}`}
        {...props}
      />
    </FieldWrapper>
  );
}

export function TextareaField({ id, label, error, hint, required, ...props }) {
  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint} required={required}>
      <textarea
        id={id}
        rows={4}
        aria-invalid={Boolean(error)}
        className={`${baseInputClasses} ${borderClass(error)}`}
        {...props}
      />
    </FieldWrapper>
  );
}

export function SelectField({ id, label, error, hint, required, options, placeholder, ...props }) {
  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint} required={required}>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        className={`${baseInputClasses} ${borderClass(error)} bg-white`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value ?? option} value={option.value ?? option}>
            {option.label ?? option}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export function CheckboxField({ id, label, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-2.5 text-sm text-ink-900">
        <input
          id={id}
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-ink-100 text-brand-500 focus-visible:outline-3"
          aria-invalid={Boolean(error)}
          {...props}
        />
        <span>{label}</span>
      </label>
      {error && (
        <p role="alert" className="mt-1 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
