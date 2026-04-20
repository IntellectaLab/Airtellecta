import type { Meta, StoryObj } from "@storybook/react";
import { AreaChart } from "./AreaChart";

const meta: Meta<typeof AreaChart> = {
  title: "Components/Charts/AreaChart",
  component: AreaChart,
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  args: {
    title: "Evolución por Grupo Etario",
    subtitle: "Prevalencia acumulada por trimestre",
    stacked: false,
  },
};

export const Stacked: Story = {
  args: {
    title: "Carga Total Acumulada",
    subtitle: "Suma de indicadores por grupo etario",
    stacked: true,
  },
};

export const CasosNuevos: Story = {
  args: {
    title: "Nuevos Casos por Mes",
    subtitle: "Incidencia mensual 2025",
    unit: " casos",
    series: [
      { key: "norte", label: "Región Norte", color: "#2563eb" },
      { key: "sur", label: "Región Sur", color: "#16a34a" },
      { key: "centro", label: "Región Centro", color: "#f97316" },
    ],
    data: [
      { periodo: "Ene", norte: 340, sur: 210, centro: 480 },
      { periodo: "Feb", norte: 310, sur: 198, centro: 455 },
      { periodo: "Mar", norte: 290, sur: 185, centro: 420 },
      { periodo: "Abr", norte: 265, sur: 170, centro: 395 },
      { periodo: "May", norte: 240, sur: 158, centro: 370 },
      { periodo: "Jun", norte: 218, sur: 145, centro: 342 },
    ],
  },
};
