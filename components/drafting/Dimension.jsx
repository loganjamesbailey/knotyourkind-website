const React = window.React;

/** Horizontal dimension line: extension ticks, arrowheads, value above. */
export function Dimension({ value, width = '100%', style }) {
  return (
    <div style={{ position: 'relative', width, height: '30px', ...style }}>
      <span
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: 0,
          fontFamily: 'var(--font-drafting)',
          fontSize: 'var(--text-dim)',
          letterSpacing: 'var(--tracking-drafting)',
          textTransform: 'uppercase',
          color: 'var(--text-body)',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <svg
        width="100%" height="12"
        style={{ position: 'absolute', bottom: 0, left: 0, display: 'block' }}
        preserveAspectRatio="none"
      >
        <line x1="0" y1="6" x2="100%" y2="6" stroke="var(--line-standard)" strokeWidth="1" />
      </svg>
      {/* extension ticks */}
      <span style={{ position: 'absolute', bottom: 0, left: 0, width: '1px', height: '12px', background: 'var(--line-standard)' }}></span>
      <span style={{ position: 'absolute', bottom: 0, right: 0, width: '1px', height: '12px', background: 'var(--line-standard)' }}></span>
      {/* arrowheads */}
      <svg width="10" height="8" style={{ position: 'absolute', bottom: '2px', left: '1px' }}>
        <polygon points="0,4 10,1 10,7" fill="var(--line-standard)" />
      </svg>
      <svg width="10" height="8" style={{ position: 'absolute', bottom: '2px', right: '1px' }}>
        <polygon points="10,4 0,1 0,7" fill="var(--line-standard)" />
      </svg>
    </div>
  );
}
