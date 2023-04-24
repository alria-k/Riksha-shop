import Select from "react-select";
import "./Sortby.scss";

export function Sortby({ handler }) {
  return (
    <Select
      options={[
        { value: "default", label: "По умолчанию" },
        { value: "a-z", label: "Название (А - Я)" },
        { value: "z-a", label: "Название (Я - А)" },
        { value: "low-price", label: "Низкая цена" },
        { value: "hight-price", label: "Высокая цена" },
      ]}
      onChange={(option) => handler(option.value)}
      isSearchable={false}
      defaultValue={[{ value: "default", label: "По умолчанию" }]}
    />
  );
}
