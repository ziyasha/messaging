import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [username, setUsername] =useState("");
  const [password, setPassword] =useState("");
  function handleChange(e)
{
  console.log(e)
}  return (
  <ScrollView>
    <View style={styles.container}>
     <View><Image source={require("./assets/logo-light--14qE-c1.png")} style={styles.pp}></Image></View>
      <View><Text></Text></View>
      <View>
        <Text style={styles.ii}>Adacode Solutions</Text>
      </View>
      <View style={styles.qq}>
      <View style={styles.dd}><TextInput onChangeText={value => console.log(value)} placeholder="Enter Username" style={styles.ff}></TextInput></View>
      <View><Text></Text></View>
      <View style={styles.dd}><TextInput onChangeText={value => console.log(value)} placeholder="Enter Password" style={styles.ff}></TextInput></View>
       <View><Text></Text></View>
        <View style={styles.gg}><Text>  <TouchableOpacity style={styles.button} onPress={()=> console.log("oo")}>
        <Text style={styles.bt}>login</Text>
      </TouchableOpacity>
</Text></View>
        <View></View>
     </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    height: 900,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qq:{
     borderRadius: 10,
      backgroundColor: "#3271a5",
      height: 400,
      width: 400,
      alignItems: 'center',
      justifyContent: 'center',
  },
  
  dd:{
    borderRadius: 8,
    backgroundColor: 'white',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  gg:{
    backgroundColor: "white",
    borderRadius: 6,
    fontSize: 5,
    height: 35,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  bt:{
    color: "#4194cb",
    alignItems: 'center',
    justifyContent: 'center', 
  },
  ii:{
    height: 80,
    fontSize: 30,
  },
  pp:{
    
    height: 200,
    width: 200,
    
  },
  
});