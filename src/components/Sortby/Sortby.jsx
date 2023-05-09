import React from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import "./Sortby.scss";

export function Sortby({ obj }) {
  const categories = useSelector((state) => state.category.category);
  const [sort, setSort] = React.useState("default");

  const [items] = obj.items.read();

  function handlerSortBy(sort) {
    setSort(sort);
  }

  return (
    items[categories].sortby && (
      <div className="catalog-sortby">
        <p className="catalog-sortby__text">Сортировка</p>
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
      </div>
    )
  );
}
