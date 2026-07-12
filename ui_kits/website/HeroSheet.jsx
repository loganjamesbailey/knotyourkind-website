const React = window.React;

function VDim({ value, height = 200, side = 'left' }) {
  return (
    <div className="kyk-vdim" style={{ position: 'relative', width: 30, height, flex: 'none' }}>
      <span
        className="kyk-caps"
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          fontSize: 'var(--text-dim)', background: 'var(--surface-sheet)',
          padding: '0 6px', zIndex: 1, whiteSpace: 'nowrap',
        }}
      >
        {value}
      </span>
      <svg width="30" height={height} style={{ position: 'absolute', inset: 0 }}>
        <line x1="15" y1="4" x2="15" y2={height - 4} stroke="var(--line-standard)" strokeWidth="1"></line>
        <line x1="8" y1="1" x2="22" y2="1" stroke="var(--line-standard)" strokeWidth="1"></line>
        <line x1="8" y1={height - 1} x2="22" y2={height - 1} stroke="var(--line-standard)" strokeWidth="1"></line>
        <polygon points="15,2 12,11 18,11" fill="var(--line-standard)"></polygon>
        <polygon points={`15,${height - 2} 12,${height - 11} 18,${height - 11}`} fill="var(--line-standard)"></polygon>
      </svg>
    </div>
  );
}

function HeroSheet() {
  const { SheetFrame, TitleBlock, Stamp, NotesList, Dimension, Callout } = window.KnotYourKindDesignSystem_e3a90c;
  const gridBg = {
    backgroundImage:
      'linear-gradient(var(--line-construction) 1px, transparent 1px), linear-gradient(90deg, var(--line-construction) 1px, transparent 1px)',
    backgroundSize: '56px 56px',
  };
  return (
    <section id="home" style={{ padding: 'var(--space-5)' }}>
      <SheetFrame padding="var(--space-6)">
        <div style={{ position: 'relative', overflow: 'visible' }}>
          <Stamp
            size="xl"
            angle={-11}
            className="kyk-stamp-hero"
            style={{
              position: 'absolute',
              top: 72,
              right: '4%',
              zIndex: 30,
              pointerEvents: 'none',
            }}
          >
            Experience the (sic)ness
          </Stamp>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="kyk-hero-art" style={{ width: 'min(760px, 100%)', maxWidth: '100%' }}>
              <div className="kyk-hide-mobile" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 8 }}>
                <Callout label={'LETTERING STYLE:\nCUSTOM / HAND-DRAWN'} lineLength={52} />
              </div>
              <div style={{ padding: '0 8px' }}>
                <Dimension value="10.50" width="100%" />
              </div>
              <div style={{ display: 'flex', alignItems: 'stretch', marginTop: 8, maxWidth: '100%' }}>
                <VDim value="2.75" height={210} side="left" />
                <div style={{ flex: 1, minWidth: 0, position: 'relative', ...gridBg, backgroundPosition: 'center' }}>
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.35, ...gridBg }}></div>
                  <img
                    src="/assets/logotype_sketch.png"
                    alt="Knot Your Kind — hand-drawn logotype, dimensioned"
                    style={{ width: '100%', height: 210, objectFit: 'contain', display: 'block', position: 'relative', mixBlendMode: 'multiply' }}
                  />
                </div>
                <VDim value="2.85" height={210} side="right" />
              </div>

              <div className="kyk-lockup" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
                <span className="kyk-caps-wide" style={{ fontSize: 22, color: 'var(--text-body)' }}>The</span>
                <div style={{ maxWidth: '100%' }}>
                  <img src="/assets/slipknot_sketch.png" alt="Slipknot — hand-drawn" style={{ height: 58, maxWidth: '100%', display: 'block', mixBlendMode: 'multiply', margin: '0 auto' }} />
                  <Dimension value="2.65" width="100%" style={{ marginTop: 4 }} />
                </div>
                <span className="kyk-caps-wide" style={{ fontSize: 22, color: 'var(--text-body)' }}>Experience</span>
              </div>
              <p className="kyk-caps" style={{ margin: '18px 0 0', fontSize: 'var(--text-dim)', color: 'var(--text-annotation)', textAlign: 'center' }}>
                This is not a tribute. This is a resurrection.
              </p>
            </div>
          </div>

          <div className="kyk-hero-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'var(--space-6)', gap: 24, flexWrap: 'wrap' }}>
            <NotesList
              className="kyk-notes"
              notes={[
                'ALL LETTERS DRAWN WITH CONSISTENT STROKE WEIGHT.',
                'MAINTAIN ROUGH, JAGGED EDGE CHARACTER.',
                'CENTER ALL ELEMENTS ON VERTICAL AXIS.',
              ]}
            />
            <div>
              <p className="kyk-caps" style={{ margin: 0, fontSize: 'var(--text-dim)', textDecoration: 'underline', textUnderlineOffset: '3px', color: 'var(--text-title)' }}>Material:</p>
              <p className="kyk-caps" style={{ margin: '6px 0 0', fontSize: 'var(--text-dim)', color: 'var(--text-body)' }}>Graphite on<br />drafting paper</p>
            </div>
            <TitleBlock title="LOGOTYPE, HAND-DRAWN" drawnBy="J. BAILEY" drawnByLabel="Owned by:" scale="1:1" sheet="1 OF 9" />
          </div>
        </div>
      </SheetFrame>
    </section>
  );
}

Object.assign(window, { HeroSheet, VDim });
