import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

const SortWrapper = styled.div`
  margin-bottom: 24px;
`;
const SortText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
  margin-bottom: 8px;
`;

export function Sortby({ data }) {
  const [sort, setSort] = useState("default");

  function handlerSortBy(value) {
    setSort(value);
  }

  return (
    data.sortby && (
      <SortWrapper>
        <SortText>Сортировка</SortText>
        <Select
          options={[
            { value: "default", label: "По умолчанию" },
            { value: "a-z", label: "Название (А - Я)" },
            { value: "z-a", label: "Название (Я - А)" },
            { value: "low-price", label: "Низкая цена" },
            { value: "hight-price", label: "Высокая цена" },
          ]}
          onChange={(option) => handlerSortBy(option.value)}
          isSearchable={false}
          defaultValue={[{ value: "default", label: "По умолчанию" }]}
          styles={{
            container: (baseStyles) => ({
              ...baseStyles,
              width: "20%",
            }),
          }}
        />
      </SortWrapper>
    )
  );
}
