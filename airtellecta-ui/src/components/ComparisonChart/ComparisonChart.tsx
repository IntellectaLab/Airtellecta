import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const DEFAULT_DATA = [
  { indicator: 'Prevalencia Vapeo', antes: 19.4, despues: 15.8 },
  { indicator: 'Inicio Consumo', antes: 8.2, despues: 5.1 },
  { indicator: 'Consumo Dual', antes: 11.5, despues: 9.3 },
  { indicator: 'Percepción Riesgo', antes: 42.1, despues: 63.8 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '10px 14px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      fontSize: '13px',
    }}>
      <p style={{ fontWeight: '600', marginBottom: '6px', color: '#1e293b' }}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color, margin: '2px 0' }}>
          {entry.name}: <strong>{entry.value}%</strong>
        </p>
      ))}
    </div>
  )
}

const styles = {
  wrapper: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
    border: '1px solid #e2e8f0',
  },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  title: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: '12px',
    color: '#64748b',
    marginTop: '3px',
  },
  badge: {
    padding: '4px 12px',
    borderRadius: '20px',
    backgroundColor: '#f0fdf4',
    color: '#16a34a',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid #bbf7d0',
  },
}

export function ComparisonChart({
  data = DEFAULT_DATA,
  title = 'Comparación Antes vs. Después',
  subtitle = 'Indicadores clave pre y post intervención',
  layout = 'horizontal',
  height = 320,
}) {
  const isHorizontal = layout === 'horizontal'

  return (
    <div style={styles.wrapper}>
      <div style={styles.titleRow}>
        <div>
          <div style={styles.title}>{title}</div>
          <div style={styles.subtitle}>{subtitle}</div>
        </div>
        <span style={styles.badge}>Q4 2025</span>
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout={isHorizontal ? 'vertical' : 'horizontal'}
          margin={{ top: 5, right: 20, left: isHorizontal ? 140 : 0, bottom: 5 }}
          barCategoryGap="30%"
          barGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          {isHorizontal ? (
            <>
              <XAxis type="number" tick={{ fontSize: 12, fill: '#64748b' }} unit="%" />
              <YAxis
                type="category"
                dataKey="indicator"
                tick={{ fontSize: 12, fill: '#475569' }}
                width={140}
              />
            </>
          ) : (
            <>
              <XAxis dataKey="indicator" tick={{ fontSize: 11, fill: '#475569' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} unit="%" />
            </>
          )}
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '13px', paddingTop: '16px' }}
            formatter={(value) => (
              <span style={{ color: '#475569', fontWeight: '500' }}>
                {value === 'antes' ? 'Antes' : 'Después'}
              </span>
            )}
          />
          <Bar dataKey="antes" name="antes" fill="#1a5c3a" radius={[0, 4, 4, 0]} />
          <Bar dataKey="despues" name="despues" fill="#4ade80" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
