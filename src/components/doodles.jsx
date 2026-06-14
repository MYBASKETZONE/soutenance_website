import React from "react";
import { DOODLES } from "../script/doodles-data";

/* ============================================================
   Doodle — inline SVG from doodles-data
   ============================================================ */
export function Doodle({
  name,
  w = 40,
  color,
  flip,
  rotate,
  className = "",
  style = {},
  ...rest
}) {
  const d = DOODLES[name];
  if (!d) return null;
  const s = {
    width: w,
    height: "auto",
    color: color || "currentColor",
    transform:
      [flip ? "scaleX(-1)" : "", rotate ? `rotate(${rotate}deg)` : ""]
        .filter(Boolean)
        .join(" ") || undefined,
    ...style,
  };
  return (
    <svg
      className={`doodle ${className}`}
      viewBox={d.vb}
      style={s}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: d.inner }}
      {...rest}
    />
  );
}

/* ============================================================
   Mark — absolutely positioned doodle
   ============================================================ */
export function Mark({
  name,
  w,
  color,
  pos = {},
  rotate,
  flip,
  className = "",
  style = {},
  ...rest
}) {
  const s = { ...pos, ...style };
  return (
    <Doodle
      name={name}
      w={w}
      color={color}
      rotate={rotate}
      flip={flip}
      className={`doodle--abs ${className}`}
      style={s}
      {...rest}
    />
  );
}

/* ============================================================
   Note — handwritten margin note (cursive)
   ============================================================ */
export function Note({
  children,
  tone,
  rotate,
  className = "",
  style = {},
  ...rest
}) {
  const cls = `hnote${tone ? ` hnote--${tone}` : ""} ${className}`;
  const s = rotate ? { ...style, transform: `rotate(${rotate}deg)` } : style;
  return (
    <span className={cls} style={s} {...rest}>
      {children}
    </span>
  );
}

/* ============================================================
   Stamp — marker stamp word
   ============================================================ */
export function Stamp({
  children,
  tone = "ink",
  rotate,
  className = "",
  style = {},
  ...rest
}) {
  const cls = `hstamp hstamp--${tone} ${className}`;
  const s = rotate ? { ...style, transform: `rotate(${rotate}deg)` } : style;
  return (
    <span className={cls} style={s} {...rest}>
      {children}
    </span>
  );
}

/* ============================================================
   Scribble — word with scribble underline
   ============================================================ */
export function Scribble({
  children,
  variant = "underline-1",
  color,
  className = "",
  ...rest
}) {
  const d = DOODLES[variant];
  return (
    <span className={`scribbled ${className}`} {...rest}>
      {children}
      {d && (
        <svg
          className="scribbled__line"
          viewBox={d.vb}
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            left: "-4%",
            right: "-4%",
            bottom: "-0.18em",
            width: "108%",
            height: "0.38em",
            color: color || "currentColor",
          }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: d.inner }}
        />
      )}
    </span>
  );
}

/* ============================================================
   Ringed — word with hand-drawn ring
   ============================================================ */
export function Ringed({
  children,
  variant = "circle-1",
  color,
  className = "",
  ...rest
}) {
  const d = DOODLES[variant];
  return (
    <span className={`ringed ${className}`} {...rest}>
      {children}
      {d && (
        <svg
          className="ringed__ring"
          preserveAspectRatio="none"
          viewBox={d.vb}
          style={{
            position: "absolute",
            inset: "-18% -10%",
            width: "120%",
            height: "160%",
            color: color || "currentColor",
            pointerEvents: "none",
          }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: d.inner }}
        />
      )}
    </span>
  );
}
