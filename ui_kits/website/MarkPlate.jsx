const React = window.React;

/** Full-bleed square still on black. No SheetFrame, no fade, no cover crop. */
function MarkPlate() {
  return (
    <section id="mark" className="kyk-mark-plate" aria-label="Crow plate">
      <img
        className="kyk-mark-plate-img"
        src="/assets/james-site/crow-red-eyes-bars.jpg"
        alt="Knot Your Kind — A Slipknot Experience"
        width={1408}
        height={1408}
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}

Object.assign(window, { MarkPlate });
