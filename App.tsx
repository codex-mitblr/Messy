import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MessScreen from './screens/MessScreen';
import { RootStackParamList } from './types';



const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Home Page", headerTitleAlign:"center"}}/>
      <Stack.Screen name="messPage" component={MessScreen} options={{title:"Mess Page"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}