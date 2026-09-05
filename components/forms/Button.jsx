const React = window.React;

const BUTTON_VARIANTS = {
  default: {
    restBg: 'var(--kyk-red)',
    restFg: 'var(--kyk-white)',
    restBorder: 'var(--kyk-red)',
    hoverBg: 'var(--kyk-white)',
    hoverFg: 'var(--kyk-red)',
    hoverBorder: 'var(--kyk-red)',
  },
  deep: {
    restBg: 'var(--kyk-deep-red)',
    restFg: 'var(--kyk-white)',
    restBorder: 'var(--kyk-deep-red)',
    hoverBg: 'var(--kyk-black)',
    hoverFg: 'var(--kyk-white)',
    hoverBorder: 'var(--kyk-black)',
  },
  invert: {
    restBg: 'var(--kyk-white)',
    restFg: 'var(--kyk-black)',
    restBorder: 'var(--kyk-white)',
    hoverBg: 'var(--kyk-black)',
    hoverFg: 'var(--kyk-white)',
    hoverBorder: 'var(--kyk-black)',
  },
  bar: {
    restBg: 'var(--kyk-pure-red)',
    restFg: 'var(--kyk-white)',
    restBorder: 'var(--kyk-pure-red)',
    hoverBg: 'var(--kyk-readmore-hover)',
    hoverFg: 'var(--kyk-white)',
    hoverBorder: 'var(--kyk-readmore-hover)',
  },
};

/** Guide buttons: default #D2232A, deep #8E1D21, invert white/black, bar #FF0000. */
export function Button({ children, variant = 'default', disabled, onClick, type = 'button', style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const key = variant === 'subject' ? 'default' : (BUTTON_VARIANTS[variant] ? variant : 'default');
  const pal = BUTTON_VARIANTS[key];
  const hot = (hover || press) && !disabled;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      className={'kyk-btn kyk-btn-' + key}
      style={{
        fontFamily: 'var(--font-drafting)',
        fontWeight: 700,
        fontSize: 'var(--text-label)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        padding: '12px 28px',
        border: `var(--line-w-hair) solid ${hot ? pal.hoverBorder : pal.restBorder}`,
        borderRadius: 'var(--radius-none)',
        backgroundColor: hot ? pal.hoverBg : pal.restBg,
        color: hot ? pal.hoverFg : pal.restFg,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background-color var(--motion-hover) ease, color var(--motion-hover) ease, border-color var(--motion-hover) ease',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
