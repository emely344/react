import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";

const MuiBottomNavigation = () => {
  return (
    <Box sx={{ marginTop: 8 }}>
      <Box>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
        architecto magni sed, placeat modi eligendi velit. Quos ipsum officiis
        nisi aut magni eius quo. Voluptas veniam quidem aliquam! Odit,
        architecto.
      </Box>
      <Paper sx={{ position: "sticky" }} elevation={4}>
        <BottomNavigation>
          <BottomNavigationAction
            label="facebook"
            icon={<Facebook />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="instagram"
            icon={<Instagram />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="twitter"
            icon={<Twitter />}
          ></BottomNavigationAction>
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MuiBottomNavigation;
