import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const OverlayBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Overlay({ children }) {
  return createPortal(
    <OverlayBox>{children}</OverlayBox>,
    document.getElementById("overlay")
  );
}
