import styled from "styled-components";

const ItemPageQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 10px;
  border: 1px solid #e2e1e1;
  border-radius: 8px;
  gap: 6px;
  max-width: 123px;
`;
const QuantitySetter = styled.button`
  font-weight: 200;
  font-size: 28px;
  line-height: 34px;
  color: #e07153;
  border: none;
  outline: none;
  background-color: transparent;
`;
const QuantityText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #1b1b1b;
  width: 40px;
  text-align: center;
`;

export function QuantityCounter({ count, setCount, id = null }) {
  function handlerQuantityPlus(e) {
    e.preventDefault();
    if (count < 20) {
      setCount(count + 1);
    }
  }
  function handlerQuantityMinus(e) {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <ItemPageQuantityWrapper>
      <QuantitySetter onClick={handlerQuantityMinus}>-</QuantitySetter>
      <QuantityText>{count}</QuantityText>
      <QuantitySetter onClick={handlerQuantityPlus}>+</QuantitySetter>
    </ItemPageQuantityWrapper>
  );
}
