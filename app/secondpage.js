"use client";

import React from "react";

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param {object} props
 * @param {number} [props.borderRadius=8] - defines the radius of the border.
 * @param {number} [props.borderWidth=1] - defines the width of the border.
 * @param {number} [props.duration=14] - defines the animation duration to be applied on the shining border.
 * @param {string|string[]} [props.color="#000000"] - a string or string array to define border color.
 * @param {string} [props.className] - defines the class name to be applied to the component.
 * @param {React.ReactNode} props.children - contains react node elements.
 * @returns {JSX.Element}
 */
function ShineBorder({
  borderRadius = 10,
  borderWidth = 3,
  duration = 14,
  color = "#000000",
  children,
}) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
      }}
      className={
        "relative grid h-[98vh] w-[98vw] sm:h-[90vh] sm:w-[80vw] sm:bg-white place-items-center rounded-[--border-radius] bg-black p-3   dark:text-white"
      }
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
            Array.isArray(color) ? color.join(",") : color
          },transparent,transparent)`,
        }}
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
}

export default ShineBorder;
