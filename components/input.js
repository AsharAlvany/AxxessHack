import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';


export default function DrugInput() {
    const[drugSuggestions, setDrugSuggestions] = useState([]);
    const[input, setInput] = useState("");
    useEffect(()=>{
        (async function updateDrugs() {
            fetch(`http://72.182.161.176:4545/test/${input}`)
            .then((response) => response.json())
            .then((json) => {
              console.log(`Response: ${json}`);
              setDrugSuggestions(json); 
            })
        })();
    }, [input])
    useEffect(() =>{
        console.log(drugSuggestions);
    }, [drugSuggestions])
  return (
    <View style={styles.container}>
        <Autocomplete
        autoCorrect={false}
        data={input == '' ? [] : drugSuggestions}
        onChangeText={setInput}
        placeholder={"Drug Name..."}
        value={input}
        // renderItem={data => (
        //     <TouchableOpacity onPress={() => {
        //         setInput(data.drugName);
        //         console.log(data.drugName);
        //     }}>
        //         <Text style={styles.itemText}>{data.drugName}</Text>
        //     </TouchableOpacity>
        // )}
        flatListProps={{
          keyboardShouldPersistTaps: 'always',
            keyboardDismissMode: "none",
            renderItem: ({ item }) => (
              <TouchableOpacity onPress={() => setInput(item.drugName)}>
                <Text style={styles.itemText}>{item.drugName}</Text>
              </TouchableOpacity>
            ),
          }}
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.containerStyle}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "10%",
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer:{
    width: "100%",
    height: "75%",
    padding: "5%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  containerStyle:{
    width: "80%"
  },
});
