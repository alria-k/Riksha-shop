import React from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
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

export function Sortby({ obj }) {
  const categories = useSelector((state) => state.category.category);
  const [sort, setSort] = React.useState("default");

  const [items] = obj.items.read();

  function handlerSortBy(sort) {
    setSort(sort);
  }

  return (
    items[categories].sortby && (
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
