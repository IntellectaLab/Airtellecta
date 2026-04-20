import { useState } from "react";

export type StateData = {
  id: string;
  name: string;
  value: number;
};

type MexicoHeatmapProps = {
  data?: StateData[];
  title?: string;
  subtitle?: string;
  unit?: string;
  colorScale?: [string, string];
  minValue?: number;
  maxValue?: number;
};

// Simplified SVG paths for Mexico's 32 states
// Each path approximates the state boundary at a normalized viewBox
const STATE_PATHS: Record<string, { path: string; labelX: number; labelY: number }> = {
  AGU: { path: "M 310 275 L 325 268 L 332 278 L 328 292 L 315 295 L 308 285 Z", labelX: 320, labelY: 282 },
  BCN: { path: "M 55 105 L 80 90 L 95 115 L 105 155 L 90 175 L 68 168 L 55 145 L 50 120 Z", labelX: 77, labelY: 138 },
  BCS: { path: "M 85 180 L 100 178 L 112 200 L 118 240 L 110 275 L 95 290 L 78 278 L 72 252 L 78 220 Z", labelX: 95, labelY: 232 },
  CAM: { path: "M 500 300 L 520 295 L 530 315 L 525 335 L 505 340 L 495 320 Z", labelX: 513, labelY: 318 },
  CHP: { path: "M 420 340 L 455 330 L 468 348 L 462 368 L 435 375 L 415 360 Z", labelX: 442, labelY: 353 },
  CHH: { path: "M 175 130 L 240 115 L 255 135 L 258 175 L 248 210 L 215 220 L 188 210 L 170 185 L 165 155 Z", labelX: 213, labelY: 167 },
  COA: { path: "M 258 180 L 310 168 L 322 185 L 318 215 L 298 228 L 265 225 L 252 205 Z", labelX: 287, labelY: 198 },
  COL: { path: "M 278 308 L 292 302 L 300 313 L 295 326 L 280 328 L 272 318 Z", labelX: 286, labelY: 315 },
  DUR: { path: "M 200 200 L 258 188 L 265 210 L 258 242 L 232 255 L 205 248 L 195 228 Z", labelX: 230, labelY: 222 },
  GRO: { path: "M 325 330 L 360 320 L 372 338 L 365 360 L 340 368 L 318 352 Z", labelX: 345, labelY: 344 },
  GUA: { path: "M 292 272 L 320 262 L 330 278 L 324 298 L 300 305 L 288 290 Z", labelX: 309, labelY: 283 },
  HID: { path: "M 368 262 L 392 255 L 400 268 L 395 285 L 372 290 L 360 277 Z", labelX: 380, labelY: 272 },
  JAL: { path: "M 255 260 L 300 248 L 318 265 L 312 298 L 282 308 L 252 295 L 245 275 Z", labelX: 282, labelY: 278 },
  MEX: { path: "M 360 280 L 390 272 L 400 285 L 395 302 L 368 308 L 352 295 Z", labelX: 376, labelY: 290 },
  MIC: { path: "M 295 302 L 345 290 L 358 308 L 350 332 L 318 340 L 292 325 Z", labelX: 325, labelY: 315 },
  MOR: { path: "M 358 302 L 378 297 L 385 310 L 378 322 L 360 325 L 352 312 Z", labelX: 369, labelY: 311 },
  NAY: { path: "M 232 252 L 258 242 L 268 258 L 262 278 L 240 282 L 228 268 Z", labelX: 248, labelY: 262 },
  NLE: { path: "M 310 195 L 355 182 L 365 200 L 358 228 L 325 235 L 305 218 Z", labelX: 335, labelY: 208 },
  OAX: { path: "M 385 328 L 425 316 L 438 335 L 430 358 L 398 365 L 378 348 Z", labelX: 408, labelY: 340 },
  PUE: { path: "M 390 295 L 420 285 L 432 300 L 425 322 L 395 328 L 382 312 Z", labelX: 407, labelY: 307 },
  QUE: { path: "M 348 265 L 370 258 L 378 270 L 372 285 L 350 288 L 340 276 Z", labelX: 359, labelY: 274 },
  ROO: { path: "M 525 295 L 548 288 L 555 308 L 548 330 L 528 335 L 518 315 Z", labelX: 537, labelY: 312 },
  SLP: { path: "M 318 222 L 362 210 L 372 228 L 365 255 L 330 262 L 310 245 Z", labelX: 341, labelY: 236 },
  SIN: { path: "M 165 195 L 215 185 L 228 205 L 222 235 L 195 245 L 162 228 Z", labelX: 196, labelY: 215 },
  SON: { path: "M 100 100 L 175 85 L 195 110 L 192 155 L 165 175 L 118 168 L 95 140 Z", labelX: 148, labelY: 128 },
  TAB: { path: "M 452 322 L 478 314 L 488 330 L 480 348 L 455 352 L 445 336 Z", labelX: 467, labelY: 333 },
  TAM: { path: "M 318 185 L 365 172 L 378 190 L 372 225 L 340 232 L 312 215 Z", labelX: 345, labelY: 200 },
  TLA: { path: "M 378 285 L 395 280 L 400 290 L 395 300 L 380 302 L 372 292 Z", labelX: 386, labelY: 291 },
  VER: { path: "M 405 272 L 435 258 L 448 278 L 442 318 L 415 325 L 398 302 L 398 280 Z", labelX: 423, labelY: 292 },
  YUC: { path: "M 478 278 L 518 270 L 528 285 L 520 305 L 482 310 L 470 295 Z", labelX: 499, labelY: 290 },
  ZAC: { path: "M 268 228 L 318 215 L 328 235 L 320 262 L 290 268 L 262 252 Z", labelX: 295, labelY: 242 },
  CDMX: { path: "M 372 290 L 384 286 L 388 295 L 382 303 L 370 302 L 365 294 Z", labelX: 377, labelY: 295 },
};

