import styled from "styled-components";

const RadioButtonBox = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
`;
const HiddenRadioButton = styled.input`
  opacity: 0;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  z-index: 2;
  top: 0;
  margin: 0;
`;
const CustomRadioButton = styled(({ ...props }) => <label {...props} />)`
  cursor: pointer;
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #1b1b1b;
  background-color: white;
  border-radius: 100%;
  ${({ checked }) =>
    checked &&
    `:before{
        content: '';
        cursor: pointer;
        border-radius: 100%;
        display: block;
        background-color: #E07153;
        width: 9px;
        height: 9px;
        transform: translate3d(3px, 3px, 0);
    }
    `}
`;
const Text = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export function RadioButton({ setIsChecked, name, value, text }) {
  return (
    <RadioButtonBox>
      <CustomRadioButton checked={value == name}>
        <HiddenRadioButton
          name={name}
          checked={value == name}
          type="radio"
          value={value}
          onChange={setIsChecked}
        />
      </CustomRadioButton>
      <Text>{text}</Text>
    </RadioButtonBox>
  );
}
