import * as React from "react";
import Ncloud from "./detail/Ncloud";
import Tistory from "./detail/Tistory";
import { Typography } from "@mui/material";

const Detail = () => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        color={"primary"}
        sx={{ m: 0, p: "1.5rem 1.5rem 1.5rem 0" }}
      >
        DETAIL
      </Typography>
      <Ncloud />
      <br />
      <br />
      <br />
      <Tistory />
    </>
  );
};

export default Detail;
