import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface WellnessTipProps {
  tip: string;
  category: string;
}

export const WellnessTip = ({ tip, category }: WellnessTipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-4 bg-accent/50 backdrop-blur-sm">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full mb-2">
          {category}
        </span>
        <p className="text-sm text-primary">{tip}</p>
      </Card>
    </motion.div>
  );
};