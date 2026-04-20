import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataPoint = {
  periodo: string;
  [key: string]: string | number;
};

type AreaSeries = {
  key: string;
  label: string;
  color: string;
};

type AreaChartProps = {
  data?: DataPoint[];
  series?: AreaSeries[];
  title?: string;
  subtitle?: string;
  height?: number;
  unit?: string;
  stacked?: boolean;
};

const DEFAULT_DATA: DataPoint[] = [
  { periodo: "Q1 2024", jovenes: 22.3, adultos: 14.1 },
  { periodo: "Q2 2024", jovenes: 21.0, adultos: 13.8 },
  { periodo: "Q3 2024", jovenes: 19.5, adultos: 13.2 },
  { periodo: "Q4 2024", jovenes: 18.2, adultos: 12.7 },
  { periodo: "Q1 2025", jovenes: 16.9, adultos: 12.1 },
  { periodo: "Q2 2025", jovenes: 15.8, adultos: 11.6 },
];

const DEFAULT_SERIES: AreaSeries[] = [
  { key: "jovenes", label: "Jóvenes (15-24)", color: "#2563eb" },
  { key: "adultos", label: "Adultos (25-44)", color: "#16a34a" },
];

export function AreaChart({
  data = DEFAULT_DATA,
  series = DEFAULT_SERIES,
  title = "Evolución por Grupo Etario",
  subtitle = "Prevalencia acumulada por trimestre",
  height = 300,
  unit = "%",
  stacked = false,
}: AreaChartProps) {
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
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            {series.map((s) => (
              <linearGradient key={s.key} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={s.color} stopOpacity={0.25} />
                <stop offset="95%" stopColor={s.color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="periodo" tick={{ fontSize: 12, fill: "#475569" }} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} unit={unit} />
          <Tooltip
            formatter={(value: number, name: string) => [`${value}${unit}`, name]}
            contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "13px" }}
          />
          <Legend wrapperStyle={{ fontSize: "13px", paddingTop: "12px" }} />
          {series.map((s) => (
            <Area
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={s.color}
              strokeWidth={2.5}
              fill={`url(#grad-${s.key})`}
              stackId={stacked ? "stack" : undefined}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
