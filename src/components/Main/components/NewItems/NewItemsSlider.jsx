import React from "react";

export function NewItemsSlider({ children, width, setWidth }) {
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
    <div
      className="new-items__slider"
      ref={ref}
      style={{ width: width + "px" }}
    >
      {children}
    </div>
  );
}
