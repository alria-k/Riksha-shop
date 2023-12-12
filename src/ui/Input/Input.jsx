import { useState } from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  width: 100%;
  padding: 16px;
  color: #1b1b1b;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 1px solid #f5f5f5;
  :focus {
    outline: none;
  }
`;

export function Input({ placeholder, name, type, ...props }) {
  const [value, setValue] = useState("");

  return (
    <CustomInput
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
}
