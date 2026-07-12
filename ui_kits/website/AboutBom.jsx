const React = window.React;

function SectionTitle({ label, title }) {
  return (
    <header className="kyk-section-title" style={{ marginBottom: 'var(--space-4)' }}>
      <p className="kyk-caps" style={{ margin: 0, fontSize: 'var(--text-dim)', color: 'var(--text-annotation)' }}>{label}</p>
      <h2 style={{ margin: '4px 0 0', fontFamily: 'var(--font-title)', fontWeight: 500, fontSize: 'var(--text-title-sm)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-title)' }}>{title}</h2>
    </header>
  );
}

function AboutBom() {
  const { SheetFrame, TitleBlock, RevisionTable, NotesList } = window.KnotYourKindDesignSystem_e3a90c;
  return (
    <section id="about" style={{ padding: '0 var(--space-5) var(--space-5)' }}>
      <SheetFrame>
        <SectionTitle label="Section A–A" title="We Are Knot Your Kind" />
        <div className="kyk-about-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
          <div style={{ minWidth: 0, maxWidth: '100%' }}>
            <p className="kyk-caps" style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-dim)', color: 'var(--text-title)' }}>Bill of Materials — Assembly, Rev B</p>
            <div className="kyk-table-scroll">
              <RevisionTable
                columns={['ITEM', 'QTY', 'DESCRIPTION', 'SPEC']}
                rows={[
                  ['1', '1', 'MEMBER, MASKED (#8)', 'SOLE REMAINING'],
                  ['2', '8', 'MEMBERS, FORMER', 'REMOVED PER ECO-009'],
                  ['3', '1', 'MASK, HAUNTING', 'INSTALLED'],
                  ['4', 'A/R', 'GUITARS, DOWN-TUNED', 'DROP TUNING'],
                  ['5', 'A/R', 'PERCUSSION, HEAVY', 'INCL. KEG'],
                  ['6', '1', 'VOCALS', 'MELODIC TO PRIMAL'],
                  ['7', 'A/R', 'CHAOS', 'REF. ONLY — DO NOT DIMENSION'],
                ]}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', minWidth: 0 }}>
            <NotesList
              className="kyk-notes"
              notes={[
                'BAND TO BE PERFORMED LIVE.',
                'FULL STAGE SHOW, BUILT TO HIT THE WAY A SLIPKNOT SHOW IS SUPPOSED TO HIT.',
                'BOOKED THROUGH LEFT LANE COLLECTIVE FOR FESTIVALS, VENUES, AND PRIVATE EVENTS.',
              ]}
            />
            <TitleBlock title="ASSEMBLY, REV B" scale="NTS" sheet="2 OF 9" style={{ alignSelf: 'flex-end' }} />
          </div>
        </div>
      </SheetFrame>
    </section>
  );
}

Object.assign(window, { AboutBom, SectionTitle });
