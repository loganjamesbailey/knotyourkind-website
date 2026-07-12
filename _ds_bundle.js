/* @ds-bundle: {"format":4,"namespace":"KnotYourKindDesignSystem_e3a90c","components":[{"name":"Callout","sourcePath":"components/drafting/Callout.jsx"},{"name":"Dimension","sourcePath":"components/drafting/Dimension.jsx"},{"name":"Nonagram","sourcePath":"components/drafting/Nonagram.jsx"},{"name":"NotesList","sourcePath":"components/drafting/NotesList.jsx"},{"name":"RevisionTable","sourcePath":"components/drafting/RevisionTable.jsx"},{"name":"SheetFrame","sourcePath":"components/drafting/SheetFrame.jsx"},{"name":"Stamp","sourcePath":"components/drafting/Stamp.jsx"},{"name":"TitleBlock","sourcePath":"components/drafting/TitleBlock.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"components/drafting/Callout.jsx":"2c20aedf514b","components/drafting/Dimension.jsx":"e9963e33c4f5","components/drafting/Nonagram.jsx":"2a4338a3d17c","components/drafting/NotesList.jsx":"fb99d25e1e94","components/drafting/RevisionTable.jsx":"3f024e216914","components/drafting/SheetFrame.jsx":"2051141dbbdb","components/drafting/Stamp.jsx":"81a1c9ee0332","components/drafting/TitleBlock.jsx":"22ccc14ebeef","components/forms/Button.jsx":"dae5c67f15f1","components/forms/Field.jsx":"2ca4bfed186a","ui_kits/website/AboutBom.jsx":"78fa782f197b","ui_kits/website/Chrome.jsx":"b151b39fb57b","ui_kits/website/HeroSheet.jsx":"5f07845f79de","ui_kits/website/SoleMember.jsx":"4c8c677fde21","ui_kits/website/TribalS.jsx":"1e6b65c4f553"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KnotYourKindDesignSystem_e3a90c = window.KnotYourKindDesignSystem_e3a90c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/drafting/Callout.jsx
try { (() => {
const React = window.React;

/** Leader line with arrowhead pointing at the subject, label at the tail. */
function Callout({
  label,
  lineLength = 48,
  rise = 10,
  style
}) {
  const w = lineLength;
  const h = Math.max(rise + 4, 12);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '6px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block',
      marginTop: '4px',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: `0,${h - 1} 9,${h - 4} 7,${h + 1}`,
    fill: "var(--line-standard)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: h - 2,
    x2: w * 0.55,
    y2: 4,
    stroke: "var(--line-standard)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: w * 0.55,
    y1: 4,
    x2: w,
    y2: 4,
    stroke: "var(--line-standard)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-drafting)',
      fontSize: 'var(--text-dim)',
      letterSpacing: 'var(--tracking-drafting)',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      lineHeight: 1.35,
      whiteSpace: 'pre-line'
    }
  }, label));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/Callout.jsx", error: String((e && e.message) || e) }); }

