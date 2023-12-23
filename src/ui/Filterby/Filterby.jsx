import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FilterByWrapper = styled.div`
  margin-bottom: 14px;
`;
const FilterByList = styled.ul`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const FilterByBtn = styled(({ currFilter, filter, ...props }) => (
  <button {...props} />
))`
  ${({ currFilter, filter }) =>
    currFilter == filter &&
    `
    &&{
      color: #E07153;
      border: 1px solid #E07153;
    }
  `}
  outline: none;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #fff;
  display: inline-flex;
  gap: 8px;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1b1b1b;
  align-items: center;
`;
const FilterByImg = styled.img`
  width: 24px;
  height: 24px;
`;

export function Filterby({ data, category, setCategory }) {
  function handlerCategory(event, filter) {
    event.preventDefault();
    if (filter == category) {
      setCategory(null);
      return;
    }
    setCategory(filter);
  }

  return (
    data.categories.length && (
      <FilterByWrapper>
        <FilterByList>
          {data.categories.map((elem) => (
            <li key={elem.id}>
              <FilterByBtn
                filter={elem.key}
                currFilter={category}
                onClick={(e) => handlerCategory(e, elem.key)}
              >
                <FilterByImg
                  src={`/src/assets/img/categories-icons/${elem.icon}`}
                  alt="filter-icon"
                />
                {elem.text}
              </FilterByBtn>
            </li>
          ))}
        </FilterByList>
      </FilterByWrapper>
    )
  );
}
