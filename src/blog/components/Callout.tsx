import { AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "error";
  title?: string;
}

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertCircle,
};

const variantMap = {
  info: "default",
  warning: "default",
  success: "default",
  error: "destructive",
} as const;

export const Callout: React.FC<CalloutProps> = ({
  children,
  type = "info",
  title,
}) => {
  const Icon = iconMap[type];

  return (
    <Alert variant={variantMap[type]} className="my-6">
      <Icon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="mt-2">{children}</AlertDescription>
    </Alert>
  );
};
