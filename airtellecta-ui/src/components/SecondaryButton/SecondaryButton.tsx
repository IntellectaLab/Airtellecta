type SecondaryButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function SecondaryButton({
  label,
  disabled = false,
  onClick,
}: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: "transparent",
        color: disabled ? "#94a3b8" : "#2563eb",
        border: `1.5px solid ${disabled ? "#cbd5e1" : "#2563eb"}`,
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
