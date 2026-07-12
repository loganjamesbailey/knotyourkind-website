const React = window.React;

const tbCell = (grow) => ({
  padding: 'var(--cell-pad-y) var(--cell-pad-x)',
  borderLeft: 'var(--line-w-hair) solid var(--line-standard)',
  flex: grow ? 1 : 'none',
});
const tbLabel = {
  fontSize: '10px',
  letterSpacing: 'var(--tracking-drafting)',
  textTransform: 'uppercase',
  color: 'var(--text-annotation)',
  display: 'block',
};
const tbValue = {
  fontSize: 'var(--text-dim)',
  letterSpacing: 'var(--tracking-drafting)',
  textTransform: 'uppercase',
  color: 'var(--text-title)',
  display: 'block',
  marginTop: '2px',
  whiteSpace: 'nowrap',
};

/** The drawing title block. TITLE / DRAWN BY / DATE / SCALE / SHEET N OF N. */
export function TitleBlock({
  title,
  drawnBy = 'KNOT YOUR KIND, LLC',
  drawnByLabel = 'Drawn by:',
  date = 'MARCH 14, 2024',
  scale = '1:1',
  sheet = '1 OF 9',
  style,
}) {
  return (
    <div
      style={{
        border: 'var(--line-w-hair) solid var(--line-standard)',
        backgroundColor: 'var(--surface-cell)',
        fontFamily: 'var(--font-drafting)',
        display: 'inline-block',
        minWidth: '340px',
        ...style,
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ ...tbCell(true), borderLeft: 'none' }}>
          <span style={tbLabel}>Title:</span>
          <span style={{ ...tbValue, fontSize: 'var(--text-label)' }}>{title}</span>
        </div>
        <div style={tbCell(false)}>
          <span style={tbLabel}>Scale:</span>
          <span style={tbValue}>{scale}</span>
        </div>
      </div>
      <div style={{ display: 'flex', borderTop: 'var(--line-w-hair) solid var(--line-standard)' }}>
        <div style={{ ...tbCell(true), borderLeft: 'none' }}>
          <span style={tbLabel}>{drawnByLabel}</span>
          <span style={tbValue}>{drawnBy}</span>
        </div>
        <div style={tbCell(false)}>
          <span style={tbLabel}>Date:</span>
          <span style={tbValue}>{date}</span>
        </div>
        <div style={tbCell(false)}>
          <span style={tbLabel}>Sheet:</span>
          <span style={tbValue}>{sheet}</span>
        </div>
      </div>
    </div>
  );
}
