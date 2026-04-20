import type { Meta, StoryObj } from "@storybook/react";
import { AuthCard } from "./AuthCard";

const meta: Meta<typeof AuthCard> = {
  title: "Components/AuthCard",
  component: AuthCard,
};

export default meta;
type Story = StoryObj<typeof AuthCard>;

export const Default: Story = {
  args: {
    title: "Bienvenida de nuevo",
    children: (
      <div style={{ color: "#64748b", fontSize: "14px" }}>
        Ingresa tus datos para continuar.
      </div>
    ),
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Crear cuenta",
    subtitle: "Regístrate para continuar en Airtellecta.",
    children: (
      <div style={{ color: "#64748b", fontSize: "14px" }}>
        Completa el formulario para crear tu cuenta.
      </div>
    ),
  },
};