const React = window.React;

/**
 * The nonagram: nine-point star {9/4}, uniform line weight, optional dashed
 * construction circle + center marks. Drawn geometrically per the reference
 * drawing spec (9 points, symmetric, Ø = size).
 */
export function Nonagram({ size = 200, weight = 'hair', showConstruction = true, style }) {
  const r = size / 2 - 2;
  const cx = size / 2;
  const cy = size / 2;
  const pts = [];
  for (let i = 0; i < 9; i++) {
    const a = (-90 + i * 40) * (Math.PI / 180);
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  const order = [0, 4, 8, 3, 7, 2, 6, 1, 5];
  const path = order.map((p, i) => (i === 0 ? 'M' : 'L') + pts[p][0].toFixed(2) + ' ' + pts[p][1].toFixed(2)).join(' ') + ' Z';
  const sw = weight === 'subject' ? 'var(--line-w-subject)' : 'var(--line-w-hair)';
  const stroke = weight === 'subject' ? 'var(--line-subject)' : 'var(--line-standard)';
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', ...style }}>
      {showConstruction && (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--line-construction)" strokeWidth="1" strokeDasharray="5 4" />
          <line x1={cx} y1={2} x2={cx} y2={size - 2} stroke="var(--line-construction)" strokeWidth="1" strokeDasharray="14 4 3 4" />
          <line x1={2} y1={cy} x2={size - 2} y2={cy} stroke="var(--line-construction)" strokeWidth="1" strokeDasharray="14 4 3 4" />
          <circle cx={cx} cy={cy} r="1.5" fill="var(--line-standard)" />
        </g>
      )}
      <path d={path} fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="miter" />
    </svg>
  );
}
