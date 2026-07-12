const React = window.React;

function NavLink({ href, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: 'var(--text-dim)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        textDecoration: hover ? 'underline' : 'none',
        textUnderlineOffset: '4px',
        color: hover ? 'var(--text-title)' : 'var(--text-body)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </a>
  );
}

function SiteNav() {
  const { Nonagram } = window.KnotYourKindDesignSystem_e3a90c;
  return (
    <nav
      className="kyk-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--surface-sheet)',
        borderBottom: 'var(--line-w-hair) solid var(--line-standard)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        padding: '10px var(--space-5)',
      }}
    >
      <a
        href="#home"
        className="kyk-nav-brand"
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', minWidth: 0 }}
      >
        <span className="kyk-nonagram" style={{ display: 'inline-flex', flex: 'none' }}>
          <Nonagram size={34} showConstruction={false} />
        </span>
        <img src="/assets/logotype_graphite.png" alt="Knot Your Kind" width={200} height={26} decoding="async" style={{ height: 26, display: 'block' }} />
      </a>
      <span style={{ flex: 1, minWidth: 8 }}></span>
      <div className="kyk-nav-links">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#tribal-s">Tribal S</NavLink>
        <NavLink href="#the-one">The One</NavLink>
      </div>
    </nav>
  );
}

function SiteFooter() {
  const { TitleBlock } = window.KnotYourKindDesignSystem_e3a90c;
  return (
    <footer style={{ padding: '0 var(--space-5) var(--space-5)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
        <TitleBlock
          title="WEAREKNOTYOURKIND.COM"
          drawnBy="KNOT YOUR KIND, LLC"
          date="MARCH 14, 2024"
          scale="NTS"
          sheet="1 OF 9"
        />
        <p style={{ margin: 0, fontSize: 10, textTransform: 'uppercase', color: 'var(--text-annotation)', paddingBottom: 8 }}>
          All rights reserved Knot Your Kind, LLC.
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteNav, SiteFooter, NavLink });
