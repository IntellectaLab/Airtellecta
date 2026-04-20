import type { Meta, StoryObj } from "@storybook/react";
import { DonutChart } from "./DonutChart";

const meta: Meta<typeof DonutChart> = {
  title: "Components/Charts/DonutChart",
  component: DonutChart,
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
  args: {
    title: "Distribución por Categoría",
    subtitle: "Porcentaje de población por grupo de consumo",
  },
};

export const CampañaPrevención: Story = {
  args: {
    title: "Resultado de Campaña",
    subtitle: "Alcance por segmento de la población",
    data: [
      { name: "Impactados", value: 54, color: "#16a34a" },
      { name: "Parcialmente alcanzados", value: 28, color: "#2563eb" },
      { name: "No alcanzados", value: 18, color: "#94a3b8" },
    ],
  },
};

export const RiesgoEpidémico: Story = {
  args: {
    title: "Nivel de Riesgo por Zona",
    subtitle: "Clasificación de municipios monitoreados",
    data: [
      { name: "Crítico", value: 12, color: "#dc2626" },
      { name: "Alto", value: 25, color: "#f97316" },
      { name: "Moderado", value: 38, color: "#eab308" },
      { name: "Bajo", value: 25, color: "#16a34a" },
    ],
  },
};
