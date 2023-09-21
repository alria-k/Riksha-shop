import React, { useState } from "react";
import styled from "styled-components";

const ModalInner = styled.div`
  position: relative;
  background-color: white;
  border-radius: 24px;
  padding: 16px;
  pointer-events: all;
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);
`;
const CrossButton = styled.button`
  text-decoration: none;
  background-color: transparent;
  outline: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  height: 32px;
`;
const ModalTitle = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

export function Modal({
  children,
  modalTitle = false,
  closeBtnAbility = true,
}) {
  return (
    <ModalInner>
      {closeBtnAbility && (
        <CrossButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 14.1146L22.6 7.51465L24.4853 9.39998L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.4 24.4853L7.51466 22.6L14.1147 16L7.51466 9.39998L9.4 7.51465L16 14.1146Z"
              fill="#09121F"
            />
          </svg>
        </CrossButton>
      )}
      {modalTitle && <ModalTitle>{modalTitle}</ModalTitle>}
      {children}
    </ModalInner>
  );
}
