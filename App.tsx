import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import GroupPage from './screens/GroupPage';
import HomeScreen from './screens/HomeScreen';
import MessScreen from './screens/MessScreen';
import MessPage from './screens/MessPage';
import { RootStackParamList } from './types';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';



const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginPage' screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} options = {{title:"Login Page"}}/>
        <Stack.Screen name="Home" component={HomePage} options={{title:"Home Page", headerTitleAlign:"center"}}/>
        <Stack.Screen name="messPage" component={MessPage} options={{title:"Mess Page"}}/>
      <Stack.Screen name="GroupPage" component={GroupPage} options={{title:"Group Page"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
