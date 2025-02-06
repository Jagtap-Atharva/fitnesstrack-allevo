import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Dumbbell, Heart, Pill, Salad, Brain } from "lucide-react";

interface TreatmentPlanProps {
  data: {
    medicalCondition: string;
    currentMedications: string;
    treatmentGoals: string;
    exercisePreference: string;
    dietaryRestrictions: string;
    mentalHealthSupport: string;
  } | null;
  onBack: () => void;
}

export const TreatmentPlan = ({ data, onBack }: TreatmentPlanProps) => {
  if (!data) return null;

  const sections = [
    {
      title: "Medication Schedule",
      icon: <Pill className="h-5 w-5" />,
      content: `Based on your current medications, maintain a regular schedule. Always consult your healthcare provider before making any changes.`,
    },
    {
      title: "Exercise Routine",
      icon: <Dumbbell className="h-5 w-5" />,
      content: `${
        data.exercisePreference === "low"
          ? "Low-impact exercises like walking, swimming, or gentle yoga are recommended."
          : data.exercisePreference === "moderate"
          ? "Moderate activities like brisk walking, cycling, or strength training are suggested."
          : "High-intensity workouts including interval training and advanced strength exercises are recommended."
      }`,
    },
    {
      title: "Dietary Guidelines",
      icon: <Salad className="h-5 w-5" />,
      content: `Personalized diet plan considering your restrictions: ${data.dietaryRestrictions}. Focus on balanced nutrition and regular meals.`,
    },
    {
      title: "Mental Health Support",
      icon: <Brain className="h-5 w-5" />,
      content: `Regular ${data.mentalHealthSupport} sessions are recommended to support your overall well-being.`,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Personalized Treatment Plan</h2>
        <Button variant="outline" onClick={onBack}>
          Edit Plan
        </Button>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="text-primary h-5 w-5" />
          <h3 className="font-semibold">Treatment Goals</h3>
        </div>
        <p className="text-muted-foreground">{data.treatmentGoals}</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Card key={section.title} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              {section.icon}
              <h3 className="font-semibold">{section.title}</h3>
            </div>
            <p className="text-muted-foreground">{section.content}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-primary h-5 w-5" />
          <h3 className="font-semibold">Next Review</h3>
        </div>
        <p className="text-muted-foreground">
          Your treatment plan will be reviewed in 30 days to assess progress and make necessary adjustments.
        </p>
      </Card>
    </div>
  );
};