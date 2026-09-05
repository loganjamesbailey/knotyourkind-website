const React = window.React;

/** Angled rubber inspection stamp. The ONLY sanctioned use of red. */
export function Stamp({ children, color = 'red', angle = -8, size = 'md', style, className }) {
  // Solid stamp red for max presence; graphite variant stays muted.
  const c = color === 'red' ? 'var(--stamp-red)' : 'var(--graphite-2)';
  const sizes = {
    sm: { pad: '4px 12px', fs: '12px', border: 2 },
    md: { pad: '6px 16px', fs: '14px', border: 2 },
    lg: { pad: '12px 26px', fs: '22px', border: 3 },
    xl: { pad: '16px 32px', fs: '28px', border: 3 },
  };
  const s = sizes[size] || sizes.md;
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        transform: `rotate(${angle}deg)`,
        border: `${s.border}px solid ${c}`,
        color: c,
        background: 'rgba(0, 0, 0, 0.72)',
        padding: s.pad,
        fontFamily: 'var(--font-drafting)',
        fontSize: s.fs,
        fontWeight: 700,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        lineHeight: 1.15,
        borderRadius: 'var(--radius-none)',
        boxShadow: 'none',
        opacity: 1,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
