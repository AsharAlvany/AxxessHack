import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DrugInput from "./components/input.js";
import Opening1 from "./screens/Opening1.js";
import Opening2 from "./screens/Opening2.js";
import Opening3 from "./screens/Opening3.js";
import MyPills from "./screens/MyPills.js";


export default function App() {
  return (
    //<SafeAreaView style={styles.SafeAreaView}>
      <MyPills/>
    //</SafeAreaView>
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
