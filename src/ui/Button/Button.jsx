import React, { Children } from "react";
import styled from "styled-components";

import { btnStyles } from "../../style/styling/styling";

const ButtonStyled = styled.button`
  ${btnStyles}
  width: 100%;
`;

export function Button({ children, handler }) {
  return <ButtonStyled onClick={handler}>{children}</ButtonStyled>;
}
