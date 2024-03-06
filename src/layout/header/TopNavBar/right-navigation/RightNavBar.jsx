import { Box, IconButton } from "@mui/material";
import SearchBar from "./SearchBar";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import MenuBar from "./MenuBar";
import { useState } from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { DarkMode } from "@mui/icons-material";
import { useUser } from "../../../../users/UserProvider";

const RightNavBar = () => {
  const [anchorEl, setAncor] = useState(null);
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();

  const closeMenu = () => {
    setAncor(null);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />
        <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkMode />}
        </IconButton>

        {!user && <NotLogged />}
        {user && <Logged />}
      </Box>
      <MoreButton />
      <MenuBar isMenuOpen={Boolean(anchorEl)} onCloseMenu={closeMenu}></MenuBar>
    </>
  );
};
export default RightNavBar;
