const React = window.React;

/** Drafting button: hairline border, letterspaced caps. Inverts to graphite on hover. */
export function Button({ children, variant = 'default', disabled, onClick, type = 'button', style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const filled = variant === 'subject';
  const inverted = (hover || filled) && !disabled;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        fontFamily: 'var(--font-drafting)',
        fontSize: 'var(--text-label)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        padding: '12px 28px',
        border: `${filled ? 'var(--line-w-subject)' : 'var(--line-w-hair)'} solid var(--line-subject)`,
        borderRadius: 'var(--radius-none)',
        backgroundColor: inverted ? (press ? 'var(--graphite-1)' : 'var(--graphite-2)') : 'transparent',
        color: inverted ? 'var(--surface-sheet)' : 'var(--text-title)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background-color 120ms linear, color 120ms linear',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
