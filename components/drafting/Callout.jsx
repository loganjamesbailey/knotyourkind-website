const React = window.React;

/** Leader line with arrowhead pointing at the subject, label at the tail. */
export function Callout({ label, lineLength = 48, rise = 10, style }) {
  const w = lineLength;
  const h = Math.max(rise + 4, 12);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '6px', ...style }}>
      <svg width={w} height={h} style={{ display: 'block', marginTop: '4px', overflow: 'visible' }}>
        <polygon
          points={`0,${h - 1} 9,${h - 4} 7,${h + 1}`}
          fill="var(--line-standard)"
        />
        <line
          x1="7" y1={h - 2} x2={w * 0.55} y2={4}
          stroke="var(--line-standard)" strokeWidth="1"
        />
        <line
          x1={w * 0.55} y1={4} x2={w} y2={4}
          stroke="var(--line-standard)" strokeWidth="1"
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-drafting)',
          fontSize: 'var(--text-dim)',
          letterSpacing: 'var(--tracking-drafting)',
          textTransform: 'uppercase',
          color: 'var(--text-body)',
          lineHeight: 1.35,
          whiteSpace: 'pre-line',
        }}
      >
        {label}
      </span>
    </span>
  );
}
