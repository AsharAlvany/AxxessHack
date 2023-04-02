import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DrugInput from "../components/input.js"

export default function Settings() {
  return (
    <DrugInput/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
