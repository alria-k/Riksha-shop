import styled from "styled-components";

const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const CustomCheckbox = styled(({ ...props }) => <label {...props} />)`
  cursor: pointer;
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #1b1b1b;
  background-color: white;
  ${({ checked }) =>
    checked &&
    `:before{
        content: '';
        cursor: pointer;
        display: block;
        background-color: #E07153;
        width: 9px;
        height: 9px;
        transform: translate3d(3px, 3px, 0);
    }
    `}
`;
const HiddenCheckbox = styled.input`
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  top: 0;
  margin: 0;
`;
const Text = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export function Checkbox({ isChecked, setIsChecked, name, text }) {
  return (
    <CheckboxContainer>
      <CustomCheckbox checked={isChecked}>
        <HiddenCheckbox
          name={name}
          checked={isChecked}
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
        />
      </CustomCheckbox>
      <Text>{text}</Text>
    </CheckboxContainer>
  );
}
