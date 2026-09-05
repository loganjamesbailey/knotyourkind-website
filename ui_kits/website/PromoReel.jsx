const React = window.React;

/** Contained 1:1 promo. One motion hit — not a hero wallpaper. */
function PromoReel() {
  return (
    <section id="reel" className="kyk-slab-black" style={{ padding: '0 var(--space-5) var(--space-5)' }}>
      <div className="kyk-promo-frame">
        <p className="kyk-caps kyk-media-label">Reel — 30s</p>
        <video
          className="kyk-promo-video"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-label="Knot Your Kind promo"
        >
          <source src="/media/kyk-promo-clip-2026-09-05.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

Object.assign(window, { PromoReel });
