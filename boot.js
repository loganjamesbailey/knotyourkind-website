(function () {
  function fail(msg) {
    var root = document.getElementById('root');
    if (!root) return;
    root.textContent = '';
    var main = document.createElement('main');
    main.style.cssText =
      'max-width:40rem;margin:3rem auto;padding:1.5rem;font-family:monospace;text-transform:uppercase;color:#2c2b28;';
    var h1 = document.createElement('h1');
    h1.textContent = 'Knot Your Kind';
    var p = document.createElement('p');
    p.textContent = msg || 'Sheet failed to load. Refresh the page.';
    main.appendChild(h1);
    main.appendChild(p);
    root.appendChild(main);
  }

  function ready() {
    var ds = window.KnotYourKindDesignSystem_e3a90c;
    var need = [
      window.React,
      window.ReactDOM,
      ds,
      window.SiteNav,
      window.SiteFooter,
      window.HeroSheet,
      window.AboutBom,
      window.TribalS,
      window.SoleMember,
    ];
    for (var i = 0; i < need.length; i++) {
      if (!need[i]) {
        fail('Sheet failed to load. Refresh the page.');
        return;
      }
    }
    if (ds.__errors && ds.__errors.length) {
      fail('Drawing assembly errors. Refresh the page.');
      return;
    }

    var e = window.React.createElement;
    function Site() {
      return e(
        'div',
        { className: 'kyk-site' },
        e(window.SiteNav),
        e(window.HeroSheet),
        e(window.AboutBom),
        e(window.TribalS),
        e(window.SoleMember),
        e(window.SiteFooter)
      );
    }
    window.ReactDOM.createRoot(document.getElementById('root')).render(e(Site));
  }

  // defer scripts run in order; this file is last
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
