const React = window.React;

/** 1:1 promo, no frame. Soft black vignette fades into the page field. */
function PromoReel() {
  return (
    <section id="reel" className="kyk-reel" aria-label="Promo reel">
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
      <div className="kyk-reel-vignette" aria-hidden="true"></div>
      <div className="kyk-media-fade" aria-hidden="true"></div>
    </section>
  );
}

Object.assign(window, { PromoReel });
