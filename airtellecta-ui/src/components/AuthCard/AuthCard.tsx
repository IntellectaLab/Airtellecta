import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "420px",
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "28px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h2
          style={{
            margin: 0,
            color: "#1e293b",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          {title}
        </h2>

        {subtitle ? (
          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "14px",
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>

      {children ? <div>{children}</div> : null}
    </div>
  );
}