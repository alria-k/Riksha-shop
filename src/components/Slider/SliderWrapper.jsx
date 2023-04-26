import React from "react";

export function SliderWrapper({ children, width, setWidth }) {
  const ref = React.useRef(null);

  const handleResize = () => {
    setWidth(ref.current.getBoundingClientRect().width);
  };

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    setWidth(ref.current.getBoundingClientRect().width);
  });

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="slider-wrapper" ref={ref} style={{ width: width + "px" }}>
      {children}
    </div>
  );
}
