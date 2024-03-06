import { Favorite, Info, Portrait } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/UserProvider";

const Footer = () => {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const { user } = useUser();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BottomNavigationAction
          onClick={() => navigateTo(ROUTES.ABOUT)}
          label="About"
          icon={<Info />}
        />
        {user && (
          <BottomNavigationAction
            onClick={() => navigateTo(ROUTES.FAV_CARDS)}
            label="Favorite"
            icon={<Favorite />}
          />
        )}
        {user && user.isBusiness && (
          <BottomNavigationAction
            onClick={() => navigateTo(ROUTES.MY_CARDS)}
            label="My Cards"
            icon={<Portrait />}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};
export default Footer;
