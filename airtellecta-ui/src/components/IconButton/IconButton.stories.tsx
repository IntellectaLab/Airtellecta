import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: { icon: "📊", label: "Ver reporte", variant: "primary" },
};

export const Ghost: Story = {
  args: { icon: "🔍", label: "Buscar", variant: "ghost" },
};

export const Outline: Story = {
  args: { icon: "⬇️", label: "Exportar", variant: "outline" },
};

export const IconOnly: Story = {
  args: { icon: "✕", variant: "ghost" },
};
