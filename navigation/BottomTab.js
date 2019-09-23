import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators

import ProfileStack from "./ProfileStack";
import Login from "../components/Login";
import CorpeStack from "../navigation//CorpseStack";

const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: ProfileStack,

    CorpseTab: CorpeStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "CorpseTab") {
          iconName = "skull-crossbones";
          iconType = "FontAwesome5";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
