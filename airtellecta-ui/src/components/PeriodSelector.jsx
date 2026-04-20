import React, { useState } from 'react'

const YEARS = ['2023', '2024', '2025', '2026']
const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4']

const styles = {
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '6px 12px',
    userSelect: 'none',
  },
  label: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  select: {
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '13.5px',
    fontWeight: '600',
    color: '#1e293b',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: 'inherit',
    padding: '0 4px',
  },
  separator: {
    color: '#cbd5e1',
    fontSize: '14px',
    fontWeight: '300',
  },
  // Segmented variant
  segmented: {
    display: 'inline-flex',
    backgroundColor: '#f1f5f9',
    borderRadius: '10px',
    padding: '3px',
    gap: '2px',
    border: '1px solid #e2e8f0',
  },
  seg: (active) => ({
    padding: '5px 14px',
    borderRadius: '7px',
    fontSize: '12.5px',
    fontWeight: active ? '700' : '500',
    color: active ? '#ffffff' : '#64748b',
    backgroundColor: active ? '#1a5c3a' : 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.15s',
    fontFamily: 'inherit',
  }),
}

const PRESETS = ['2024-Q4', '2025-Q1', '2025-Q2', '2025-Q3', '2025-Q4']

export function PeriodSelector({
  value = '2025-Q4',
  onChange,
  variant = 'dropdown',
}) {
  const [year, quarter] = value.split('-')

  if (variant === 'segmented') {
    return (
      <div style={styles.segmented}>
        {PRESETS.map((p) => (
          <button
            key={p}
            style={styles.seg(value === p)}
            onClick={() => onChange?.(p)}
          >
            {p}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div style={styles.wrapper}>
      <span style={styles.label}>Periodo</span>
      <select
        style={styles.select}
        value={year}
        onChange={(e) => onChange?.(`${e.target.value}-${quarter}`)}
      >
        {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
      </select>
      <span style={styles.separator}>—</span>
      <select
        style={styles.select}
        value={quarter}
        onChange={(e) => onChange?.(`${year}-${e.target.value}`)}
      >
        {QUARTERS.map((q) => <option key={q} value={q}>{q}</option>)}
      </select>
    </div>
  )
}
