export function isRequired(value) {
  return value !== undefined && value !== null && String(value).trim().length > 0;
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "");
}

export function isNigerianPhone(value) {
  return /^(\+234|0)[789][01]\d{8}$/.test((value || "").replace(/\s/g, ""));
}

export function isMinLength(value, min) {
  return (value || "").trim().length >= min;
}

export function isNIN(value) {
  return /^\d{11}$/.test((value || "").trim());
}

export function runValidation(fields, rules) {
  const errors = {};
  for (const key of Object.keys(rules)) {
    for (const rule of rules[key]) {
      const [check, message, ...args] = rule;
      if (!check(fields[key], ...args)) {
        errors[key] = message;
        break;
      }
    }
  }
  return errors;
}
