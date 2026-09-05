const React = window.React;

/** Crow-bars statement, full-bleed like territory. Wordmark is in the art — no overlay, no frame. */
function MarkPlate() {
  return (
    <section id="mark" className="kyk-bleed-photo kyk-bleed-mark" aria-label="Crow plate">
      <img
        className="kyk-bleed-photo-img"
        src="/assets/james-site/crow-red-eyes-bars.jpg"
        alt="Knot Your Kind — A Slipknot Experience"
        width={1600}
        height={1600}
        loading="lazy"
        decoding="async"
      />
      <div className="kyk-media-fade" aria-hidden="true"></div>
    </section>
  );
}

Object.assign(window, { MarkPlate });
