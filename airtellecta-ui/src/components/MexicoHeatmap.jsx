import React, { useState } from 'react'

// Paths SVG simplificados de los 32 estados de México
// Viewbox: 0 0 800 600
const ESTADOS = [
  {
    id: 'BC', nombre: 'Baja California',
    d: 'M 62 28 L 95 22 L 118 45 L 130 80 L 112 105 L 90 118 L 68 95 L 52 68 Z',
  },
  {
    id: 'BCS', nombre: 'Baja California Sur',
    d: 'M 80 130 L 100 122 L 118 145 L 122 178 L 110 210 L 95 235 L 78 245 L 68 220 L 65 190 L 72 165 Z',
  },
  {
    id: 'SON', nombre: 'Sonora',
    d: 'M 118 35 L 175 25 L 210 38 L 225 70 L 215 105 L 195 128 L 170 140 L 145 130 L 130 108 L 112 85 L 118 55 Z',
  },
  {
    id: 'CHIH', nombre: 'Chihuahua',
    d: 'M 215 38 L 285 30 L 320 55 L 315 95 L 295 125 L 265 145 L 235 148 L 215 130 L 210 105 L 218 72 Z',
  },
  {
    id: 'COAH', nombre: 'Coahuila',
    d: 'M 315 55 L 380 48 L 415 72 L 418 108 L 400 135 L 368 152 L 335 155 L 310 138 L 300 112 L 308 82 Z',
  },
  {
    id: 'NL', nombre: 'Nuevo León',
    d: 'M 415 72 L 455 68 L 472 90 L 468 118 L 448 138 L 418 142 L 400 128 L 400 100 Z',
  },
  {
    id: 'TAMS', nombre: 'Tamaulipas',
    d: 'M 455 68 L 500 62 L 528 85 L 535 120 L 522 158 L 498 178 L 468 172 L 448 148 L 448 118 L 458 90 Z',
  },
  {
    id: 'SIN', nombre: 'Sinaloa',
    d: 'M 170 140 L 195 128 L 215 148 L 212 178 L 200 205 L 182 222 L 162 218 L 150 198 L 155 172 Z',
  },
  {
    id: 'DUR', nombre: 'Durango',
    d: 'M 215 148 L 265 145 L 290 168 L 285 200 L 265 222 L 238 230 L 212 220 L 200 200 L 208 175 Z',
  },
  {
    id: 'ZACT', nombre: 'Zacatecas',
    d: 'M 290 168 L 335 158 L 358 178 L 352 208 L 335 228 L 308 235 L 285 225 L 280 205 Z',
  },
  {
    id: 'SLP', nombre: 'San Luis Potosí',
    d: 'M 358 178 L 400 165 L 428 182 L 428 215 L 410 238 L 382 248 L 355 240 L 342 220 L 348 198 Z',
  },
  {
    id: 'NAY', nombre: 'Nayarit',
    d: 'M 182 222 L 205 215 L 218 232 L 215 255 L 200 268 L 182 265 L 172 248 L 175 232 Z',
  },
  {
    id: 'AGS', nombre: 'Aguascalientes',
    d: 'M 308 235 L 328 228 L 340 242 L 335 258 L 318 262 L 305 252 Z',
  },
  {
    id: 'JAL', nombre: 'Jalisco',
    d: 'M 215 255 L 248 240 L 285 248 L 308 268 L 308 298 L 288 318 L 260 322 L 232 310 L 212 288 L 208 268 Z',
  },
  {
    id: 'GTO', nombre: 'Guanajuato',
    d: 'M 348 248 L 385 242 L 408 258 L 405 282 L 385 298 L 358 298 L 338 282 L 338 262 Z',
  },
  {
    id: 'QRO', nombre: 'Querétaro',
    d: 'M 408 258 L 432 252 L 448 268 L 445 288 L 428 300 L 408 298 L 400 282 Z',
  },
  {
    id: 'HGO', nombre: 'Hidalgo',
    d: 'M 448 268 L 478 262 L 495 278 L 490 302 L 468 315 L 445 308 L 440 288 Z',
  },
  {
    id: 'COL', nombre: 'Colima',
    d: 'M 232 318 L 252 312 L 262 328 L 255 345 L 238 348 L 225 335 Z',
  },
  {
    id: 'MICH', nombre: 'Michoacán',
    d: 'M 260 322 L 308 318 L 338 335 L 342 362 L 322 382 L 290 388 L 258 375 L 240 355 L 245 335 Z',
  },
  {
    id: 'MEX', nombre: 'Estado de México',
    d: 'M 428 300 L 462 295 L 478 312 L 472 338 L 450 350 L 425 345 L 412 328 L 418 308 Z',
  },
  {
    id: 'CDMX', nombre: 'Ciudad de México',
    d: 'M 455 318 L 470 312 L 480 322 L 477 335 L 462 340 L 450 332 Z',
  },
  {
    id: 'TLAX', nombre: 'Tlaxcala',
    d: 'M 480 308 L 498 302 L 510 315 L 505 330 L 490 335 L 478 325 Z',
  },
  {
    id: 'PUE', nombre: 'Puebla',
    d: 'M 495 302 L 535 295 L 560 318 L 555 352 L 530 370 L 500 368 L 478 348 L 478 322 L 492 308 Z',
  },
  {
    id: 'VER', nombre: 'Veracruz',
    d: 'M 490 278 L 535 268 L 568 285 L 580 318 L 568 355 L 548 378 L 518 385 L 492 368 L 488 340 L 495 308 Z',
  },
  {
    id: 'GRO', nombre: 'Guerrero',
    d: 'M 342 362 L 385 355 L 420 368 L 428 398 L 412 422 L 382 432 L 350 425 L 328 405 L 330 382 Z',
  },
  {
    id: 'MOR', nombre: 'Morelos',
    d: 'M 450 350 L 475 345 L 488 362 L 480 382 L 460 388 L 442 375 L 442 358 Z',
  },
  {
    id: 'OAX', nombre: 'Oaxaca',
    d: 'M 488 370 L 545 358 L 578 375 L 582 412 L 560 438 L 525 448 L 490 440 L 468 420 L 470 395 Z',
  },
  {
    id: 'CHIS', nombre: 'Chiapas',
    d: 'M 545 390 L 590 380 L 620 400 L 622 432 L 600 455 L 565 462 L 535 452 L 520 432 L 530 408 Z',
  },
  {
    id: 'TAB', nombre: 'Tabasco',
    d: 'M 548 352 L 585 342 L 608 358 L 605 385 L 582 398 L 555 392 L 542 375 Z',
  },
  {
    id: 'CAMP', nombre: 'Campeche',
    d: 'M 608 358 L 648 345 L 672 365 L 668 400 L 645 425 L 618 428 L 598 410 L 600 382 Z',
  },
  {
    id: 'YUC', nombre: 'Yucatán',
    d: 'M 648 305 L 710 298 L 728 318 L 722 350 L 695 365 L 665 362 L 645 342 L 648 318 Z',
  },
  {
    id: 'QROO', nombre: 'Quintana Roo',
    d: 'M 695 345 L 722 338 L 740 358 L 738 398 L 718 422 L 692 428 L 675 408 L 672 378 L 682 358 Z',
  },
]

