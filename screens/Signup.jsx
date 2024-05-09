import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
export default function App() {
    const navigator=useNavigation()

    return (
        <View style={styles.container}>
             <StatusBar style="auto"  ></StatusBar>
            <View style={styles.headview}>
            <Text style={styles.head}>Sign up</Text>
            </View>
            <View style={styles.mview}>
            <View style={styles.text}>
                <TextInput placeholder="email" style={styles.tinput}></TextInput>
            </View>
            <View style={styles.text}>
                <TextInput placeholder="password" style={styles.tinput}></TextInput>
            </View>
            <View>
            <View style={styles.tview}>
              <TouchableOpacity><Text style={styles.stext}>sign up</Text></TouchableOpacity>  
            </View>
            </View>
            <View style={styles.imview}><TouchableOpacity><Image source={require("../assets/g.jpeg")} style={styles.img}></Image></TouchableOpacity></View>
             </View> 
            <View style={styles.bview}><Text style={styles.user}>Already a user?</Text>
            <TouchableOpacity onPress={() => navigator.navigate("Login")}><Text style={styles.log}>Log in</Text></TouchableOpacity>
            </View>    
        </View>
    )}
    const styles = StyleSheet.create({
        container:{
         flex: 1,
          
            
        },
        headview:{
            marginTop: 90,
            alignItems: 'center',
            height: 200,
        },
        head:{
            fontSize: 40,
            
        },
        mview:{
            gap: 20,
        },
        text:{
           height: 55,
           width: 350,
           borderWidth: 1,
           borderRadius: 15,
           marginLeft: 20,
           backgroundColor: '#EBEAEA',
           borderColor: '#9747FF',
        },
        tinput:{
            fontSize: 20,
            marginLeft: 10,
            height: 45,
        },
        tview:{
            height: 40,
            width: 100,
            borderWidth: 1,
            borderRadius: 15,
            marginLeft: 150,
            marginTop: 30,
            backgroundColor: '#EBEAEA', 
        },
        stext:{
            fontSize: 18,
            marginLeft: 22,
            marginTop: 5,
            color: '#9747FF',   
        },
        imview:{
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            width: 65,
            height: 65,
            marginLeft: 171,
            borderRadius: 20,
        },
        img:{
            height: 50,
            width: 50,
        },
        bview:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 70,
            gap: 5,
        },
        user:{
          fontSize: 15,
        },
        log:{
            fontSize: 15,
            color: 'blue',
            textDecorationLine: 'underline',
        },
    })