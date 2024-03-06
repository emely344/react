import { Box, Typography } from "@mui/material";
import ChildPropsTwoKeys from "./ChildPropsTwoKeys";

const FatherPropsTwoKeys = () => {
  const name = {
    firstName: "victor",
    lastName: "yampolsky",
  };
  return (
    <Box sx={{ border: "5px solid green" }}>
      <Typography m={2}>Father Component - props Two keys</Typography>
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
        <ChildPropsTwoKeys
          fname={name.firstName}
          lname={name.lastName}
        ></ChildPropsTwoKeys>
      </Box>
    </Box>
  );
};

export default FatherPropsTwoKeys;
