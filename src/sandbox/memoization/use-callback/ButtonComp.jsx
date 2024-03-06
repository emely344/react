import { memo } from "react";

import { func, node } from "prop-types";
import { Button } from "@mui/material";

const ButtonComp = ({ handleClick, name, value, children }) => {
  console.log(`rendering button for ${name}, version: ${value} `);

  return (
    <Button variant="outlined" color="primary" onClick={handleClick}>
      {children}
    </Button>
  );
};

ButtonComp.propTypes = {
  handleClick: func.isRequired,
  children: node.isRequired,
};

export default memo(ButtonComp);
