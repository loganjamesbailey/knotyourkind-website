const React = window.React;

/* X-ray skeleton overlay — visible adamantium-style frame under mask + suit. */
function EndoskeletonOverlay() {
  const bone = { stroke: 'var(--graphite-1)', strokeWidth: 2.2, fill: 'none', strokeLinecap: 'round', opacity: 0.8 };
  const fine = { stroke: 'var(--graphite-1)', strokeWidth: 1.4, fill: 'none', strokeLinecap: 'round', opacity: 0.7 };
  const ribs = [];
  for (let k = 0; k < 6; k++) {
    const y = 545 + k * 44;
    const spread = 150 - k * 8;
    ribs.push(<path key={'l' + k} d={`M 405 ${y} C ${405 - spread * 0.8} ${y - 26}, ${405 - spread} ${y + 4}, ${405 - spread + 18} ${y + 30}`} {...bone} />);
    ribs.push(<path key={'r' + k} d={`M 415 ${y - 4} C ${415 + spread * 0.8} ${y - 30}, ${415 + spread} ${y}, ${415 + spread - 18} ${y + 26}`} {...bone} />);
  }
  const vertebrae = [];
  for (let k = 0; k < 11; k++) {
    const y = 400 + k * 45;
    vertebrae.push(<rect key={'v' + k} x={396} y={y} width={22} height={26} rx={0} {...fine} />);
  }
  return (
    <svg viewBox="0 0 900 900" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
      <ellipse cx="365" cy="200" rx="112" ry="138" {...bone} />
      <ellipse cx="322" cy="205" rx="26" ry="20" {...fine} />
      <ellipse cx="408" cy="205" rx="26" ry="20" {...fine} />
      <path d="M 358 235 L 372 235 L 365 262 Z" {...fine} />
      <path d="M 305 300 Q 365 330 425 300" {...bone} />
      <path d="M 312 312 L 312 296 M 330 320 L 330 302 M 348 326 L 348 306 M 366 328 L 366 308 M 384 326 L 384 306 M 402 320 L 402 302 M 418 312 L 418 296" {...fine} />
      <path d="M 300 268 Q 365 356 430 268" {...bone} />
      {vertebrae}
      <path d="M 405 470 Q 290 452 172 502" {...bone} />
      <path d="M 415 470 Q 530 448 648 486" {...bone} />
      <circle cx="168" cy="512" r="24" {...bone} />
      <circle cx="652" cy="496" r="24" {...bone} />
      <line x1="408" y1="500" x2="410" y2="640" {...bone} />
      {ribs}
      <path d="M 158 534 C 130 620, 108 700, 88 788" {...bone} />
      <path d="M 182 536 C 156 622, 136 702, 118 792" {...fine} />
      <circle cx="100" cy="800" r="16" {...fine} />
      <path d="M 662 518 C 700 600, 740 680, 782 756" {...bone} />
      <path d="M 640 522 C 676 604, 714 684, 756 764" {...fine} />
      <circle cx="772" cy="770" r="16" {...fine} />
      <path d="M 320 862 Q 408 828 500 858" {...bone} />
    </svg>
  );
}

function SoleMember() {
  const { SheetFrame, TitleBlock, NotesList, Stamp, Dimension, Callout } = window.KnotYourKindDesignSystem_e3a90c;
  return (
    <section id="the-one" style={{ padding: '0 var(--space-5) var(--space-5)' }}>
      <SheetFrame>
        <window.SectionTitle label="Section View — Internal Structure Shown Hidden" title="Part #8, Frame Assembly" />
        <div className="kyk-drawing-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
          <div className="kyk-subject" style={{ flex: '1 1 240px', minWidth: 0, maxWidth: '100%' }}>
            <div className="kyk-drawing-row" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap', maxWidth: '100%' }}>
              <window.VDim value="6 FT 0 IN" height={380} />
              <div className="kyk-subject-figure" style={{ position: 'relative', width: '100%', maxWidth: 380, aspectRatio: '1', margin: '0 auto' }}>
                <img
                  src="/assets/member_8_blueprint.png"
                  alt="Part #8 — mask and suit over metal endoskeleton, hidden lines"
                  width={380}
                  height={380}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }}
                />
                <EndoskeletonOverlay />
              </div>
              <div className="kyk-callouts-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '26px 0 60px' }}>
                <Callout label={'MASK ASSY\nINSTALLED'} lineLength={46} />
                <Callout label={'ENDOSKELETON, METAL\nSHOWN HIDDEN (DASHED)'} lineLength={58} />
                <Callout label={'SUIT, COVERALLS\nOVER FRAME'} lineLength={42} />
              </div>
            </div>
            <div style={{ width: '100%', maxWidth: 380, margin: '0 auto' }}>
              <Dimension value="QTY: 1" width="100%" style={{ marginTop: 6 }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', flex: '1 1 220px', minWidth: 0 }}>
            <Stamp angle={-6}>No Organic Components</Stamp>
            <NotesList
              className="kyk-notes"
              notes={[
                'EXTERIOR: MASK AND SUIT ONLY.',
                'NO SKIN. NO MUSCLE. FRAME ONLY.',
                'INTERNAL STRUCTURE: METAL ENDOSKELETON, SHOWN AS HIDDEN LINES.',
                'PARTS #0 THRU #7 REMOVED PER ECO-009. DO NOT REINSTALL.',
                'DO NOT OPERATE UNMASKED.',
              ]}
            />
            <TitleBlock title="PART #8, FRAME ASSY" scale="1:8" sheet="4 OF 9" style={{ marginTop: 'auto', alignSelf: 'flex-end' }} />
          </div>
        </div>
      </SheetFrame>
    </section>
  );
}

Object.assign(window, { SoleMember });
