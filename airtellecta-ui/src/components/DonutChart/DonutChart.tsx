import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

type DonutSlice = {
  name: string;
  value: number;
  color: string;
};

type DonutChartProps = {
  data?: DonutSlice[];
  title?: string;
  subtitle?: string;
  innerRadius?: number;
  outerRadius?: number;
  height?: number;
};

const DEFAULT_DATA: DonutSlice[] = [
  { name: "Vapeo activo", value: 38, color: "#2563eb" },
  { name: "Ex-consumidor", value: 27, color: "#16a34a" },
  { name: "Nunca consumió", value: 25, color: "#64748b" },
  { name: "Consumo dual", value: 10, color: "#dc2626" },
];

export function DonutChart({
  data = DEFAULT_DATA,
  title = "Distribución por Categoría",
  subtitle = "Porcentaje de población por grupo",
  innerRadius = 70,
  outerRadius = 110,
  height = 300,
}: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <div style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b" }}>{title}</div>
        <div style={{ fontSize: "12px", color: "#64748b", marginTop: "3px" }}>{subtitle}</div>
      </div>
      <div style={{ position: "relative" }}>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}%`, ""]}
              contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "13px" }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{ fontSize: "13px" }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: 800, color: "#1e293b" }}>{total}%</div>
          <div style={{ fontSize: "11px", color: "#64748b" }}>Total</div>
        </div>
      </div>
    </div>
  );
}