// components/drafting/Dimension.jsx
try { (() => {
const React = window.React;

/** Horizontal dimension line: extension ticks, arrowheads, value above. */
function Dimension({
  value,
  width = '100%',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height: '30px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 0,
      fontFamily: 'var(--font-drafting)',
      fontSize: 'var(--text-dim)',
      letterSpacing: 'var(--tracking-drafting)',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "12",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      display: 'block'
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "6",
    x2: "100%",
    y2: "6",
    stroke: "var(--line-standard)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '1px',
      height: '12px',
      background: 'var(--line-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '1px',
      height: '12px',
      background: 'var(--line-standard)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    style: {
      position: 'absolute',
      bottom: '2px',
      left: '1px'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0,4 10,1 10,7",
    fill: "var(--line-standard)"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    style: {
      position: 'absolute',
      bottom: '2px',
      right: '1px'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "10,4 0,1 0,7",
    fill: "var(--line-standard)"
  })));
}
Object.assign(__ds_scope, { Dimension });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/Dimension.jsx", error: String((e && e.message) || e) }); }

// components/drafting/Nonagram.jsx
try { (() => {
const React = window.React;

/**
 * The nonagram: nine-point star {9/4}, uniform line weight, optional dashed
 * construction circle + center marks. Drawn geometrically per the reference
 * drawing spec (9 points, symmetric, Ø = size).
 */
function Nonagram({
  size = 200,
  weight = 'hair',
  showConstruction = true,
  style
}) {
  const r = size / 2 - 2;
  const cx = size / 2;
  const cy = size / 2;
  const pts = [];
  for (let i = 0; i < 9; i++) {
    const a = (-90 + i * 40) * (Math.PI / 180);
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  const order = [0, 4, 8, 3, 7, 2, 6, 1, 5];
  const path = order.map((p, i) => (i === 0 ? 'M' : 'L') + pts[p][0].toFixed(2) + ' ' + pts[p][1].toFixed(2)).join(' ') + ' Z';
  const sw = weight === 'subject' ? 'var(--line-w-subject)' : 'var(--line-w-hair)';
  const stroke = weight === 'subject' ? 'var(--line-subject)' : 'var(--line-standard)';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      display: 'block',
      ...style
    }
  }, showConstruction && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: "var(--line-construction)",
    strokeWidth: "1",
    strokeDasharray: "5 4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: 2,
    x2: cx,
    y2: size - 2,
    stroke: "var(--line-construction)",
    strokeWidth: "1",
    strokeDasharray: "14 4 3 4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: 2,
    y1: cy,
    x2: size - 2,
    y2: cy,
    stroke: "var(--line-construction)",
    strokeWidth: "1",
    strokeDasharray: "14 4 3 4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "1.5",
    fill: "var(--line-standard)"
  })), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: stroke,
    strokeWidth: sw,
    strokeLinejoin: "miter"
  }));
}
Object.assign(__ds_scope, { Nonagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/Nonagram.jsx", error: String((e && e.message) || e) }); }

// components/drafting/NotesList.jsx
try { (() => {
const React = window.React;

/** Numbered NOTES section, drafting style. */
function NotesList({
  title = 'NOTES:',
  notes = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-drafting)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-note)',
      letterSpacing: 'var(--tracking-drafting)',
      textTransform: 'uppercase',
      color: 'var(--text-title)',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      marginBottom: 'var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: '22px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, notes.map((n, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 'var(--text-dim)',
      letterSpacing: 'var(--tracking-drafting)',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-note)'
    }
  }, n))));
}
Object.assign(__ds_scope, { NotesList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/NotesList.jsx", error: String((e && e.message) || e) }); }

// components/drafting/RevisionTable.jsx
try { (() => {
const React = window.React;
const rtCell = {
  padding: '8px 12px',
  borderTop: 'var(--line-w-hair) solid var(--line-standard)',
  borderLeft: 'var(--line-w-hair) solid var(--line-standard)',
  fontSize: 'var(--text-dim)',
  letterSpacing: 'var(--tracking-drafting)',
  textTransform: 'uppercase',
  color: 'var(--text-body)',
  textAlign: 'left',
  verticalAlign: 'top'
};

/** Revision-block table. Default columns: REV / DATE / DESCRIPTION / BY. */
function RevisionTable({
  columns = ['REV', 'DATE', 'DESCRIPTION', 'BY'],
  rows = [],
  onRowClick,
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      border: 'var(--line-w-hair) solid var(--line-standard)',
      fontFamily: 'var(--font-drafting)',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...rtCell,
      borderTop: 'none',
      borderLeft: i === 0 ? 'none' : rtCell.borderLeft,
      backgroundColor: 'var(--surface-cell)',
      color: 'var(--text-title)'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    onClick: onRowClick ? () => onRowClick(ri) : undefined,
    style: onRowClick ? {
      cursor: 'pointer'
    } : undefined,
    onMouseEnter: onRowClick ? e => {
      e.currentTarget.style.backgroundColor = 'var(--surface-cell)';
    } : undefined,
    onMouseLeave: onRowClick ? e => {
      e.currentTarget.style.backgroundColor = '';
    } : undefined
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      ...rtCell,
      borderLeft: ci === 0 ? 'none' : rtCell.borderLeft
    }
  }, cell))))));
}
Object.assign(__ds_scope, { RevisionTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/RevisionTable.jsx", error: String((e && e.message) || e) }); }

// components/drafting/SheetFrame.jsx
try { (() => {
const React = window.React;

/** A sheet of drafting paper with tooth and a double-ruled drawing frame. */
function SheetFrame({
  children,
  padding = 'var(--space-5)',
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'kyk-paper ' + (className || ''),
    style: {
      position: 'relative',
      backgroundColor: 'var(--surface-sheet)',
      boxShadow: 'var(--shadow-sheet)',
      padding: 'calc(var(--sheet-margin) + var(--sheet-border-gap))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--line-w-hair) solid var(--line-standard)',
      outline: 'var(--line-w-hair) solid var(--line-standard)',
      outlineOffset: 'var(--sheet-border-gap)',
      padding: padding,
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { SheetFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/SheetFrame.jsx", error: String((e && e.message) || e) }); }

// components/drafting/Stamp.jsx
try { (() => {
const React = window.React;

/** Angled rubber inspection stamp. The ONLY sanctioned use of red. */
function Stamp({
  children,
  color = 'red',
  angle = -8,
  size = 'md',
  style
}) {
  const c = color === 'red' ? 'var(--stamp-red-faded)' : 'var(--graphite-2)';
  const pad = size === 'lg' ? '10px 22px' : '5px 14px';
  const fs = size === 'lg' ? '20px' : '13px';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: `rotate(${angle}deg)`,
      border: `2px solid ${c}`,
      color: c,
      padding: pad,
      fontFamily: 'var(--font-drafting)',
      fontSize: fs,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      maskImage: 'var(--paper-tooth)',
      maskSize: '180px',
      WebkitMaskImage: 'var(--paper-tooth)',
      WebkitMaskSize: '180px',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/drafting/TitleBlock.jsx
try { (() => {
const React = window.React;
const tbCell = grow => ({
  padding: 'var(--cell-pad-y) var(--cell-pad-x)',
  borderLeft: 'var(--line-w-hair) solid var(--line-standard)',
  flex: grow ? 1 : 'none'
});
const tbLabel = {
  fontSize: '10px',
  letterSpacing: 'var(--tracking-drafting)',
  textTransform: 'uppercase',
  color: 'var(--text-annotation)',
  display: 'block'
};
const tbValue = {
  fontSize: 'var(--text-dim)',
  letterSpacing: 'var(--tracking-drafting)',
  textTransform: 'uppercase',
  color: 'var(--text-title)',
  display: 'block',
  marginTop: '2px',
  whiteSpace: 'nowrap'
};

/** The drawing title block. TITLE / DRAWN BY / DATE / SCALE / SHEET N OF N. */
function TitleBlock({
  title,
  drawnBy = 'KNOT YOUR KIND, LLC',
  drawnByLabel = 'Drawn by:',
  date = 'MARCH 14, 2024',
  scale = '1:1',
  sheet = '1 OF 9',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--line-w-hair) solid var(--line-standard)',
      backgroundColor: 'var(--surface-cell)',
      fontFamily: 'var(--font-drafting)',
      display: 'inline-block',
      minWidth: '340px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...tbCell(true),
      borderLeft: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tbLabel
  }, "Title:"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...tbValue,
      fontSize: 'var(--text-label)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: tbCell(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: tbLabel
  }, "Scale:"), /*#__PURE__*/React.createElement("span", {
    style: tbValue
  }, scale))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: 'var(--line-w-hair) solid var(--line-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...tbCell(true),
      borderLeft: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tbLabel
  }, drawnByLabel), /*#__PURE__*/React.createElement("span", {
    style: tbValue
  }, drawnBy)), /*#__PURE__*/React.createElement("div", {
    style: tbCell(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: tbLabel
  }, "Date:"), /*#__PURE__*/React.createElement("span", {
    style: tbValue
  }, date)), /*#__PURE__*/React.createElement("div", {
    style: tbCell(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: tbLabel
  }, "Sheet:"), /*#__PURE__*/React.createElement("span", {
    style: tbValue
  }, sheet))));
}
Object.assign(__ds_scope, { TitleBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drafting/TitleBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const React = window.React;

/** Drafting button: hairline border, letterspaced caps. Inverts to graphite on hover. */
function Button({
  children,
  variant = 'default',
  disabled,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const filled = variant === 'subject';
  const inverted = (hover || filled) && !disabled;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: 'var(--font-drafting)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '12px 28px',
      border: `${filled ? 'var(--line-w-subject)' : 'var(--line-w-hair)'} solid var(--line-subject)`,
      borderRadius: 'var(--radius-none)',
      backgroundColor: inverted ? press ? 'var(--graphite-1)' : 'var(--graphite-2)' : 'transparent',
      color: inverted ? 'var(--surface-sheet)' : 'var(--text-title)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background-color 120ms linear, color 120ms linear',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const React = window.React;

/** Labeled form field styled as a title-block cell. */
function Field({
  label,
  name,
  type = 'text',
  textarea,
  placeholder,
  required,
  rows = 4,
  value,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const inputStyle = {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-drafting)',
    fontSize: 'var(--text-label)',
    letterSpacing: 'var(--tracking-drafting)',
    textTransform: 'uppercase',
    color: 'var(--text-title)',
    padding: '6px var(--cell-pad-x) 10px',
    resize: 'vertical'
  };
  const control = textarea ? /*#__PURE__*/React.createElement("textarea", {
    name: name,
    placeholder: placeholder,
    required: required,
    rows: rows,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle
  }) : /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    required: required,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle
  });
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      border: `var(--line-w-hair) solid ${focus ? 'var(--line-subject)' : 'var(--line-standard)'}`,
      backgroundColor: 'var(--surface-cell)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      padding: 'var(--cell-pad-y) var(--cell-pad-x) 0',
      fontFamily: 'var(--font-drafting)',
      fontSize: '10px',
      letterSpacing: 'var(--tracking-drafting)',
      textTransform: 'uppercase',
      color: focus ? 'var(--text-title)' : 'var(--text-annotation)'
    }
  }, label), control);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutBom.jsx
try { (() => {
const React = window.React;
function SectionTitle({
  label,
  title
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "kyk-caps",
    style: {
      margin: 0,
      fontSize: 'var(--text-dim)',
      color: 'var(--text-annotation)'
    }
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-title)',
      fontWeight: 500,
      fontSize: 'var(--text-title-sm)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-title)'
    }
  }, title));
}
function AboutBom() {
  const {
    SheetFrame,
    TitleBlock,
    RevisionTable,
    NotesList
  } = window.KnotYourKindDesignSystem_e3a90c;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '0 var(--space-5) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SheetFrame, null, /*#__PURE__*/React.createElement(SectionTitle, {
    label: "Section A\u2013A",
    title: "We Are Knot Your Kind"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "kyk-caps",
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-dim)',
      color: 'var(--text-title)'
    }
  }, "Bill of Materials \u2014 Assembly, Rev B"), /*#__PURE__*/React.createElement(RevisionTable, {
    columns: ['ITEM', 'QTY', 'DESCRIPTION', 'SPEC'],
    rows: [['1', '1', 'MEMBER, MASKED (#8)', 'SOLE REMAINING'], ['2', '8', 'MEMBERS, FORMER', 'REMOVED PER ECO-009'], ['3', '1', 'MASK, HAUNTING', 'INSTALLED'], ['4', 'A/R', 'GUITARS, DOWN-TUNED', 'DROP TUNING'], ['5', 'A/R', 'PERCUSSION, HEAVY', 'INCL. KEG'], ['6', '1', 'VOCALS', 'MELODIC TO PRIMAL'], ['7', 'A/R', 'CHAOS', 'REF. ONLY — DO NOT DIMENSION']]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(NotesList, {
    notes: ['BAND TO BE PERFORMED LIVE.', 'FULL STAGE SHOW, BUILT TO HIT THE WAY A SLIPKNOT SHOW IS SUPPOSED TO HIT.', 'BOOKED THROUGH LEFT LANE COLLECTIVE FOR FESTIVALS, VENUES, AND PRIVATE EVENTS.']
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    title: "ASSEMBLY, REV B",
    scale: "NTS",
    sheet: "2 OF 9",
    style: {
      alignSelf: 'flex-end'
    }
  })))));
}
Object.assign(window, {
  AboutBom,
  SectionTitle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutBom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const React = window.React;
function NavLink({
  href,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: 'var(--text-dim)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '4px',
      color: hover ? 'var(--text-title)' : 'var(--text-body)'
    }
  }, children);
}
function SiteNav() {
  const {
    Button,
    Nonagram
  } = window.KnotYourKindDesignSystem_e3a90c;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--surface-sheet)',
      borderBottom: 'var(--line-w-hair) solid var(--line-standard)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '10px var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Nonagram, {
    size: 34,
    showConstruction: false
  }), /*#__PURE__*/React.createElement("img", {
    src: "/assets/logotype_graphite.png",
    alt: "Knot Your Kind",
    style: {
      height: 26,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(NavLink, {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement(NavLink, {
    href: "#tribal-s"
  }, "Tribal S"), /*#__PURE__*/React.createElement(NavLink, {
    href: "#the-one"
  }, "The One"), /*#__PURE__*/React.createElement(Button, {
    style: {
      padding: '8px 18px',
      fontSize: 'var(--text-dim)'
    },
    onClick: () => window.open('https://www.facebook.com/KnotYourKindTribute', '_blank')
  }, "Book Us"));
}
function SiteFooter() {
  const {
    TitleBlock
  } = window.KnotYourKindDesignSystem_e3a90c;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '0 var(--space-5) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TitleBlock, {
    title: "WEAREKNOTYOURKIND.COM",
    drawnBy: "KNOT YOUR KIND, LLC",
    date: "MARCH 14, 2024",
    scale: "NTS",
    sheet: "1 OF 9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    href: "https://www.facebook.com/KnotYourKindTribute"
  }, "Facebook"), /*#__PURE__*/React.createElement(NavLink, {
    href: "https://www.instagram.com/knotyourkindtribute"
  }, "Instagram"), /*#__PURE__*/React.createElement(NavLink, {
    href: "https://www.youtube.com/@knotyourkind"
  }, "YouTube"), /*#__PURE__*/React.createElement(NavLink, {
    href: "https://www.tiktok.com/@knotyourkind"
  }, "TikTok")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      textTransform: 'uppercase',
      color: 'var(--text-annotation)',
      paddingBottom: 8
    }
  }, "All rights reserved Knot Your Kind, LLC.")));
}
Object.assign(window, {
  SiteNav,
  SiteFooter,
  NavLink
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroSheet.jsx
try { (() => {
const React = window.React;
function VDim({
  value,
  height = 200,
  side = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 30,
      height,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kyk-caps",
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(-90deg)',
      fontSize: 'var(--text-dim)',
      background: 'var(--surface-sheet)',
      padding: '0 6px',
      zIndex: 1,
      whiteSpace: 'nowrap'
    }
  }, value), /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: height,
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "4",
    x2: "15",
    y2: height - 4,
    stroke: "var(--line-standard)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "1",
    x2: "22",
    y2: "1",
    stroke: "var(--line-standard)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: height - 1,
    x2: "22",
    y2: height - 1,
    stroke: "var(--line-standard)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "15,2 12,11 18,11",
    fill: "var(--line-standard)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: `15,${height - 2} 12,${height - 11} 18,${height - 11}`,
    fill: "var(--line-standard)"
  })));
}
function HeroSheet() {
  const {
    SheetFrame,
    TitleBlock,
    Stamp,
    NotesList,
    Dimension,
    Callout
  } = window.KnotYourKindDesignSystem_e3a90c;
  const gridBg = {
    backgroundImage: 'linear-gradient(var(--line-construction) 1px, transparent 1px), linear-gradient(90deg, var(--line-construction) 1px, transparent 1px)',
    backgroundSize: '56px 56px'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SheetFrame, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    size: "lg",
    angle: -7,
    style: {
      position: 'absolute',
      top: -18,
      right: 0,
      zIndex: 2
    }
  }, "Experience the (sic)ness"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(760px, 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    label: 'LETTERING STYLE:\nCUSTOM / HAND-DRAWN',
    lineLength: 52
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 38px'
    }
  }, /*#__PURE__*/React.createElement(Dimension, {
    value: "10.50",
    width: "100%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(VDim, {
    value: "2.75",
    height: 210,
    side: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      ...gridBg,
      backgroundPosition: 'center',
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.35,
      ...gridBg
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "/assets/logotype_sketch.png",
    alt: "Knot Your Kind \u2014 hand-drawn logotype, dimensioned",
    style: {
      width: '100%',
      height: 210,
      objectFit: 'contain',
      display: 'block',
      position: 'relative',
      mixBlendMode: 'multiply'
    }
  })), /*#__PURE__*/React.createElement(VDim, {
    value: "2.85",
    height: 210,
    side: "right"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kyk-caps-wide",
    style: {
      fontSize: 22,
      color: 'var(--text-body)'
    }
  }, "The"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "/assets/slipknot_sketch.png",
    alt: "Slipknot \u2014 hand-drawn",
    style: {
      height: 58,
      display: 'block',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement(Dimension, {
    value: "2.65",
    width: "100%",
    style: {
      marginTop: 4
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "kyk-caps-wide",
    style: {
      fontSize: 22,
      color: 'var(--text-body)'
    }
  }, "Experience")), /*#__PURE__*/React.createElement("p", {
    className: "kyk-caps",
    style: {
      margin: '18px 0 0',
      fontSize: 'var(--text-dim)',
      color: 'var(--text-annotation)',
      textAlign: 'center'
    }
  }, "This is not a tribute. This is a resurrection. \xB7 Experience the (sic)ness"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 'var(--space-6)',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(NotesList, {
    notes: ['ALL LETTERS DRAWN WITH CONSISTENT STROKE WEIGHT.', 'MAINTAIN ROUGH, JAGGED EDGE CHARACTER.', 'CENTER ALL ELEMENTS ON VERTICAL AXIS.']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "kyk-caps",
    style: {
      margin: 0,
      fontSize: 'var(--text-dim)',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      color: 'var(--text-title)'
    }
  }, "Material:"), /*#__PURE__*/React.createElement("p", {
    className: "kyk-caps",
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--text-dim)',
      color: 'var(--text-body)'
    }
  }, "Graphite on", /*#__PURE__*/React.createElement("br", null), "drafting paper")), /*#__PURE__*/React.createElement(TitleBlock, {
    title: "LOGOTYPE, HAND-DRAWN",
    drawnBy: "J. BAILEY",
    drawnByLabel: "Owned by:",
    scale: "1:1",
    sheet: "1 OF 9"
  })))));
}
Object.assign(window, {
  HeroSheet,
  VDim
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SoleMember.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = window.React;

/* X-ray skeleton overlay — visible adamantium-style frame under mask + suit. */
function EndoskeletonOverlay() {
  const bone = {
    stroke: 'var(--graphite-1)',
    strokeWidth: 2.2,
    fill: 'none',
    strokeLinecap: 'round',
    opacity: 0.8
  };
  const fine = {
    stroke: 'var(--graphite-1)',
    strokeWidth: 1.4,
    fill: 'none',
    strokeLinecap: 'round',
    opacity: 0.7
  };
  const ribs = [];
  for (let k = 0; k < 6; k++) {
    const y = 545 + k * 44;
    const spread = 150 - k * 8;
    ribs.push(/*#__PURE__*/React.createElement("path", _extends({
      key: 'l' + k,
      d: `M 405 ${y} C ${405 - spread * 0.8} ${y - 26}, ${405 - spread} ${y + 4}, ${405 - spread + 18} ${y + 30}`
    }, bone)));
    ribs.push(/*#__PURE__*/React.createElement("path", _extends({
      key: 'r' + k,
      d: `M 415 ${y - 4} C ${415 + spread * 0.8} ${y - 30}, ${415 + spread} ${y}, ${415 + spread - 18} ${y + 26}`
    }, bone)));
  }
  const vertebrae = [];
  for (let k = 0; k < 11; k++) {
    const y = 400 + k * 45;
    vertebrae.push(/*#__PURE__*/React.createElement("rect", _extends({
      key: 'v' + k,
      x: 396,
      y: y,
      width: 22,
      height: 26,
      rx: 0
    }, fine)));
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 900 900",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("ellipse", _extends({
    cx: "365",
    cy: "200",
    rx: "112",
    ry: "138"
  }, bone)), /*#__PURE__*/React.createElement("ellipse", _extends({
    cx: "322",
    cy: "205",
    rx: "26",
    ry: "20"
  }, fine)), /*#__PURE__*/React.createElement("ellipse", _extends({
    cx: "408",
    cy: "205",
    rx: "26",
    ry: "20"
  }, fine)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 358 235 L 372 235 L 365 262 Z"
  }, fine)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 305 300 Q 365 330 425 300"
  }, bone)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 312 312 L 312 296 M 330 320 L 330 302 M 348 326 L 348 306 M 366 328 L 366 308 M 384 326 L 384 306 M 402 320 L 402 302 M 418 312 L 418 296"
  }, fine)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 300 268 Q 365 356 430 268"
  }, bone)), vertebrae, /*#__PURE__*/React.createElement("path", _extends({
    d: "M 405 470 Q 290 452 172 502"
  }, bone)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 415 470 Q 530 448 648 486"
  }, bone)), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "168",
    cy: "512",
    r: "24"
  }, bone)), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "652",
    cy: "496",
    r: "24"
  }, bone)), /*#__PURE__*/React.createElement("line", _extends({
    x1: "408",
    y1: "500",
    x2: "410",
    y2: "640"
  }, bone)), ribs, /*#__PURE__*/React.createElement("path", _extends({
    d: "M 158 534 C 130 620, 108 700, 88 788"
  }, bone)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 182 536 C 156 622, 136 702, 118 792"
  }, fine)), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "100",
    cy: "800",
    r: "16"
  }, fine)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 662 518 C 700 600, 740 680, 782 756"
  }, bone)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 640 522 C 676 604, 714 684, 756 764"
  }, fine)), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "772",
    cy: "770",
    r: "16"
  }, fine)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M 320 862 Q 408 828 500 858"
  }, bone)));
}
function SoleMember() {
  const {
    SheetFrame,
    TitleBlock,
    NotesList,
    Stamp,
    Dimension,
    Callout
  } = window.KnotYourKindDesignSystem_e3a90c;
  return /*#__PURE__*/React.createElement("section", {
    id: "the-one",
    style: {
      padding: '0 var(--space-5) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SheetFrame, null, /*#__PURE__*/React.createElement(window.SectionTitle, {
    label: "Section View \u2014 Internal Structure Shown Hidden",
    title: "Part #8, Frame Assembly"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(window.VDim, {
    value: "6 FT 0 IN",
    height: 380
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 380,
      height: 380
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/member_8_sketch.png",
    alt: "Part #8 \u2014 mask and suit over metal endoskeleton, hidden lines",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement(EndoskeletonOverlay, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '26px 0 60px'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    label: 'MASK ASSY\nINSTALLED',
    lineLength: 46
  }), /*#__PURE__*/React.createElement(Callout, {
    label: 'ENDOSKELETON, METAL\nSHOWN HIDDEN (DASHED)',
    lineLength: 58
  }), /*#__PURE__*/React.createElement(Callout, {
    label: 'SUIT, COVERALLS\nOVER FRAME',
    lineLength: 42
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      marginLeft: 30
    }
  }, /*#__PURE__*/React.createElement(Dimension, {
    value: "QTY: 1",
    width: "100%",
    style: {
      marginTop: 6
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      flex: '1 1 260px',
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    angle: -6
  }, "No Organic Components"), /*#__PURE__*/React.createElement(NotesList, {
    notes: ['EXTERIOR: MASK AND SUIT ONLY.', 'NO SKIN. NO MUSCLE. FRAME ONLY.', 'INTERNAL STRUCTURE: METAL ENDOSKELETON, SHOWN AS HIDDEN LINES.', 'PARTS #0 THRU #7 REMOVED PER ECO-009. DO NOT REINSTALL.', 'DO NOT OPERATE UNMASKED.']
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    title: "PART #8, FRAME ASSY",
    scale: "1:8",
    sheet: "4 OF 9",
    style: {
      marginTop: 'auto',
      alignSelf: 'flex-end'
    }
  })))));
}
Object.assign(window, {
  SoleMember
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SoleMember.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TribalS.jsx
try { (() => {
const React = window.React;
function TribalS() {
  const {
    SheetFrame,
    TitleBlock,
    NotesList,
    Callout,
    Dimension
  } = window.KnotYourKindDesignSystem_e3a90c;
  return /*#__PURE__*/React.createElement("section", {
    id: "tribal-s",
    style: {
      padding: '0 var(--space-5) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SheetFrame, null, /*#__PURE__*/React.createElement(window.SectionTitle, {
    label: "Detail Drawing",
    title: "Tribal S Logo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Dimension, {
    value: "1.750",
    width: "180px",
    style: {
      margin: '0 auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(window.VDim, {
    value: "7.000",
    height: 420
  }), /*#__PURE__*/React.createElement("img", {
    src: "/assets/tribal_s_sketch.png",
    alt: "Tribal S \u2014 dimensioned fabrication drawing",
    style: {
      height: 420,
      display: 'block',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '30px 0 40px',
      marginLeft: -6
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    label: "R.625",
    lineLength: 44
  }), /*#__PURE__*/React.createElement(Callout, {
    label: 'R.250',
    lineLength: 58
  }), /*#__PURE__*/React.createElement(Callout, {
    label: 'R.125\nTYP.',
    lineLength: 40
  }), /*#__PURE__*/React.createElement(Callout, {
    label: "R.750",
    lineLength: 62
  }), /*#__PURE__*/React.createElement(Callout, {
    label: "R.1875",
    lineLength: 46
  }))), /*#__PURE__*/React.createElement("p", {
    className: "kyk-caps",
    style: {
      margin: '8px 0 0 30px',
      fontSize: 'var(--text-dim)',
      color: 'var(--text-body)'
    }
  }, "15\xB0 TYP. \xB7 .125 THICKNESS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      flex: '1 1 260px',
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(NotesList, {
    notes: ['ALL DIMENSIONS ARE IN INCHES.', 'ALL CORNERS AND EDGES TO BE SHARP.']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "kyk-caps",
    style: {
      margin: 0,
      fontSize: 'var(--text-dim)',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      color: 'var(--text-title)'
    }
  }, "Tolerances:"), /*#__PURE__*/React.createElement("table", {
    style: {
      marginTop: 8,
      borderCollapse: 'collapse',
      fontSize: 'var(--text-dim)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '2px 18px 2px 0'
    }
  }, ".X"), /*#__PURE__*/React.createElement("td", null, "= \xB1.1")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '2px 18px 2px 0'
    }
  }, ".XX"), /*#__PURE__*/React.createElement("td", null, "= \xB1.01")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '2px 18px 2px 0'
    }
  }, ".XXX"), /*#__PURE__*/React.createElement("td", null, "= \xB1.005"))))), /*#__PURE__*/React.createElement(TitleBlock, {
    title: "TRIBAL S LOGO",
    drawnBy: "PROPERTY OF SLIPKNOT",
    date: "UNDETERMINED",
    scale: "2:1",
    sheet: "3 OF 9",
    style: {
      marginTop: 'auto',
      alignSelf: 'flex-end'
    }
  })))));
}
Object.assign(window, {
  TribalS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TribalS.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dimension = __ds_scope.Dimension;

__ds_ns.Nonagram = __ds_scope.Nonagram;

__ds_ns.NotesList = __ds_scope.NotesList;

__ds_ns.RevisionTable = __ds_scope.RevisionTable;

__ds_ns.SheetFrame = __ds_scope.SheetFrame;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.TitleBlock = __ds_scope.TitleBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Field = __ds_scope.Field;

})();
