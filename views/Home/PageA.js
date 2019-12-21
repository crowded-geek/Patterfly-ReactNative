import { createStackNavigator } from "react-navigation-stack";

import Main from "./PageA/Main";

const PageANavigator = createStackNavigator({
  Main: {
    navigationOptions: {
      header: null
    },
    screen: Main
  },
});

PageANavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  swipeEnabled: navigation.state.index === 0
});

export default PageANavigator;
