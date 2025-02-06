import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface HealthMetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
}

export const HealthMetricCard = ({ title, value, icon, description }: HealthMetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
            <p className="text-2xl font-semibold">{value}</p>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <div className="text-primary/80">{icon}</div>
        </div>
      </Card>
    </motion.div>
  );
};