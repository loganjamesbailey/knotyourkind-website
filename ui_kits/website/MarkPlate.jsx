const React = window.React;

/** Single statement plate. Wordmark is already in the art — do not overlay another. */
function MarkPlate() {
  return (
    <section id="mark" className="kyk-slab-black" style={{ padding: '0 var(--space-5) var(--space-5)' }}>
      <figure className="kyk-statement-plate">
        <p className="kyk-caps kyk-media-label">Plate — Crow / Bars</p>
        <img
          src="/assets/james-site/crow-red-eyes-bars.jpg"
          alt="Knot Your Kind — A Slipknot Experience"
          width={1600}
          height={1600}
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  );
}

Object.assign(window, { MarkPlate });
