const React = window.React;

const rtCell = {
  padding: '8px 12px',
  borderTop: 'var(--line-w-hair) solid var(--line-standard)',
  borderLeft: 'var(--line-w-hair) solid var(--line-standard)',
  fontSize: 'var(--text-dim)',
  letterSpacing: 'var(--tracking-drafting)',
  textTransform: 'uppercase',
  color: 'var(--text-body)',
  textAlign: 'left',
  verticalAlign: 'top',
};

/** Revision-block table. Default columns: REV / DATE / DESCRIPTION / BY. */
export function RevisionTable({ columns = ['REV', 'DATE', 'DESCRIPTION', 'BY'], rows = [], onRowClick, style }) {
  return (
    <table
      style={{
        borderCollapse: 'collapse',
        border: 'var(--line-w-hair) solid var(--line-standard)',
        fontFamily: 'var(--font-drafting)',
        width: '100%',
        ...style,
      }}
    >
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i} style={{ ...rtCell, borderTop: 'none', borderLeft: i === 0 ? 'none' : rtCell.borderLeft, backgroundColor: 'var(--surface-cell)', color: 'var(--text-title)' }}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr
            key={ri}
            onClick={onRowClick ? () => onRowClick(ri) : undefined}
            style={onRowClick ? { cursor: 'pointer' } : undefined}
            onMouseEnter={onRowClick ? (e) => { e.currentTarget.style.backgroundColor = 'var(--surface-cell)'; } : undefined}
            onMouseLeave={onRowClick ? (e) => { e.currentTarget.style.backgroundColor = ''; } : undefined}
          >
            {row.map((cell, ci) => (
              <td key={ci} style={{ ...rtCell, borderLeft: ci === 0 ? 'none' : rtCell.borderLeft }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
