import { AppBarComponent } from "./AppBarComponent";
import ButtonComponent from "./ButtonComponent";
import CardComponant from "./CardComponant";
import LayoutComponent from "./LayoutComponent";
import MuiBottomNavigation from "./MuiBottomNavigation";

import TypographyComponent from "./TypographyComponent";

const MuiSandbox = () => {
  return (
    <>
      {/* <ButtonComponent></ButtonComponent> */}
      <TypographyComponent />
      <CardComponant />

      {/* <LayoutComponent></LayoutComponent> */}
      <AppBarComponent></AppBarComponent>
      <MuiBottomNavigation></MuiBottomNavigation>
    </>
  );
};

export default MuiSandbox;
