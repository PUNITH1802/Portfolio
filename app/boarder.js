"use client";

import React from "react";

const ShineBorder = ({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  children,
}) => {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
      }}
      className="relative   h-[90vh]  w-[80vw] flex-col phonesize1  place-items-center rounded-[--border-radius] bg-white p-3 text-black "
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
        }}
        className={`before:bg-shine-size h-[90vh]  w-[80vw] flex-col  before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] phonesize1 before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
};

export default ShineBorder;
