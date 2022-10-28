import { Pagination } from "@mui/material";
import React, { useContext } from "react";
import { postContext } from "../../postContext";

export default function PaginationControlled() {
  const { setPage, page, totalPages } = useContext(postContext);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div style={{ margin: "1% 35%" }}>
      <Pagination
        count={totalPages}
        page={page}
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
}
