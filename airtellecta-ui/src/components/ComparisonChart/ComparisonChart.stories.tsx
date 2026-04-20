import type { Meta, StoryObj } from "@storybook/react";
import { ComparisonChart } from "./ComparisonChart";

const meta: Meta<typeof ComparisonChart> = {
  title: "Components/ComparisonChart",
  component: ComparisonChart,
};

export default meta;
type Story = StoryObj<typeof ComparisonChart>;

export const Horizontal: Story = {
  args: {
    title: "Comparación Antes vs. Después",
    subtitle: "Indicadores clave pre y post intervención",
    layout: "horizontal",
    height: 320,
  },
};

export const Vertical: Story = {
  args: {
    title: "Comparación Antes vs. Después",
    subtitle: "Vista alternativa por categoría",
    layout: "vertical",
    height: 320,
  },
};

export const CustomData: Story = {
  args: {
    title: "Indicadores de Salud Pública",
    subtitle: "Campaña de prevención tabaco 2025",
    layout: "horizontal",
    height: 300,
    data: [
      { indicator: "Consumo Tabaco", antes: 25.3, despues: 18.7 },
      { indicator: "Conciencia Riesgo", antes: 38.0, despues: 60.5 },
      { indicator: "Visitas Médicas", antes: 12.1, despues: 22.4 },
    ],
  },
};
