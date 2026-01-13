import { CheckCircle2, AlertTriangle, XCircle, Leaf, Pill, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ClassificationResult {
  disease: string;
  confidence: number;
  isHealthy: boolean;
  description: string;
  treatment: string;
  prevention: string;
}

interface ResultCardProps {
  result: ClassificationResult;
}

const ResultCard = ({ result }: ResultCardProps) => {
  const getStatusConfig = () => {
    if (result.isHealthy) {
      return {
        icon: CheckCircle2,
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/30",
        label: "Healthy",
      };
    }
    if (result.confidence > 0.7) {
      return {
        icon: XCircle,
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        borderColor: "border-destructive/30",
        label: "Disease Detected",
      };
    }
    return {
      icon: AlertTriangle,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      label: "Possible Disease",
    };
  };

  const status = getStatusConfig();
  const StatusIcon = status.icon;

  return (
    <div className={cn(
      "w-full max-w-xl mx-auto rounded-2xl border-2 overflow-hidden shadow-elevated animate-slide-up",
      status.borderColor
    )}>
      {/* Header */}
      <div className={cn("p-6", status.bgColor)}>
        <div className="flex items-center gap-4">
          <div className={cn("w-14 h-14 rounded-full flex items-center justify-center bg-background shadow-soft")}>
            <StatusIcon className={cn("w-8 h-8", status.color)} />
          </div>
          <div className="flex-1">
            <p className={cn("text-sm font-medium", status.color)}>{status.label}</p>
            <h3 className="text-2xl font-bold text-foreground font-serif">{result.disease}</h3>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-1">Confidence</p>
            <p className={cn("text-2xl font-bold", status.color)}>
              {Math.round(result.confidence * 100)}%
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6 bg-card">
        {/* Description */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Description</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
          </div>
        </div>

        {/* Treatment */}
        {!result.isHealthy && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
              <Pill className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Treatment</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.treatment}</p>
            </div>
          </div>
        )}

        {/* Prevention */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Prevention</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{result.prevention}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
