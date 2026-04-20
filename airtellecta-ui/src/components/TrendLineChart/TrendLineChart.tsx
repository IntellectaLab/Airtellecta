import {
  LineChart,
  Line,
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

type Series = {
  key: string;
  label: string;
  color: string;
};

type TrendLineChartProps = {
  data?: DataPoint[];
  series?: Series[];
  title?: string;
  subtitle?: string;
  height?: number;
  unit?: string;
};

const DEFAULT_DATA: DataPoint[] = [
  { periodo: "Ene", prevalencia: 19.4, meta: 17.0 },
  { periodo: "Feb", prevalencia: 18.7, meta: 16.5 },
  { periodo: "Mar", prevalencia: 17.9, meta: 16.0 },
  { periodo: "Abr", prevalencia: 17.1, meta: 15.5 },
  { periodo: "May", prevalencia: 16.5, meta: 15.0 },
  { periodo: "Jun", prevalencia: 15.8, meta: 14.5 },
];

const DEFAULT_SERIES: Series[] = [
  { key: "prevalencia", label: "Prevalencia real", color: "#2563eb" },
  { key: "meta", label: "Meta institucional", color: "#16a34a" },
];

export function TrendLineChart({
  data = DEFAULT_DATA,
  series = DEFAULT_SERIES,
  title = "Tendencia de Indicadores",
  subtitle = "Evolución mensual de indicadores clave",
  height = 300,
  unit = "%",
}: TrendLineChartProps) {
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
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="periodo" tick={{ fontSize: 12, fill: "#475569" }} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} unit={unit} />
          <Tooltip
            formatter={(value: number, name: string) => [`${value}${unit}`, name]}
            contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "13px" }}
          />
          <Legend wrapperStyle={{ fontSize: "13px", paddingTop: "12px" }} />
          {series.map((s) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={s.color}
              strokeWidth={2.5}
              dot={{ r: 4, fill: s.color }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
