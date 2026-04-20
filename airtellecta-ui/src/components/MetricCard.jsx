import React from 'react'

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minWidth: '180px',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
  },
  values: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLabel: {
    fontSize: '12px',
    color: '#94a3b8',
    fontWeight: '500',
  },
  valueChip: (color) => ({
    padding: '2px 10px',
    borderRadius: '20px',
    backgroundColor: color,
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: '700',
  }),
  trend: (positive) => ({
    fontSize: '12px',
    fontWeight: '600',
    color: positive ? '#16a34a' : '#ef4444',
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
  }),
  divider: {
    height: '1px',
    backgroundColor: '#f1f5f9',
  },
}

export function MetricCard({
  label = 'Prevalencia Vapeo',
  beforeValue = '19.4%',
  afterValue = '15.8%',
  trend = '-3.6%',
  trendPositive = true,
  variant = 'default',
}) {
  const cardStyle = {
    ...styles.card,
    backgroundColor: variant === 'highlighted' ? '#f0fdf4' : '#ffffff',
    borderColor: variant === 'highlighted' ? '#bbf7d0' : '#e2e8f0',
  }

  return (
    <div style={cardStyle}>
      <div style={styles.label}>{label}</div>
      <div style={styles.divider} />
      <div style={styles.values}>
        <div style={styles.row}>
          <span style={styles.rowLabel}>Antes:</span>
          <span style={styles.valueChip('#1a5c3a')}>{beforeValue}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.rowLabel}>Después:</span>
          <span style={styles.valueChip('#4ade80')}>{afterValue}</span>
        </div>
      </div>
      <div style={styles.divider} />
      <div style={styles.trend(trendPositive)}>
        {trendPositive ? '▼' : '▲'} {trend}
      </div>
    </div>
  )
}
