import Pagination from "react-pagination-main";
import { PaginationElement } from "../types";
import "../styles/pagination.css";

const CustomPagination = ({
  currentPage,
  total_pages,
  pageRange,
  onPaginationChange,
}: PaginationElement) => {
  if (total_pages === 1) {
    return (
      <ul className="pagination">
        <li key={1} className={`pageItem activePage`}>
          1
        </li>
      </ul>
    );
  }
  return (
    <Pagination
      activePage={currentPage}
      totalPageRange={total_pages}
      pageRangeDisplayed={pageRange}
      onChange={onPaginationChange}
    >
      {(result: any) => (
        <ul className="pagination">
          {result.renderArrowsLeft(
            ({ isLastArrow, isAvailable, handleChange }: any) => (
              <li
                key={`arrows_left_${isLastArrow}`}
                className={` ${isAvailable ? "pageItem" : "pageItemDisabled"}`}
                onClick={handleChange}
              >
                <span>{isLastArrow ? "<<" : "Prev"}</span>
              </li>
            )
          )}
          {result.numbers.map(({ isActive, number, handleChange }: any) => (
            <li
              key={number}
              className={`pageItem ${isActive ? "activePage" : ""}`}
              onClick={handleChange}
            >
              {number}
            </li>
          ))}
          {result.renderArrowsRight(
            ({ isLastArrow, isAvailable, handleChange }: any) => (
              <li
                key={`arrows_right_${isLastArrow}`}
                className={` ${isAvailable ? "pageItem" : "pageItemDisabled"}`}
                onClick={handleChange}
              >
                <span>{isLastArrow ? ">>" : "Next"}</span>
              </li>
            )
          )}
        </ul>
      )}
    </Pagination>
  );
};

export default CustomPagination;
