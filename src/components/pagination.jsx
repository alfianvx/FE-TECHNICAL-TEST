import React from "react";

export default function Pagination({ page, setPage, totalPage }) {
  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPage}>
        Next
      </button>
    </div>
  );
}