const STATE_NAMES: Record<string, string> = {
  AGU: "Aguascalientes", BCN: "Baja California", BCS: "Baja California Sur",
  CAM: "Campeche", CHP: "Chiapas", CHH: "Chihuahua", COA: "Coahuila",
  COL: "Colima", DUR: "Durango", GRO: "Guerrero", GUA: "Guanajuato",
  HID: "Hidalgo", JAL: "Jalisco", MEX: "Estado de México", MIC: "Michoacán",
  MOR: "Morelos", NAY: "Nayarit", NLE: "Nuevo León", OAX: "Oaxaca",
  PUE: "Puebla", QUE: "Querétaro", ROO: "Quintana Roo", SLP: "San Luis Potosí",
  SIN: "Sinaloa", SON: "Sonora", TAB: "Tabasco", TAM: "Tamaulipas",
  TLA: "Tlaxcala", VER: "Veracruz", YUC: "Yucatán", ZAC: "Zacatecas",
  CDMX: "Ciudad de México",
};

function interpolateColor(color1: string, color2: string, t: number): string {
  const hex = (h: string) => parseInt(h, 16);
  const r1 = hex(color1.slice(1, 3)), g1 = hex(color1.slice(3, 5)), b1 = hex(color1.slice(5, 7));
  const r2 = hex(color2.slice(1, 3)), g2 = hex(color2.slice(3, 5)), b2 = hex(color2.slice(5, 7));
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r},${g},${b})`;
}

const DEFAULT_DATA: StateData[] = [
  { id: "AGU", name: "Aguascalientes", value: 18.2 },
  { id: "BCN", name: "Baja California", value: 24.5 },
  { id: "BCS", name: "Baja California Sur", value: 16.8 },
  { id: "CAM", name: "Campeche", value: 12.3 },
  { id: "CHP", name: "Chiapas", value: 8.9 },
  { id: "CHH", name: "Chihuahua", value: 22.1 },
  { id: "COA", name: "Coahuila", value: 20.4 },
  { id: "COL", name: "Colima", value: 19.7 },
  { id: "DUR", name: "Durango", value: 17.3 },
  { id: "GRO", name: "Guerrero", value: 10.2 },
  { id: "GUA", name: "Guanajuato", value: 16.5 },
  { id: "HID", name: "Hidalgo", value: 14.8 },
  { id: "JAL", name: "Jalisco", value: 21.9 },
  { id: "MEX", name: "Estado de México", value: 23.6 },
  { id: "MIC", name: "Michoacán", value: 15.1 },
  { id: "MOR", name: "Morelos", value: 17.8 },
  { id: "NAY", name: "Nayarit", value: 19.2 },
  { id: "NLE", name: "Nuevo León", value: 25.8 },
  { id: "OAX", name: "Oaxaca", value: 9.4 },
  { id: "PUE", name: "Puebla", value: 16.2 },
  { id: "QUE", name: "Querétaro", value: 18.9 },
  { id: "ROO", name: "Quintana Roo", value: 20.1 },
  { id: "SLP", name: "San Luis Potosí", value: 15.7 },
  { id: "SIN", name: "Sinaloa", value: 18.4 },
  { id: "SON", name: "Sonora", value: 21.3 },
  { id: "TAB", name: "Tabasco", value: 11.6 },
  { id: "TAM", name: "Tamaulipas", value: 22.7 },
  { id: "TLA", name: "Tlaxcala", value: 13.9 },
  { id: "VER", name: "Veracruz", value: 14.3 },
  { id: "YUC", name: "Yucatán", value: 13.1 },
  { id: "ZAC", name: "Zacatecas", value: 16.0 },
  { id: "CDMX", name: "Ciudad de México", value: 26.4 },
];

export function MexicoHeatmap({
  data = DEFAULT_DATA,
  title = "Mapa de Calor — México",
  subtitle = "Prevalencia por estado (%)",
  unit = "%",
  colorScale = ["#dbeafe", "#1e3a8a"],
  minValue,
  maxValue,
}: MexicoHeatmapProps) {
  const [tooltip, setTooltip] = useState<{ name: string; value: number; x: number; y: number } | null>(null);

  const dataMap = Object.fromEntries(data.map((d) => [d.id, d.value]));
  const values = data.map((d) => d.value);
  const min = minValue ?? Math.min(...values);
  const max = maxValue ?? Math.max(...values);

  const getColor = (id: string) => {
    const v = dataMap[id];
    if (v == null) return "#f1f5f9";
    const t = max === min ? 0.5 : (v - min) / (max - min);
    return interpolateColor(colorScale[0], colorScale[1], t);
  };

  const legendStops = 5;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
        border: "1px solid #e2e8f0",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <div style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b" }}>{title}</div>
        <div style={{ fontSize: "12px", color: "#64748b", marginTop: "3px" }}>{subtitle}</div>
      </div>

      <svg viewBox="0 0 620 420" style={{ width: "100%", height: "auto" }}>
        {Object.entries(STATE_PATHS).map(([id, { path }]) => (
          <path
            key={id}
            d={path}
            fill={getColor(id)}
            stroke="#ffffff"
            strokeWidth="1.5"
            style={{ cursor: "pointer", transition: "opacity 0.15s" }}
            onMouseEnter={(e) => {
              const rect = (e.target as SVGPathElement).closest("svg")!.getBoundingClientRect();
              setTooltip({
                name: STATE_NAMES[id] ?? id,
                value: dataMap[id] ?? 0,
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            onMouseLeave={() => setTooltip(null)}
          />
        ))}

        {/* State abbreviation labels */}
        {Object.entries(STATE_PATHS).map(([id, { labelX, labelY }]) => (
          <text
            key={`lbl-${id}`}
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="7"
            fill="#1e293b"
            fontWeight="600"
            style={{ pointerEvents: "none", userSelect: "none" }}
          >
            {id}
          </text>
        ))}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x + 12,
            top: tooltip.y - 12,
            backgroundColor: "#1e293b",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "8px 12px",
            fontSize: "13px",
            fontWeight: 600,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ fontSize: "11px", fontWeight: 400, opacity: 0.8 }}>{tooltip.name}</div>
          <div>
            {tooltip.value.toFixed(1)}
            {unit}
          </div>
        </div>
      )}

      {/* Legend */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px" }}>
        <span style={{ fontSize: "11px", color: "#64748b" }}>
          {min.toFixed(1)}
          {unit}
        </span>
        <div
          style={{
            flex: 1,
            height: "12px",
            borderRadius: "6px",
            background: `linear-gradient(to right, ${colorScale[0]}, ${colorScale[1]})`,
          }}
        />
        <span style={{ fontSize: "11px", color: "#64748b" }}>
          {max.toFixed(1)}
          {unit}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
        {Array.from({ length: legendStops }).map((_, i) => {
          const v = min + ((max - min) * i) / (legendStops - 1);
          return (
            <span key={i} style={{ fontSize: "10px", color: "#94a3b8" }}>
              {v.toFixed(1)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
