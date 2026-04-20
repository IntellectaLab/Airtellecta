import type { Meta, StoryObj } from "@storybook/react";
import { DangerButton } from "./DangerButton";

const meta: Meta<typeof DangerButton> = {
  title: "Components/Buttons/DangerButton",
  component: DangerButton,
};

export default meta;
type Story = StoryObj<typeof DangerButton>;

export const Solid: Story = {
  args: { label: "Eliminar registro", variant: "solid" },
};

export const Outline: Story = {
  args: { label: "Eliminar registro", variant: "outline" },
};

export const Disabled: Story = {
  args: { label: "Eliminar registro", variant: "solid", disabled: true },
};
