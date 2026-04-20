import type { Meta, StoryObj } from "@storybook/react";
import { TrendLineChart } from "./TrendLineChart";

const meta: Meta<typeof TrendLineChart> = {
  title: "Components/Charts/TrendLineChart",
  component: TrendLineChart,
};

export default meta;
type Story = StoryObj<typeof TrendLineChart>;

export const Default: Story = {
  args: {
    title: "Tendencia de Prevalencia",
    subtitle: "Evolución mensual de indicadores clave",
  },
};

export const SingleSeries: Story = {
  args: {
    title: "Índice de Riesgo",
    subtitle: "Seguimiento semanal",
    series: [{ key: "riesgo", label: "Índice de riesgo", color: "#dc2626" }],
    data: [
      { periodo: "S1", riesgo: 72 },
      { periodo: "S2", riesgo: 68 },
      { periodo: "S3", riesgo: 65 },
      { periodo: "S4", riesgo: 60 },
      { periodo: "S5", riesgo: 54 },
      { periodo: "S6", riesgo: 49 },
    ],
    unit: " pts",
  },
};

export const MultiSeries: Story = {
  args: {
    title: "Comparativa por Género",
    subtitle: "Prevalencia mensual hombres vs mujeres",
    series: [
      { key: "hombres", label: "Hombres", color: "#2563eb" },
      { key: "mujeres", label: "Mujeres", color: "#db2777" },
    ],
    data: [
      { periodo: "Ene", hombres: 23.1, mujeres: 14.2 },
      { periodo: "Feb", hombres: 22.4, mujeres: 13.8 },
      { periodo: "Mar", hombres: 21.0, mujeres: 13.1 },
      { periodo: "Abr", hombres: 19.8, mujeres: 12.7 },
      { periodo: "May", hombres: 18.5, mujeres: 12.0 },
      { periodo: "Jun", hombres: 17.2, mujeres: 11.4 },
    ],
  },
};
