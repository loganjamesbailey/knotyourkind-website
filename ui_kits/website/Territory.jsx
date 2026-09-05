const React = window.React;

/** Full-bleed Iowa still. Type sits on a heavy black scrim — no second wordmark. */
function Territory() {
  return (
    <section id="territory" className="kyk-bleed-photo" aria-label="Iowa field">
      <img
        className="kyk-bleed-photo-img"
        src="/assets/james-site/iowa-winter-farm-silos.jpg"
        alt=""
        width={2000}
        height={1333}
        loading="lazy"
        decoding="async"
      />
      <div className="kyk-bleed-scrim" aria-hidden="true"></div>
      <div className="kyk-media-fade" aria-hidden="true"></div>
      <div className="kyk-bleed-copy">
        <p className="kyk-caps kyk-media-label">Field note — Iowa</p>
        <h2 className="kyk-h1">Built on this ground.</h2>
        <p className="kyk-caps-wide kyk-bleed-tag">A Slipknot Experience</p>
      </div>
    </section>
  );
}

Object.assign(window, { Territory });
