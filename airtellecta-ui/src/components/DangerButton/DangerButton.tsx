type DangerButtonProps = {
  label: string;
  variant?: "solid" | "outline";
  disabled?: boolean;
  onClick?: () => void;
};

export function DangerButton({
  label,
  variant = "solid",
  disabled = false,
  onClick,
}: DangerButtonProps) {
  const isSolid = variant === "solid";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#fca5a5" : isSolid ? "#dc2626" : "transparent",
        color: isSolid ? "#ffffff" : disabled ? "#fca5a5" : "#dc2626",
        border: isSolid ? "none" : `1.5px solid ${disabled ? "#fca5a5" : "#dc2626"}`,
        borderRadius: "8px",
        padding: "12px 16px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        width: "100%",
      }}
    >
      {label}
    </button>
  );
}
