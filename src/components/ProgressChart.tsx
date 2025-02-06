import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

interface ProgressChartProps {
  data: Array<{ date: string; value: number }>;
  title: string;
}

export const ProgressChart = ({ data, title }: ProgressChartProps) => {
  return (
    <Card className="p-6 h-[300px]">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2D3648"
            strokeWidth={2}
            dot={{ fill: "#2D3648" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};