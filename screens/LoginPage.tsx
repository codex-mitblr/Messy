import React from 'react'
import { StyleSheet,Image, TextInput, TouchableOpacity, View, Text, Dimensions} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "LoginPage">;

const loginuri = "https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
const signupuri = "https://www.bluehelmet.in/static/media/signupImage.811c567c19f6d26b823f.webp"

function Login() {
    const navigator = useNavigation()
    const [text, onChangeText] = React.useState('');
    const [password, onPassword] = React.useState('')
    return (
    <View style={styles.login}>
        <Image style={styles.image} source={{uri:loginuri}}/>
        <View>

        <TextInput style={styles.textinput} value={text} onChangeText={onChangeText} textContentType={'emailAddress'} placeholder='Email'/>
        <TextInput style={styles.textinput2} value={password} onChangeText={onPassword} textContentType={'password'} placeholder='Password'/>
        <TouchableOpacity style={styles.submit} onPress={()=>{navigator.navigate("Home")}}>
            <View style={styles.button}>
                    <Text style={{color:'white'}}>SUBMIT</Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

function SignUp(){
    const navigator = useNavigation()
    const [text, onChangeText] = React.useState('')
    const [password, onPassword] = React.useState('')
    return(
        <View style={styles.signup}>
            <Image style={styles.image} source={{uri:signupuri}}/>
            <View>

            <TextInput style={styles.textinput} value={text} onChangeText={onChangeText} textContentType={'emailAddress'} placeholder='Email'/>
            <TextInput style={styles.textinput2} value={password} onChangeText={onPassword} secureTextEntry={true} textContentType={'password'} placeholder='New Password'/>
            <TextInput style={styles.textinput2} value={password} onChangeText={onPassword} secureTextEntry={true} textContentType={'newPassword'} placeholder=' Confirm Password'/>
            <TouchableOpacity style={styles.submit} onPress={()=>{navigator.navigate("Home")}}>
                <View style={styles.button}>
                    <Text style={{color:'white'}}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const Tab = createBottomTabNavigator()

const LoginPage:React.FC<Props>=(route,navigation)=>{
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen options={{tabBarIconStyle:{display:'none'},tabBarLabelStyle:{position:'absolute',top:0,bottom:0,textAlignVertical:'center',fontSize:15}}} name='Login' component={Login} />
            <Tab.Screen options={{tabBarIconStyle:{display:'none'},tabBarLabelStyle:{position:'absolute',top:0,bottom:0,textAlignVertical:'center',fontSize:15}}} name='Sign Up' component={SignUp} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
    },
    textinput:{
        padding:10,
        width: Dimensions.get('window').width*0.8,
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
        fontSize:20,
        margin:10,
    },
    textinput2:{    
        padding:10,
        width: Dimensions.get('window').width*0.8,
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
        fontSize:20,
        margin:10,
    },
    submit:{
        alignContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    login:{
        padding:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        height:Dimensions.get("window").height,
        backgroundColor:"white",
    },
    signup:{
        padding:20,
        justifyContent:'space-evenly',
        height:Dimensions.get("window").height,
        alignItems:'center',
        backgroundColor:"white"
    },
    button:{
        elevation:5,
        backgroundColor:'#6C83FF',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20,
    },
    image:{
        height:400,
        width:360,
    }

})

export default LoginPage;