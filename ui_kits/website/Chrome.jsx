const React = window.React;

function NavLink({ href, children, onNavigate }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    function sync() {
      setActive(window.location.hash === href);
    }
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [href]);

  return (
    <a
      href={href}
      className={'kyk-nav-link' + (active ? ' is-active' : '')}
      onClick={onNavigate}
    >
      {children}
    </a>
  );
}

function NavToggle({ open, onClick }) {
  return (
    <button
      type="button"
      className="kyk-nav-toggle"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onClick}
    >
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
        <line x1="0" y1="1" x2="22" y2="1" stroke="var(--graphite-1)" strokeWidth="2" />
        <line x1="0" y1="8" x2="22" y2="8" stroke="var(--graphite-1)" strokeWidth="2" />
        <line x1="0" y1="15" x2="22" y2="15" stroke="var(--graphite-1)" strokeWidth="2" />
      </svg>
    </button>
  );
}

function SiteNav() {
  const [open, setOpen] = React.useState(false);
  const navRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav
      ref={navRef}
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
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', minWidth: 0, flex: 'none' }}
        onClick={close}
      >
        <img
          className="kyk-nonagram"
          src="/assets/favicon.svg"
          alt=""
          width={34}
          height={34}
          decoding="async"
          style={{ width: 34, height: 34, display: 'block', objectFit: 'contain', flex: 'none' }}
        />
        <img src="/assets/nav-logotype.png" alt="Knot Your Kind — A Slipknot Experience" width={1569} height={481} decoding="async" style={{ height: 34, width: 'auto', display: 'block', objectFit: 'contain' }} />
      </a>
      <span style={{ flex: 1, minWidth: 8 }}></span>
      <NavToggle open={open} onClick={() => setOpen((o) => !o)} />
      <div className={'kyk-nav-links' + (open ? ' kyk-nav-links-open' : '')}>
        <NavLink href="#about" onNavigate={close}>About</NavLink>
        <NavLink href="#tribal-s" onNavigate={close}>Tribal S</NavLink>
        <NavLink href="#the-one" onNavigate={close}>Members</NavLink>
        <NavLink href="#join" onNavigate={close}>Join</NavLink>
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
        <p className="kyk-footer-copy kyk-caps">© 2024 KNOT YOUR KIND, LLC. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteNav, SiteFooter, NavLink });
