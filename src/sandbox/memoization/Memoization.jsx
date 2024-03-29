import { AppBar, Toolbar } from "@mui/material";

import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const Memoization = () => {
  const memoized = (func) => {
    let cache = {
      // 1: {
      //     1: 2
      // },
      // 2: {
      //     1: 3,
      //     2: 4
      // }
    };

    return (...args) => {
      const [a, b] = args;
      const str = JSON.stringify(args);
      if (cache[str]) {
        return cache[str];
      } else {
        console.count("calculating");
        const result = func(a, b);
        cache = {
          ...cache,
          [str]: result,
        };
        return result;
      }
    };
  };

  const memoizedCalculation = memoized((a, b) => a + b);
  console.log(memoizedCalculation(1, 2));
  console.log(memoizedCalculation(2, 1));
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem
            label="use callback"
            to="use-callback"
            color="black"
          ></NavItem>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Memoization;
