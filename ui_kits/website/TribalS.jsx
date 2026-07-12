const React = window.React;

function TribalS() {
  const { SheetFrame, TitleBlock, NotesList, Callout, Dimension } = window.KnotYourKindDesignSystem_e3a90c;
  return (
    <section id="tribal-s" style={{ padding: '0 var(--space-5) var(--space-5)' }}>
      <SheetFrame>
        <window.SectionTitle label="Detail Drawing" title="Tribal S Logo" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
          {/* Subject with dimensions */}
          <div style={{ flex: 'none' }}>
            <div style={{ padding: '0 20px' }}>
              <Dimension value="1.750" width="180px" style={{ margin: '0 auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'stretch', marginTop: 6 }}>
              <window.VDim value="7.000" height={420} />
              <img
                src="/assets/tribal_s_sketch.png"
                alt="Tribal S — dimensioned fabrication drawing"
                style={{ height: 420, display: 'block', mixBlendMode: 'multiply' }}
              />
              {/* radius callouts */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '30px 0 40px', marginLeft: -6 }}>
                <Callout label="R.625" lineLength={44} />
                <Callout label={'R.250'} lineLength={58} />
                <Callout label={'R.125\nTYP.'} lineLength={40} />
                <Callout label="R.750" lineLength={62} />
                <Callout label="R.1875" lineLength={46} />
              </div>
            </div>
            <p className="kyk-caps" style={{ margin: '8px 0 0 30px', fontSize: 'var(--text-dim)', color: 'var(--text-body)' }}>15° TYP. · .125 THICKNESS</p>
          </div>
          {/* Notes + tolerances */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', flex: '1 1 260px', minWidth: 240 }}>
            <NotesList notes={[
              'ALL DIMENSIONS ARE IN INCHES.',
              'ALL CORNERS AND EDGES TO BE SHARP.',
            ]} />
            <div>
              <p className="kyk-caps" style={{ margin: 0, fontSize: 'var(--text-dim)', textDecoration: 'underline', textUnderlineOffset: '3px', color: 'var(--text-title)' }}>Tolerances:</p>
              <table style={{ marginTop: 8, borderCollapse: 'collapse', fontSize: 'var(--text-dim)', textTransform: 'uppercase', color: 'var(--text-body)' }}>
                <tbody>
                  <tr><td style={{ padding: '2px 18px 2px 0' }}>.X</td><td>= ±.1</td></tr>
                  <tr><td style={{ padding: '2px 18px 2px 0' }}>.XX</td><td>= ±.01</td></tr>
                  <tr><td style={{ padding: '2px 18px 2px 0' }}>.XXX</td><td>= ±.005</td></tr>
                </tbody>
              </table>
            </div>
            <TitleBlock title="TRIBAL S LOGO" drawnBy="PROPERTY OF SLIPKNOT" date="UNDETERMINED" scale="2:1" sheet="3 OF 9" style={{ marginTop: 'auto', alignSelf: 'flex-end' }} />
          </div>
        </div>
      </SheetFrame>
    </section>
  );
}

Object.assign(window, { TribalS });
