import { LucideIcon } from "lucide-react";
import { AnimatedCard } from "./animations";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, features, delay = 0 }: ServiceCardProps) {
  return (
    <AnimatedCard delay={delay}>
      <div className="service-card h-full flex flex-col">
        <div className="icon-container-lg mb-6">
          <Icon size={32} />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 flex-1">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="space-y-2 mt-auto pt-4 border-t border-border">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimatedCard>
  );
}
