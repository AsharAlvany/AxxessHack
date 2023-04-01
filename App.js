import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DrugInput from "./components/input.js"


export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <DrugInput/>
    </SafeAreaView>
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
