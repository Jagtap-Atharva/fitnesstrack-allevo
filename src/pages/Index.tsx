import { Activity, Heart, Moon, Sun } from "lucide-react";
import { HealthMetricCard } from "@/components/HealthMetricCard";
import { WellnessTip } from "@/components/WellnessTip";
import { ProgressChart } from "@/components/ProgressChart";
import { TreatmentPlanForm } from "@/components/TreatmentPlanForm";

const mockProgressData = [
  { date: "Mon", value: 65 },
  { date: "Tue", value: 72 },
  { date: "Wed", value: 68 },
  { date: "Thu", value: 75 },
  { date: "Fri", value: 80 },
  { date: "Sat", value: 82 },
  { date: "Sun", value: 85 },
];

const wellnessTips = [
  {
    category: "Sleep",
    tip: "Try to maintain a consistent sleep schedule, even on weekends.",
  },
  {
    category: "Exercise",
    tip: "Start your day with a 10-minute stretching routine to boost energy levels.",
  },
  {
    category: "Nutrition",
    tip: "Include a variety of colorful vegetables in your meals for optimal nutrition.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/30 to-secondary/30">
      <div className="container py-8 space-y-8 animate-fade-in">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Health & Wellness Companion</h1>
          <p className="text-muted-foreground">Your personal guide to better health</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HealthMetricCard
            title="Daily Activity"
            value="7,234 steps"
            icon={<Activity size={24} />}
            description="Goal: 10,000 steps"
          />
          <HealthMetricCard
            title="Heart Rate"
            value="72 bpm"
            icon={<Heart size={24} />}
            description="Resting rate"
          />
          <HealthMetricCard
            title="Sleep Quality"
            value="8h 12m"
            icon={<Moon size={24} />}
            description="Deep sleep: 2h 30m"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProgressChart
              data={mockProgressData}
              title="Weekly Wellness Score"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Daily Wellness Tips</h3>
            {wellnessTips.map((tip, index) => (
              <WellnessTip key={index} {...tip} />
            ))}
          </div>
        </div>

        <TreatmentPlanForm />
      </div>
    </div>
  );
};

export default Index;