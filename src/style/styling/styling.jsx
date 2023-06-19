import styled, { css } from "styled-components";

export const NavFlex = css`
  display: flex;
  align-items: center;
`;

export const ParagraphFont = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1b1b1b;
`;

export const BtnStyles = css`
  user-select: none;
  padding: 13px 59px;
  background-color: #e07153;
  background-image: url("/src/assets/img/bg-btns.svg");
  background-repeat: no-repeat;
  background-size: cover;
  outline: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: 1px solid #c95c3f;
  border-radius: 2px;
`;

export const TitleFont = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: #1b1b1b;
  margin-bottom: 40px;
  span {
    color: #c95c3f;
  }
`;

export const CatalogTitle = css`
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  color: #1b1b1b;
  margin-bottom: 21px;
`;
