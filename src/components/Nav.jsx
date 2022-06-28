import React from "react";
const PAGINATION = 10;

const Nav = ({ page, setPage }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>Page: {page === 0 ? 1 : page / PAGINATION + 1} </p>
      <a
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => setPage(page + PAGINATION)}
      >
        {`Next >>`}
      </a>
    </div>
  );
};

export default Nav;
