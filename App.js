import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import DrugInput from "./components/input.js";
import Pill from "./components/Pill";
import Star from "./components/Star";
import Set from "./components/Set";
import Opening1 from "./screens/Opening1.js";
import Opening2 from "./screens/Opening2.js";
import Opening3 from "./screens/Opening3.js";

import MyPills from "./screens/MyPills"
import Badges from "./screens/Badges"
import Settings from "./screens/Settings"

const myPillsName = "My Pills";
const badgesName = "Badges";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator
            initialRouteName={myPillsName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === myPillsName) {
                        return <Pill strokeWidth={4}/>
                    }
                    else if (rn === badgesName) {
                        return <Star strokeWidth={4}/>
                    }
                    else if (rn === settingsName) {
                        return <Set strokeWidth={4}/>
                    }

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

            <Tab.Screen styles={styles.bottomTab} options={{ headerShown: false }} name={myPillsName} component={MyPills} />
            <Tab.Screen options={{ headerShown: false }} name={badgesName} component={Badges} />
            <Tab.Screen options={{ headerShown: false }} name={settingsName} component={Settings} />
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
