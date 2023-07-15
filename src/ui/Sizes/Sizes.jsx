import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SizeButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
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
const SizeWrapper = styled.form`
  position: relative;
  background: #f5f5f5;
  border-radius: 2px;
  padding: 4px 8px;
  color: #b7b7b7;
  :has(${SizeRadio}:checked + ${SizeRadioCustom}) {
    background: #e07153;
    color: white;
  }
  :nth-child(3) {
    ::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: #e07153;
      border-radius: 100%;
      left: -15%;
      top: 40%;
    }
  }
`;

export function Sizes({ item, price, setPrice }) {
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
      <SizeExtraPay>+{extraPrice} ₽</SizeExtraPay>
      {item.sizes.map((elem, index) => (
        <SizeWrapper key={index}>
          <SizeRadio
            checked={index == checked}
            onChange={(e) => handleChange(e, elem.extraPay, index)}
            type="radio"
            name="size-pizza"
          />
          <SizeRadioCustom htmlFor="size-pizza">{elem.cm} см</SizeRadioCustom>
        </SizeWrapper>
      ))}
    </SizeButtonsWrapper>
  ) : null;
}
