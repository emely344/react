import { AppBar, Box, Toolbar } from "@mui/material";
import LeftNavBar from "./Left-navigation/LeftNavBar";
import SearchBar from "./right-navigation/SearchBar";
import RightNavBar from "./right-navigation/RightNavBar";
import MenuProvider from "./menu/MenuProvider";

export const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <SearchBar />
          </Box>
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
};
export default NavBar;
