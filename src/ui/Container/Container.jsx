import styled from "styled-components";

export const ContainerWrapper = styled.div`
  max-width: 1254px;
  padding: 0 10px;
  margin: 0 auto;
`;

export function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}
