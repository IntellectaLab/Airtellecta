type IconButtonVariant = "primary" | "ghost" | "outline";

type IconButtonProps = {
  icon: string;
  label?: string;
  variant?: IconButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
};

const variantStyles: Record<IconButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#475569",
    border: "none",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#2563eb",
    border: "1.5px solid #2563eb",
  },
};

export function IconButton({
  icon,
  label,
  variant = "ghost",
  disabled = false,
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variantStyles[variant],
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        borderRadius: "8px",
        padding: label ? "10px 14px" : "10px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <span style={{ fontSize: "18px", lineHeight: 1 }}>{icon}</span>
      {label && <span>{label}</span>}
    </button>
  );
}
