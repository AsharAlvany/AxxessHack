import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DrugInput from "./components/input.js"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./screens/Home"
import Badges from "./screens/Badges"
import Settings from "./screens/Settings"

export default function App() {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === "Home") {
                        return <Pill strokeWidth={4}/>
                    }
                    else if (rn === "Badges") {
                        return <Star strokeWidth={4}/>
                    }
                    else if (rn === "Settings") {
                        return <Set strokeWidth={4}/>
                    }

                    return <Icon name={iconName} size={size} color={color} />

                },
                tabBarActiveTintColor: "#FF403b",
                tabBarInactiveTintColor: "#B4B4B4",
                tabBarStyle: {
                    backgroundColor: "#0F0D10",
                    height: "11%",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    borderTopWidth: 0,
                },
            })}
        >

            <Tab.Screen styles={styles.bottomTab} options={{ headerShown: false }} name={"Home"} component={Home} />
            <Tab.Screen options={{ headerShown: false }} name={"Badges"} component={Badges} />
            <Tab.Screen options={{ headerShown: false }} name={"Settings"} component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // drugInput: {
  //   flex: 1,
  //   // height: "100%",
  //   width: "100%",
  //   backgroundColor: 'red',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
