
import { NavigationContainer } from '@react-navigation/native';
import Chat from './screens/Chat';
import Login from './screens/Login';
import Groups from './screens/Groups';
import Signup from './screens/Signup';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }}/>
      <Stack.Screen name="Groups" component={Groups} options={{ headerShown: false, }}/>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false, }}/>


      </Stack.Navigator>
      </NavigationContainer>

 )};