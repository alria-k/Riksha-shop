import styled from "styled-components";

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const SwitchArrow = styled.div`
  background: transparent;
  outline: none;
  border: none;
`;
const NumberList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const PageNumber = styled.button`
  padding: 16px 22px;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #1b1b1b;
  outline: none;
  border: none;
  background-color: transparent;
  transition: color 0.2s ease-in-out;
  :hover {
    color: #c95c3f;
  }
`;
const NumberItem = styled(({ activePage, page, ...props }) => (
  <li {...props} />
))`
  ${({ activePage, page }) =>
    activePage == page &&
    `
        font-weight: 500;
        background-image: url('/src/assets/img/Active-page-category.svg');
        background-position: center;
        background-repeat: no-repeat;
        ${PageNumber}{
          color: #C95C3F;
        }
    `}
`;

export function CategoryPageRedict({
  allItems,
  activePage,
  setPage,
  visibleItems,
}) {
  let pages = Math.floor(allItems / visibleItems);

  function handlerPages(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    pages != 0 && (
      <div>
        <SwitchWrapper>
          {activePage != 1 && (
            <SwitchArrow onClick={(e) => handlerPages(e, activePage - 1)}>
              <svg
                width="33"
                height="12"
                viewBox="0 0 33 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
                  fill="#C95C3F"
                />
              </svg>
            </SwitchArrow>
          )}
          <div>
            <NumberList>
              {[...Array(pages).keys()].map((elem, index) => {
                let elemsP = elem + 1;
                return (
                  <NumberItem key={index} activePage={activePage} page={elemsP}>
                    <PageNumber onClick={(e) => handlerPages(e, elemsP)}>
                      {elemsP}
                    </PageNumber>
                  </NumberItem>
                );
              })}
            </NumberList>
          </div>
          {activePage != pages && (
            <SwitchArrow onClick={(e) => handlerPages(e, activePage + 1)}>
              <svg
                width="33"
                height="12"
                viewBox="0 0 33 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
                  fill="#C95C3F"
                />
              </svg>
            </SwitchArrow>
          )}
        </SwitchWrapper>
      </div>
    )
  );
}
