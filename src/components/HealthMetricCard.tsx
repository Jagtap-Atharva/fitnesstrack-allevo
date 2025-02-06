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
      <Card className="p-6 bg-[#2A2F3F] border-none hover:bg-[#323846] transition-colors duration-300">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-400">{title}</h3>
            <p className="text-2xl font-semibold text-white">{value}</p>
            {description && (
              <p className="text-sm text-gray-400">{description}</p>
            )}
          </div>
          <div className="text-emerald-500">{icon}</div>
        </div>
      </Card>
    </motion.div>
  );
};