// Escala de color verde oscuro → verde claro → amarillo para el heatmap
function getColor(value, min, max, colorScale) {
  if (value === null || value === undefined) return '#e2e8f0'
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)))

  if (colorScale === 'green') {
    // bajo = verde oscuro (bueno), alto = rojo (malo)
    const r = Math.round(239 * ratio + 26 * (1 - ratio))
    const g = Math.round(68 * ratio + 92 * (1 - ratio))
    const b = Math.round(68 * ratio + 58 * (1 - ratio))
    return `rgb(${r},${g},${b})`
  }

  if (colorScale === 'blue') {
    const r = Math.round(14 * (1 - ratio) + 186 * ratio)
    const g = Math.round(165 * (1 - ratio) + 230 * ratio)
    const b = Math.round(233 * (1 - ratio) + 253 * ratio)
    return `rgb(${r},${g},${b})`
  }

  // default: verde oscuro→claro (buena reducción)
  const r = Math.round(26 + (74 - 26) * ratio)
  const g = Math.round(92 + (222 - 92) * ratio)
  const b = Math.round(58 + (128 - 58) * ratio)
  return `rgb(${r},${g},${b})`
}

const TOOLTIP_STYLE = {
  position: 'fixed',
  backgroundColor: '#1e293b',
  color: '#f8fafc',
  padding: '10px 14px',
  borderRadius: '8px',
  fontSize: '13px',
  pointerEvents: 'none',
  zIndex: 1000,
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  minWidth: '180px',
}

const styles = {
  wrapper: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
  },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  title: { fontSize: '16px', fontWeight: '700', color: '#1e293b' },
  subtitle: { fontSize: '12px', color: '#64748b', marginTop: '3px' },
  legendRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    fontSize: '11px',
    color: '#64748b',
  },
  legendBar: (colorScale) => ({
    flex: 1,
    height: '10px',
    borderRadius: '5px',
    background: colorScale === 'blue'
      ? 'linear-gradient(to right, #0ea5e9, #bae6fd)'
      : 'linear-gradient(to right, #1a5c3a, #4ade80, #ef4444)',
  }),
  noData: {
    display: 'inline-block',
    width: '14px',
    height: '14px',
    backgroundColor: '#e2e8f0',
    borderRadius: '3px',
    marginRight: '4px',
    verticalAlign: 'middle',
  },
}

