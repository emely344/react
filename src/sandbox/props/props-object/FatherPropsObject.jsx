import { Box, Typography } from "@mui/material";

import ChildPropsObject from "./ChildPropsObject";

const FatherPropsObject = () => {
  const name = {
    firstName: "victor",
    lastName: "yampolsky",
  };
  return (
    <Box sx={{ border: "5px solid green" }}>
      <Typography m={2}>Father Component - props object</Typography>
      <Box
        sx={{
          m: 2,
          display: "flex",
          justifyContent: "center",
          height: 300,
          width: 700,
          backgroundColor: "secondary.dark",
        }}
      >
        <ChildPropsObject victor={name}></ChildPropsObject>
      </Box>
    </Box>
  );
};

export default FatherPropsObject;
