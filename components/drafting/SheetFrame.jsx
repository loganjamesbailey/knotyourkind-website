const React = window.React;

/** A black sheet with faint grain and a double-ruled drawing frame. Radius 0. */
export function SheetFrame({ children, padding = 'var(--space-5)', style, className }) {
  return (
    <div
      className={'kyk-paper ' + (className || '')}
      style={{
        position: 'relative',
        backgroundColor: 'var(--surface-sheet)',
        boxShadow: 'var(--shadow-sheet)',
        padding: 'calc(var(--sheet-margin) + var(--sheet-border-gap))',
        ...style,
      }}
    >
      <div
        style={{
          border: 'var(--line-w-hair) solid var(--line-standard)',
          outline: 'var(--line-w-hair) solid var(--line-standard)',
          outlineOffset: 'var(--sheet-border-gap)',
          padding: padding,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
