const React = window.React;

/** Labeled form field styled as a title-block cell. */
export function Field({ label, name, type = 'text', textarea, placeholder, required, rows = 4, value, onChange, style }) {
  const [focus, setFocus] = React.useState(false);
  const inputStyle = {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-drafting)',
    fontSize: 'var(--text-label)',
    letterSpacing: 'var(--tracking-drafting)',
    textTransform: 'uppercase',
    color: 'var(--text-title)',
    padding: '6px var(--cell-pad-x) 10px',
    resize: 'vertical',
  };
  const control = textarea ? (
    <textarea name={name} placeholder={placeholder} required={required} rows={rows} value={value} onChange={onChange}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={inputStyle}></textarea>
  ) : (
    <input name={name} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={inputStyle} />
  );
  return (
    <label style={{ display: 'block', border: `var(--line-w-hair) solid ${focus ? 'var(--line-subject)' : 'var(--line-standard)'}`, backgroundColor: 'var(--surface-cell)', ...style }}>
      <span
        style={{
          display: 'block',
          padding: 'var(--cell-pad-y) var(--cell-pad-x) 0',
          fontFamily: 'var(--font-drafting)',
          fontSize: '10px',
          letterSpacing: 'var(--tracking-drafting)',
          textTransform: 'uppercase',
          color: focus ? 'var(--text-title)' : 'var(--text-annotation)',
        }}
      >
        {label}
      </span>
      {control}
    </label>
  );
}
