import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { TreatmentPlan } from "./TreatmentPlan";

const formSchema = z.object({
  medicalCondition: z.string().min(2, "Please enter your medical condition"),
  currentMedications: z.string().min(1, "Please enter your current medications"),
  treatmentGoals: z.string().min(10, "Please describe your treatment goals"),
  exercisePreference: z.string().min(1, "Please select your exercise preference"),
  dietaryRestrictions: z.string().min(1, "Please enter your dietary restrictions"),
  mentalHealthSupport: z.string().min(1, "Please select your mental health support preference"),
});

type FormData = z.infer<typeof formSchema>;

export const TreatmentPlanForm = () => {
  const [showPlan, setShowPlan] = useState(false);
  const [planData, setPlanData] = useState<FormData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      medicalCondition: "",
      currentMedications: "None",
      treatmentGoals: "",
      exercisePreference: "",
      dietaryRestrictions: "None",
      mentalHealthSupport: "",
    },
  });

  const onSubmit = (values: FormData) => {
    setPlanData(values);
    setShowPlan(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {!showPlan ? (
        <>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Create Your Treatment Plan</h2>
            <p className="text-gray-400">
              Please provide your medical details and preferences to generate a personalized treatment plan.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="medicalCondition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Medical Condition</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your medical condition" className="bg-gray-800 border-gray-700 text-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentMedications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Current Medications</FormLabel>
                    <FormControl>
                      <Input placeholder="List your current medications" className="bg-gray-800 border-gray-700 text-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="treatmentGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Treatment Goals</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your treatment goals"
                        className="min-h-[100px] bg-gray-800 border-gray-700 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="exercisePreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Exercise Preference</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select exercise preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="low">Low Impact</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="high">High Intensity</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dietaryRestrictions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Dietary Restrictions</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter any dietary restrictions" className="bg-gray-800 border-gray-700 text-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mentalHealthSupport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Mental Health Support Preferences</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select support type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="meditation">Meditation</SelectItem>
                        <SelectItem value="counseling">Counseling</SelectItem>
                        <SelectItem value="stress-management">Stress Management</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
                Generate Treatment Plan
              </Button>
            </form>
          </Form>
        </>
      ) : (
        <TreatmentPlan data={planData} onBack={() => setShowPlan(false)} />
      )}
    </div>
  );
};