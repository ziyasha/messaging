import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

export default function Groups(){
    return(
        <View style={styles.container}>
            <Text style={styles.groups}>Groups</Text>
            <ScrollView style={styles.set}>
         <View style={styles.head}>
            <View style={styles.profile}><Image source={require("../assets/th.png")} style={styles.image}></Image></View>
            <View style={styles.msg}>
            <View><Text style={styles.text}>Adacode Chat</Text></View>
            <Text>You: Hello World</Text></View>
         </View>
         <View style={styles.head}>
            <View style={styles.profile}><Image source={require("../assets/th.png")} style={styles.image}></Image></View>
            <View style={styles.msg}>
            <View><Text style={styles.text}>Adacode Chat</Text></View>
            <Text>You: Hello World</Text></View>
         </View>
         <View style={styles.head}>
            <View style={styles.profile}><Image source={require("../assets/th.png")} style={styles.image}></Image></View>
            <View style={styles.msg}>
            <View><Text style={styles.text}>Adacode Chat</Text></View>
            <Text>You: Hello World</Text></View>
         </View>
         
         
         </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
     
    },
    groups:{
        marginTop: 70,
        fontSize: 30,
        marginLeft: 20,
    },
    set:{

    },
    head:{
     marginTop: 30,
     marginLeft: 15,
     backgroundColor: '#9747FF',
     alignItems: 'center',
     justifyContent: 'flex-start',
     height: 80,
     width: 380,
    flexDirection: 'row',
    gap: 15,
    borderRadius: 10,
    
    },
    profile:{
        
       
     },
    image:{
        height: 50,
        width: 50,
        borderRadius: 100,
       margin: 5, 
    },
    text:{
        fontSize: 25,
        color: "white",
        
        
    },
   
})