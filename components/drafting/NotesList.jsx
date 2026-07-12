const React = window.React;

/** Numbered NOTES section, drafting style. */
export function NotesList({ title = 'NOTES:', notes = [], style }) {
  return (
    <div style={{ fontFamily: 'var(--font-drafting)', ...style }}>
      <div
        style={{
          fontSize: 'var(--text-note)',
          letterSpacing: 'var(--tracking-drafting)',
          textTransform: 'uppercase',
          color: 'var(--text-title)',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          marginBottom: 'var(--space-2)',
        }}
      >
        {title}
      </div>
      <ol style={{ margin: 0, paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {notes.map((n, i) => (
          <li
            key={i}
            style={{
              fontSize: 'var(--text-dim)',
              letterSpacing: 'var(--tracking-drafting)',
              textTransform: 'uppercase',
              color: 'var(--text-body)',
              lineHeight: 'var(--leading-note)',
            }}
          >
            {n}
          </li>
        ))}
      </ol>
    </div>
  );
}
