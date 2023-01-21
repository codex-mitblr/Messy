import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import GroupPage from './screens/GroupPage';
import HomeScreen from './screens/HomeScreen';
import MessScreen from './screens/MessScreen';
import MessPage from './screens/MessPage';
import { RootStackParamList } from './types';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import Splash from './screens/Splash'
import NewPost from './screens/NewPost';


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='NewPost' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} options={{title: 'Splash Page'}}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options = {{title:"Login Page"}}/>
        <Stack.Screen name="Home" component={HomePage} options={{title:"Home Page", headerTitleAlign:"center"}}/>
        <Stack.Screen name="messPage" component={MessPage} options={{title:"Mess Page"}}/>
        <Stack.Screen name="GroupPage" component={GroupPage} options={{title:"Group Page"}}/>
        <Stack.Screen name="NewPost" component={NewPost} options={{title:"New Insight"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
