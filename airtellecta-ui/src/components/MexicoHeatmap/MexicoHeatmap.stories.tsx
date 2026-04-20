import type { Meta, StoryObj } from "@storybook/react";
import { MexicoHeatmap } from "./MexicoHeatmap";

const meta: Meta<typeof MexicoHeatmap> = {
  title: "Components/Charts/MexicoHeatmap",
  component: MexicoHeatmap,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof MexicoHeatmap>;

export const Prevalencia: Story = {
  args: {
    title: "Mapa de Calor — Prevalencia de Vapeo",
    subtitle: "Porcentaje de población consumidora por estado, 2025",
    unit: "%",
    colorScale: ["#dbeafe", "#1e3a8a"],
  },
};

export const RiesgoCrítico: Story = {
  args: {
    title: "Nivel de Riesgo Epidemiológico",
    subtitle: "Índice compuesto de riesgo por entidad federativa",
    unit: " pts",
    colorScale: ["#fef9c3", "#dc2626"],
    data: [
      { id: "AGU", name: "Aguascalientes", value: 45 },
      { id: "BCN", name: "Baja California", value: 82 },
      { id: "BCS", name: "Baja California Sur", value: 38 },
      { id: "CAM", name: "Campeche", value: 29 },
      { id: "CHP", name: "Chiapas", value: 21 },
      { id: "CHH", name: "Chihuahua", value: 75 },
      { id: "COA", name: "Coahuila", value: 68 },
      { id: "COL", name: "Colima", value: 52 },
      { id: "DUR", name: "Durango", value: 44 },
      { id: "GRO", name: "Guerrero", value: 33 },
      { id: "GUA", name: "Guanajuato", value: 55 },
      { id: "HID", name: "Hidalgo", value: 40 },
      { id: "JAL", name: "Jalisco", value: 71 },
      { id: "MEX", name: "Estado de México", value: 88 },
      { id: "MIC", name: "Michoacán", value: 42 },
      { id: "MOR", name: "Morelos", value: 50 },
      { id: "NAY", name: "Nayarit", value: 47 },
      { id: "NLE", name: "Nuevo León", value: 79 },
      { id: "OAX", name: "Oaxaca", value: 18 },
      { id: "PUE", name: "Puebla", value: 48 },
      { id: "QUE", name: "Querétaro", value: 58 },
      { id: "ROO", name: "Quintana Roo", value: 63 },
      { id: "SLP", name: "San Luis Potosí", value: 41 },
      { id: "SIN", name: "Sinaloa", value: 56 },
      { id: "SON", name: "Sonora", value: 70 },
      { id: "TAB", name: "Tabasco", value: 31 },
      { id: "TAM", name: "Tamaulipas", value: 74 },
      { id: "TLA", name: "Tlaxcala", value: 36 },
      { id: "VER", name: "Veracruz", value: 39 },
      { id: "YUC", name: "Yucatán", value: 34 },
      { id: "ZAC", name: "Zacatecas", value: 43 },
      { id: "CDMX", name: "Ciudad de México", value: 95 },
    ],
  },
};

export const CoberturaCampaña: Story = {
  args: {
    title: "Cobertura de Campaña Preventiva",
    subtitle: "Porcentaje de municipios alcanzados por estado",
    unit: "%",
    colorScale: ["#f0fdf4", "#15803d"],
    data: [
      { id: "AGU", name: "Aguascalientes", value: 88 },
      { id: "BCN", name: "Baja California", value: 72 },
      { id: "BCS", name: "Baja California Sur", value: 65 },
      { id: "CAM", name: "Campeche", value: 58 },
      { id: "CHP", name: "Chiapas", value: 42 },
      { id: "CHH", name: "Chihuahua", value: 76 },
      { id: "COA", name: "Coahuila", value: 83 },
      { id: "COL", name: "Colima", value: 91 },
      { id: "DUR", name: "Durango", value: 69 },
      { id: "GRO", name: "Guerrero", value: 38 },
      { id: "GUA", name: "Guanajuato", value: 80 },
      { id: "HID", name: "Hidalgo", value: 74 },
      { id: "JAL", name: "Jalisco", value: 85 },
      { id: "MEX", name: "Estado de México", value: 90 },
      { id: "MIC", name: "Michoacán", value: 62 },
      { id: "MOR", name: "Morelos", value: 78 },
      { id: "NAY", name: "Nayarit", value: 70 },
      { id: "NLE", name: "Nuevo León", value: 92 },
      { id: "OAX", name: "Oaxaca", value: 35 },
      { id: "PUE", name: "Puebla", value: 77 },
      { id: "QUE", name: "Querétaro", value: 86 },
      { id: "ROO", name: "Quintana Roo", value: 73 },
      { id: "SLP", name: "San Luis Potosí", value: 68 },
      { id: "SIN", name: "Sinaloa", value: 75 },
      { id: "SON", name: "Sonora", value: 79 },
      { id: "TAB", name: "Tabasco", value: 55 },
      { id: "TAM", name: "Tamaulipas", value: 81 },
      { id: "TLA", name: "Tlaxcala", value: 84 },
      { id: "VER", name: "Veracruz", value: 60 },
      { id: "YUC", name: "Yucatán", value: 67 },
      { id: "ZAC", name: "Zacatecas", value: 72 },
      { id: "CDMX", name: "Ciudad de México", value: 95 },
    ],
  },
};
