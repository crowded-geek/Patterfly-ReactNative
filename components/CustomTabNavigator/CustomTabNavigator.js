import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import PageA from "../../views/Home/PageA";
import AlertPage from "../../views/Home/AlertPage";
import DataList from "../../views/Home/DataList";
import CardPage from "../../views/Home/CardPage";
import ModalPage from "../../views/Home/ModalPage";
import ButtonPage from "../../views/Home/ButtonPage";
import LoginPage from "../../views/Home/LoginPage";

const CustomTabNavigator = createMaterialTopTabNavigator(
  {
    PageA: {
      navigationOptions: {
        tabBarLabel: "Home"
      },
      screen: PageA
    },
    AlertPage: {
      navigationOptions: {
        tabBarLabel: "Alert"
      },
      screen: AlertPage
    },
    DataList: {
      navigationOptions: {
        tabBarLabel: "Data List"
      },
      screen: DataList
    },
    CardPage: {
      navigationOptions: {
        tabBarLabel: "Card"
      },
      screen: CardPage
    },
    ModalPage: {
      navigationOptions: {
        tabBarLabel: "Modal"
      },
      screen: ModalPage
    },
    ButtonPage: {
      navigationOptions: {
        tabBarLabel: "Buttons"
      },
      screen: ButtonPage
    },
    LoginPage: {
      navigationOptions: {
        tabBarLabel: "Login"
      },
      screen: LoginPage
    },
  },
  {
    'lazy': true,
    tabBarOptions: {
      scrollEnabled: true,
    },
  }
);

export default CustomTabNavigator;
