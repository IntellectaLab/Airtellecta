import React from 'react'

const DEFAULT_ROWS = [
  { indicator: 'Prevalencia Vapeo', before: '19.4%', after: '15.8%', change: '-3.6%', positive: true },
  { indicator: 'Inicio Consumo', before: '8.2%', after: '5.1%', change: '-37.8%', positive: true },
  { indicator: 'Consumo Dual', before: '11.5%', after: '9.3%', change: '-19.1%', positive: true },
  { indicator: 'Percepción Riesgo', before: '42.1%', after: '63.8%', change: '+51.5%', positive: true },
]

const styles = {
  wrapper: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
    overflow: 'hidden',
  },
  titleRow: {
    padding: '18px 24px 14px',
    borderBottom: '1px solid #f1f5f9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1e293b',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px 20px',
    backgroundColor: '#f8fafc',
    fontSize: '11.5px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    textAlign: 'left',
    borderBottom: '1px solid #e2e8f0',
  },
  td: (isEven) => ({
    padding: '13px 20px',
    fontSize: '13.5px',
    color: '#334155',
    borderBottom: '1px solid #f1f5f9',
    backgroundColor: isEven ? '#fafafa' : '#ffffff',
  }),
  chip: (positive) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '3px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    backgroundColor: positive ? '#f0fdf4' : '#fff1f2',
    color: positive ? '#16a34a' : '#dc2626',
    border: `1px solid ${positive ? '#bbf7d0' : '#fecdd3'}`,
  }),
  beforeBadge: {
    display: 'inline-block',
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: '#1a5c3a',
    color: '#ffffff',
  },
  afterBadge: {
    display: 'inline-block',
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: '#4ade80',
    color: '#fff',
  },
}

export function ComparisonTable({
  rows = DEFAULT_ROWS,
  title = 'Resumen de Indicadores',
  showTrend = true,
}) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.titleRow}>
        <span style={styles.title}>{title}</span>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>n = 421</span>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Indicador</th>
            <th style={styles.th}>Antes</th>
            <th style={styles.th}>Después</th>
            {showTrend && <th style={styles.th}>Cambio</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.indicator}>
              <td style={{ ...styles.td(i % 2 === 1), fontWeight: '500', color: '#1e293b' }}>
                {row.indicator}
              </td>
              <td style={styles.td(i % 2 === 1)}>
                <span style={styles.beforeBadge}>{row.before}</span>
              </td>
              <td style={styles.td(i % 2 === 1)}>
                <span style={styles.afterBadge}>{row.after}</span>
              </td>
              {showTrend && (
                <td style={styles.td(i % 2 === 1)}>
                  <span style={styles.chip(row.positive)}>
                    {row.positive ? '▼' : '▲'} {row.change}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
