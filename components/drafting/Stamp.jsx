const React = window.React;

/** Angled rubber inspection stamp. The ONLY sanctioned use of red. */
export function Stamp({ children, color = 'red', angle = -8, size = 'md', style }) {
  const c = color === 'red' ? 'var(--stamp-red-faded)' : 'var(--graphite-2)';
  const pad = size === 'lg' ? '10px 22px' : '5px 14px';
  const fs = size === 'lg' ? '20px' : '13px';
  return (
    <span
      style={{
        display: 'inline-block',
        transform: `rotate(${angle}deg)`,
        border: `2px solid ${c}`,
        color: c,
        padding: pad,
        fontFamily: 'var(--font-drafting)',
        fontSize: fs,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        maskImage: 'var(--paper-tooth)',
        maskSize: '180px',
        WebkitMaskImage: 'var(--paper-tooth)',
        WebkitMaskSize: '180px',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
