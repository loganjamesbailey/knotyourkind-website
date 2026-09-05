const React = window.React;

/** Labeled form field styled as a title-block cell. */
export function Field({ label, name, type = 'text', textarea, select, options, placeholder, required, rows = 4, value, onChange, style }) {
  const [focus, setFocus] = React.useState(false);
  const isEmail = type === 'email';
  const inputStyle = {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: isEmail ? 'var(--font-email)' : 'var(--font-drafting)',
    fontSize: 'var(--text-label)',
    letterSpacing: isEmail ? 0 : 'var(--tracking-drafting)',
    textTransform: isEmail ? 'none' : 'uppercase',
    color: 'var(--text-title)',
    padding: '6px var(--cell-pad-x) 10px',
    resize: 'vertical',
    appearance: select ? 'none' : undefined,
    borderRadius: 'var(--radius-none)',
  };
  const focusBind = { onFocus: () => setFocus(true), onBlur: () => setFocus(false) };
  let control;
  if (textarea) {
    control = (
      <textarea name={name} placeholder={placeholder} required={required} rows={rows} value={value} onChange={onChange} {...focusBind} style={inputStyle}></textarea>
    );
  } else if (select) {
    control = (
      <select name={name} required={required} value={value} onChange={onChange} {...focusBind} style={inputStyle}>
        <option value="">{placeholder || 'SELECT'}</option>
        {(options || []).map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>{opt.label || opt}</option>
        ))}
      </select>
    );
  } else {
    control = (
      <input name={name} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange} {...focusBind} className={isEmail ? 'kyk-field-email' : undefined} style={inputStyle} />
    );
  }
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
