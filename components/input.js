import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';


export default function DrugInput() {
    const[drugSuggestions, setDrugSuggestions] = useState([]);
    const[input, setInput] = useState("");
    useEffect(()=>{
        (async function updateDrugs() {
            let response = await fetch(`http://72.182.161.176:4545/test/${input}`);
            setDrugSuggestions(response); 
            // console.log(respne);
        })();
    }, [input])
    useEffect(() =>{
        console.log(drugSuggestions);
    }, [drugSuggestions])
  return (
    <View style={styles.container}>
        <Autocomplete
        autoCorrect={false}
        data={drugSuggestions}
        onChangeText={setInput}
        placeholder={"Drug Name..."}
        renderItem={data => (
            <TouchableOpacity onPress={() => {
                setInput(data.drugName);
                console.log(data.drugName);
            }}>
                <Text style={styles.itemText}>{data.drugName}</Text>
            </TouchableOpacity>
        )}
        containerStyle={styles.textInput}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "40%",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput:{
    width: "80%",
    height: "60%",
    padding: "5%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
});
