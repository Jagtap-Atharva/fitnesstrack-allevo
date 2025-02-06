import { Activity, Heart, Moon, Sun, Search, LogOut, Grid, User, Settings } from "lucide-react";
import { HealthMetricCard } from "@/components/HealthMetricCard";
import { WellnessTip } from "@/components/WellnessTip";
import { ProgressChart } from "@/components/ProgressChart";
import { TreatmentPlanForm } from "@/components/TreatmentPlanForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 min-h-screen bg-[#1E2433] flex flex-col items-center py-6 space-y-8">
          <div className="p-2 rounded-lg bg-[#2A2F3F]">
            <Heart className="w-6 h-6 text-emerald-500" />
          </div>
          <nav className="flex flex-col space-y-6">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Grid className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <User className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Settings className="w-6 h-6" />
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div className="relative w-96">
              <Input
                type="text"
                placeholder="Search for records"
                className="pl-10 bg-[#2A2F3F] border-none text-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <LogOut className="w-4 h-4 mr-2" />
              Log Out
            </Button>
          </header>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <HealthMetricCard
              title="Specialist Appointments"
              value="1"
              icon={<Activity className="text-emerald-500" />}
              description="Pending"
            />
            <HealthMetricCard
              title="Treatment Progress"
              value="1 of 4"
              icon={<Heart className="text-emerald-500" />}
              description="Steps completed"
            />
            <HealthMetricCard
              title="Total Screenings"
              value="4"
              icon={<Moon className="text-emerald-500" />}
              description="This month"
            />
            <HealthMetricCard
              title="Pending Screenings"
              value="1"
              icon={<Sun className="text-emerald-500" />}
              description="To be scheduled"
            />
          </div>

          {/* Treatment Plan Form */}
          <TreatmentPlanForm />
        </main>
      </div>
    </div>
  );
};

export default Index;