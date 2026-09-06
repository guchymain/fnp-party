import {
  Building2,
  Circle,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wheat,
} from "lucide-react";

const iconMap = {
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  HeartPulse,
  Sparkles,
  Users,
  Wheat,
  Building2,
};

export default function DynamicIcon({ name, ...props }) {
  const Icon = iconMap[name] ?? Circle;
  return <Icon {...props} />;
}
