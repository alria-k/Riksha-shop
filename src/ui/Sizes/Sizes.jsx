import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SizeButtonsWrapper = styled.div`
  position: relative;
  width: fit-content;
`;
const SizeExtraPay = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #b7b7b7;
  top: -65%;
  right: 0;
`;
const SizeRadioCustom = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;
const SizeRadio = styled.input`
  cursor: pointer;
  margin: 0;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
`;
const SizeWrapper = styled(({ bgColor, ...props }) => <form {...props} />)`
  ${({ bgColor }) => bgColor && "background: #f5f5f5;"}
  position: relative;
  border-radius: 2px;
  padding: 4px 8px;
  color: #b7b7b7;
  ${({ bgColor }) => !bgColor && "padding: 0;"}
  :has(${SizeRadio}:checked + ${SizeRadioCustom}) {
    ${({ bgColor }) =>
      !bgColor && "&& {background: transparent; color: #e07153;}"}
    background: #e07153;
    color: white;
  }
  :not(:first-child) {
    ::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: #e07153;
      border-radius: 100%;
      left: -15%;
      ${({ bgColor }) => !bgColor && "left: -20%;"}
      top: 50%;
    }
  }
`;
const SizerBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export function Sizes({ item, price, setPrice, bgColor = true }) {
  const [extraPrice, setExtraPrice] = useState(0);
  const [checked, setChecked] = useState(0);

  function handleChange(event, priceVal, i) {
    if (event.target.checked) {
      setChecked(i);
      setExtraPrice(priceVal);
      setPrice(item.price);
    }
    return;
  }

  useEffect(() => {
    setPrice(price + extraPrice);
  }, [extraPrice]);

  useEffect(() => {
    setChecked(0);
    setExtraPrice(0);
  }, [item.price]);

  return item.sizes ? (
    <SizeButtonsWrapper>
      {bgColor && <SizeExtraPay>+{extraPrice} ₽</SizeExtraPay>}
      <SizerBox>
        {item.sizes.map((elem, index) => (
          <SizeWrapper key={index} bgColor={bgColor}>
            <SizeRadio
              checked={index == checked}
              onChange={(e) => handleChange(e, elem.extraPay, index)}
              type="radio"
              name="size-pizza"
            />
            <SizeRadioCustom htmlFor="size-pizza">{elem.cm} см</SizeRadioCustom>
          </SizeWrapper>
        ))}
      </SizerBox>
    </SizeButtonsWrapper>
  ) : null;
}
