import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";

const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onCloseMenu();
  };

  return (
    <Menu
      open={isMenuOpen}
      onClose={onCloseMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {user && (
        <Box>
          <NavBarLink to={ROUTES.USER_PROFILE}>
            <MenuItem onClick={onCloseMenu}>Profile</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.EDIT_USER}>
            <MenuItem onClick={onCloseMenu}>Edit account</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </NavBarLink>
        </Box>
      )}
      <NavBarLink to={ROUTES.ABOUT}>
        <Button color="inherit">
          <Typography>About</Typography>
        </Button>
      </NavBarLink>
      {!user && (
        <Box>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              Login
            </MenuItem>
          </NavBarLink>

          <NavBarLink to={ROUTES.SIGNUP}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              SignUp
            </MenuItem>
          </NavBarLink>
        </Box>
      )}
    </Menu>
  );
};

export default MenuBar;
