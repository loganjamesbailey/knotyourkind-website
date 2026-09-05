const React = window.React;

/** Opening hero: ultrawide bumper letterboxed so the full wordmark + glow stay visible. */
function HeroBumper() {
  return (
    <section id="home" className="kyk-hero-bumper" aria-label="Knot Your Kind bumper">
      <video
        className="kyk-hero-bumper-video"
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        <source src="/media/kyk-logo-bumper-neon-glitch-ultrawide.mp4" type="video/mp4" />
      </video>
      <div className="kyk-media-fade" aria-hidden="true"></div>
    </section>
  );
}

Object.assign(window, { HeroBumper });
