import React from "react";
import Pagination from "react-bootstrap/Pagination";

const pagination = ({ itemsPerPage, totalItems, changePage, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <Pagination>
      <Pagination.Prev disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)} >{'<Prev'}</Pagination.Prev>
      {pages.map((page) => {
        return (
          <Pagination.Item
            active={currentPage === page}
            onClick={() => { changePage(page); }}
          >{page}</Pagination.Item>);
      })}
      <Pagination.Next disabled={currentPage === Math.ceil(totalItems / itemsPerPage)} onClick={() => changePage(currentPage + 1)} >{'Next>'}</Pagination.Next>
    </Pagination>
  );
};

export default pagination;