import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const navigator=useNavigation()
  const [username, setUsername] =useState("");
  const [password, setPassword] =useState("");
  function handleChange(e)
{
  console.log(e)
}  return (
  <ScrollView>
    <View style={styles.container}>
    <View style={styles.gifv}><Image source={require("../assets/chat.gif")} style={styles.gif1}></Image></View>
      <View><Text></Text></View>
      <View>
        <Text style={styles.ii}>SAFE CHAT</Text>
      </View>
      <View style={styles.qq}>
      <View style={styles.dd}><TextInput onChangeText={value => console.log(value)} placeholder="Enter Username" onChangeText= {value =>setUsername(value)} style={styles.ff}></TextInput></View>
      <View><Text></Text></View>
      <View style={styles.dd}><TextInput onChangeText={value => console.log(value)} placeholder="Enter Password" onChangeText= {value =>setPassword(value)} style={styles.ff}></TextInput></View>
       <View><Text></Text></View>
        <View style={styles.gg}><Text>  <TouchableOpacity style={styles.button} onPress={()=> navigator.navigate("Chat")}>
        <Text style={styles.bt}>login</Text>
      </TouchableOpacity>
</Text></View>
<View><Text></Text></View>

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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gifv:{},
  gif1:{
    height: 100,
    width: 100,
  },
  qq:{
     borderRadius: 10,
      backgroundColor: "#9747FF",
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
  jj:{
    height: 100,
  },
  pp:{
    
    height: 100,
    width: 100,
    
  },
  
});