import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "./SecondaryButton";

const meta: Meta<typeof SecondaryButton> = {
  title: "Components/Buttons/SecondaryButton",
  component: SecondaryButton,
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: { label: "Cancelar", disabled: false },
};

export const Disabled: Story = {
  args: { label: "Cancelar", disabled: true },
};
