import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import GroupPage from './screens/GroupPage';
import HomeScreen from './screens/HomeScreen';
import MessScreen from './screens/MessScreen';
import MessPage from './screens/MessPage';
import { RootStackParamList } from './types';



const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Home Page", headerTitleAlign:"center"}}/>
        <Stack.Screen name="messPage" component={MessPage} options={{title:"Mess Page"}}/>
      <Stack.Screen name="GroupPage" component={GroupPage} options={{title:"Group Page"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