export function MexicoHeatmap({
  data = {},
  title = 'Mapa de Calor',
  subtitle = 'Prevalencia por estado',
  unit = '%',
  colorScale = 'default',
  height = 420,
}) {
  const [tooltip, setTooltip] = useState(null)

  const values = Object.values(data).filter((v) => v !== null && v !== undefined)
  const min = values.length ? Math.min(...values) : 0
  const max = values.length ? Math.max(...values) : 100

  const handleMouseMove = (e, estado) => {
    const value = data[estado.id]
    setTooltip({
      x: e.clientX + 14,
      y: e.clientY - 10,
      estado: estado.nombre,
      value,
    })
  }

  const handleMouseLeave = () => setTooltip(null)

  return (
    <div style={styles.wrapper}>
      <div style={styles.titleRow}>
        <div>
          <div style={styles.title}>{title}</div>
          <div style={styles.subtitle}>{subtitle}</div>
        </div>
        <div style={{
          padding: '4px 12px',
          borderRadius: '20px',
          backgroundColor: '#f0fdf4',
          color: '#16a34a',
          fontSize: '12px',
          fontWeight: '600',
          border: '1px solid #bbf7d0',
        }}>
          32 estados
        </div>
      </div>

      <svg
        viewBox="0 0 800 500"
        width="100%"
        height={height}
        style={{ display: 'block' }}
      >
        {ESTADOS.map((estado) => {
          const value = data[estado.id]
          const fill = getColor(value, min, max, colorScale)
          const hasData = value !== null && value !== undefined

          return (
            <path
              key={estado.id}
              d={estado.d}
              fill={fill}
              stroke="#ffffff"
              strokeWidth="1.5"
              style={{
                cursor: 'pointer',
                transition: 'opacity 0.15s',
                opacity: hasData ? 1 : 0.5,
              }}
              onMouseMove={(e) => handleMouseMove(e, estado)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={(e) => {
                e.currentTarget.style.stroke = '#1e293b'
                e.currentTarget.style.strokeWidth = '2.5'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.stroke = '#ffffff'
                e.currentTarget.style.strokeWidth = '1.5'
              }}
            />
          )
        })}

        {/* Labels de estados grandes */}
        <text x="148" y="88" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>SON</text>
        <text x="262" y="90" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>CHIH</text>
        <text x="362" y="100" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>COAH</text>
        <text x="435" y="108" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>NL</text>
        <text x="488" y="118" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>TAMS</text>
        <text x="248" y="195" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>DUR</text>
        <text x="320" y="200" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>ZACT</text>
        <text x="390" y="210" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>SLP</text>
        <text x="268" y="285" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>JAL</text>
        <text x="373" y="275" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>GTO</text>
        <text x="520" y="330" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>VER</text>
        <text x="380" y="400" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>GRO</text>
        <text x="530" y="412" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>OAX</text>
        <text x="580" y="428" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>CHIS</text>
        <text x="685" y="332" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>YUC</text>
        <text x="630" y="390" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>CAMP</text>
        <text x="706" y="390" fontSize="8" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>QROO</text>
        <text x="87" y="78" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>BC</text>
        <text x="90" y="190" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>BCS</text>
        <text x="183" y="185" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>SIN</text>
        <text x="197" y="245" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>NAY</text>
        <text x="450" y="308" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>QRO</text>
        <text x="468" y="293" fontSize="7" fill="#1e293b" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>HGO</text>
        <text x="320" y="248" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>AGS</text>
        <text x="296" y="355" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>MICH</text>
        <text x="447" y="325" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>MEX</text>
        <text x="464" y="328" fontSize="6" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '700' }}>CDMX</text>
        <text x="493" y="318" fontSize="6" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>TLAX</text>
        <text x="518" y="335" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>PUE</text>
        <text x="462" y="370" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>MOR</text>
        <text x="243" y="332" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>COL</text>
        <text x="578" y="368" fontSize="7" fill="#fff" textAnchor="middle" style={{ pointerEvents: 'none', fontWeight: '600' }}>TAB</text>
      </svg>

      {/* Leyenda */}
      <div style={styles.legendRow}>
        <span>Menor</span>
        <div style={styles.legendBar(colorScale)} />
        <span>Mayor</span>
        <span style={{ marginLeft: '16px', display: 'flex', alignItems: 'center' }}>
          <span style={styles.noData} />Sin datos
        </span>
      </div>

      {/* Rango */}
      {values.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
          <span>Mín: {min.toFixed(1)}{unit}</span>
          <span>Máx: {max.toFixed(1)}{unit}</span>
        </div>
      )}

      {/* Tooltip */}
      {tooltip && (
        <div style={{ ...TOOLTIP_STYLE, left: tooltip.x, top: tooltip.y }}>
          <div style={{ fontWeight: '700', marginBottom: '4px' }}>{tooltip.estado}</div>
          {tooltip.value !== undefined && tooltip.value !== null ? (
            <div style={{ color: '#4ade80', fontSize: '15px', fontWeight: '700' }}>
              {tooltip.value.toFixed(1)}{unit}
            </div>
          ) : (
            <div style={{ color: '#64748b', fontSize: '12px' }}>Sin datos disponibles</div>
          )}
        </div>
      )}
    </div>
  )
}
