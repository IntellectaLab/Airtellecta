import type { Meta, StoryObj } from "@storybook/react";
import { LoginCard } from "./LoginCard";

const meta: Meta<typeof LoginCard> = {
  title: "Components/LoginCard",
  component: LoginCard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginCard>;

export const Default: Story = {
  args: {
    error: "",
    loading: false,
  },
};

export const WithError: Story = {
  args: {
    error: "Credenciales incorrectas. Por favor intenta de nuevo.",
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    error: "",
    loading: true,
  },
};
