import { useState } from "react";

type LoginCardProps = {
  onSubmit?: (email: string, password: string) => void;
  error?: string;
  loading?: boolean;
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "24px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "32px",
    gap: "12px",
  },
  iconWrapper: {
    width: "72px",
    height: "72px",
    borderRadius: "18px",
    backgroundColor: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "26px",
    fontWeight: 800,
    color: "#1e293b",
    margin: 0,
    letterSpacing: "0.05em",
  },
  subtitle: {
    fontSize: "14px",
    color: "#2563eb",
    margin: 0,
    fontWeight: 600,
    textAlign: "center",
  },
  tagline: {
    fontSize: "12px",
    color: "#2563eb",
    margin: 0,
    fontWeight: 500,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px 28px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#1e293b",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    padding: "0 14px",
    backgroundColor: "#ffffff",
    gap: "10px",
  },
  inputWrapperError: {
    borderColor: "#dc2626",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    color: "#1e293b",
    padding: "12px 0",
    backgroundColor: "transparent",
  },
  iconText: {
    fontSize: "16px",
    color: "#94a3b8",
    userSelect: "none",
  },
  toggleBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: 600,
    padding: "0",
  },
  errorText: {
    fontSize: "12px",
    color: "#dc2626",
    fontWeight: 500,
  },
  submitBtn: {
    width: "100%",
    padding: "13px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    marginTop: "4px",
  },
  submitBtnDisabled: {
    backgroundColor: "#94a3b8",
    cursor: "not-allowed",
  },
  footer: {
    textAlign: "center" as const,
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "8px",
  },
  pageFooter: {
    marginTop: "32px",
    fontSize: "12px",
    color: "#2563eb",
    textAlign: "center" as const,
  },
};

export function LoginCard({ onSubmit, error = "", loading = false }: LoginCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email, password);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.iconWrapper}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="10" width="28" height="4" rx="2" fill="white" />
            <rect x="4" y="17" width="28" height="4" rx="2" fill="white" opacity="0.8" />
            <rect x="4" y="24" width="20" height="4" rx="2" fill="white" opacity="0.6" />
          </svg>
        </div>
        <h1 style={styles.title}>INTELLECTA</h1>
        <p style={styles.subtitle}>Plataforma de Inteligencia Epidemiológica</p>
        <p style={styles.tagline}>Sistema de Análisis de Salud Pública</p>
      </div>

      <form style={styles.card} onSubmit={handleSubmit}>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Correo Electrónico</label>
          <div style={{ ...styles.inputWrapper, ...(error ? styles.inputWrapperError : {}) }}>
            <span style={styles.iconText}>✉</span>
            <input
              style={styles.input}
              type="email"
              placeholder="usuario@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Contraseña</label>
          <div style={{ ...styles.inputWrapper, ...(error ? styles.inputWrapperError : {}) }}>
            <span style={styles.iconText}>🔒</span>
            <input
              style={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              style={styles.toggleBtn}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {error && <span style={styles.errorText}>{error}</span>}
        </div>

        <button
          type="submit"
          style={{ ...styles.submitBtn, ...(loading ? styles.submitBtnDisabled : {}) }}
          disabled={loading}
        >
          {loading ? "Accediendo..." : "Acceder al Sistema"}
        </button>

        <p style={styles.footer}>Sistema seguro · Acceso autorizado únicamente</p>
      </form>

      <p style={styles.pageFooter}>© 2026 INTELLECTA · Todos los derechos reservados</p>
    </div>
  );
}
