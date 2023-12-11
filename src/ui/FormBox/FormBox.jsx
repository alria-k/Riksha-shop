import styled from "styled-components";

const FormBoxContainer = styled.div`
  padding: 28px 24px;
  background-color: #f5f5f5;
  max-width: 600px;
  width: 100%;
  height: fit-content;
`;
const FormBoxHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const SticksIconWrapper = styled.div`
  position: relative;
`;
const FormAmount = styled.div`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 12px;
  top: 0;
  border-radius: 100%;
  background-color: #1b1b1b;
  padding: 1px 6px;
`;
const FormBoxTitle = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #1b1b1b;
`;
const SticksIcon = styled.img``;

export function FormBox({ step, title, children }) {
  return (
    <FormBoxContainer>
      <FormBoxHeader>
        <SticksIconWrapper>
          <SticksIcon src="/src/assets/img/sticks.svg" />
          <FormAmount>{step}</FormAmount>
        </SticksIconWrapper>
        <FormBoxTitle>{title}</FormBoxTitle>
      </FormBoxHeader>
      {children}
    </FormBoxContainer>
  );
}
