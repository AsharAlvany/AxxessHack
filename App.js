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
import Colors from "./constants/Colors";

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
                        return <Pill strokeWidth={4} stroke={focused ? Colors.darkBlue : Colors.lightBlue}/>
                    }
                    else if (rn === badgesName) {
                        return <Star strokeWidth={4} stroke={focused ? Colors.darkBlue : Colors.lightBlue}/>
                    }
                    else if (rn === settingsName) {
                        return <Set strokeWidth={4} stroke={focused ? Colors.darkBlue : Colors.lightBlue}/> 
                    }
                },
                tabBarActiveTintColor: "#FF403b",
                tabBarInactiveTintColor: "#B4B4B4",
                tabBarStyle: {
                    paddingTop: 24,
                    backgroundColor: Colors.cream,
                    height: "10%",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 12,
                    // },
                    // shadowOpacity: 0.58,
                    // shadowRadius: 16.0,
                    borderTopWidth: 3,
                    borderTopColor: Colors.lightBlue,
                    bottomPadding: 0,
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                tabBarShowLabel: false,
                tabBarItemStyle: styles.tabBarItemStyle,
                // tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: {
                    margin: 0,
                    padding: 0,
                    position: 'absolute'
                }
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
  tabBarItemStyle: {
    // backgroundColor: "red",
    margin: 0,
    padding: 0,
  },

});
