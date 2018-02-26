import { StackNavigator, TabNavigator } from "react-navigation";
import Day20 from "../containers/Day20";
import Day21 from "../containers/Day21";
import Day22 from "../containers/Day22";
import Day17 from "../containers/Day17";
import Day16 from "../containers/Day16";
import Day7 from "../containers/Day7";
import Day14 from "../containers/Day14";
import Day5 from "../containers/Day5";
import Day23 from "../containers/Day23";
import Sphere from "../containers/Sphere";
import Poincare from "../containers/Poincare";
import Day27 from "../containers/Day27";

const AppNavigation = StackNavigator(
  {
    Day20: { screen: Day20 },
    Day21: { screen: Day21 },
    Day22: { screen: Day22 },
    Day17: { screen: Day17 },
    Day16: { screen: Day16 },
    Day7: { screen: Day7 },
    Day14: { screen: Day14 },
    Day5: { screen: Day5 },
    Day23: { screen: Day23 },
    Day27: { screen: Day27 },
    Sphere: { screen: Sphere },
    Poincare: { screen: Poincare }
  },
  {
    initialRouteName: "Day27"
  }
);

export default AppNavigation;
