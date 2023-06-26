import styled from "styled-components";

const CategoriesWrapper = styled.div``;

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
      <div
        className={classNames({
          categories__pages: true,
          "categories__pages--end": !pages,
        })}
      >
        <div className="switch-page__box">
          {activePage != 1 && (
            <button
              className="switch-page__arrow"
              onClick={(e) => handlerPages(e, activePage - 1)}
            >
              <svg
                width="33"
                height="12"
                viewBox="0 0 33 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow--left"
              >
                <path
                  d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
                  fill="#C95C3F"
                />
              </svg>
            </button>
          )}
          <div className="number__box">
            <ul className="number__inner">
              {[...Array(pages).keys()].map((elem, index) => {
                let elemsP = elem + 1;
                return (
                  <li
                    key={index}
                    className={classNames({
                      number__text: true,
                      "number-page--active": activePage == elemsP,
                    })}
                  >
                    <button
                      className="number-page"
                      type="button"
                      onClick={(e) => handlerPages(e, elemsP)}
                    >
                      {elemsP}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          {activePage != pages && (
            <button
              className="switch-page__arrow"
              onClick={(e) => handlerPages(e, activePage + 1)}
            >
              <svg
                width="33"
                height="12"
                viewBox="0 0 33 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow--right"
              >
                <path
                  d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
                  fill="#C95C3F"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    )
  );
}
