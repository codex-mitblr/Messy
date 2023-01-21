import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "LoginPage">;

function Login() {
    const [text, onChangeText] = React.useState('');
    const [password, onPassword] = React.useState('')
    return (
    <View style={styles.login}>
        <TextInput style={styles.textinput} value={text} onChangeText={onChangeText} textContentType={'emailAddress'} placeholder='Email'/>
        <TextInput style={styles.textinput2} value={password} onChangeText={onPassword} textContentType={'password'} placeholder='Password'/>
        <TouchableOpacity style={styles.submit}>
            <View style={styles.button}>
                <Text>Submit</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

function SignUp(){
    const [text, onChangeText] = React.useState('')
    const [password, onPassword] = React.useState('')
    return(
        <View style={styles.signup}>
            <TextInput style={styles.textinput} value={text} onChangeText={onChangeText} textContentType={'emailAddress'} placeholder='Email'/>
            <TextInput style={styles.textinput2} value={password} onChangeText={onPassword} secureTextEntry={true} textContentType={'password'} placeholder='New Password'/>
            <TextInput style={styles.textinput2} value={password} onChangeText={onPassword} secureTextEntry={true} textContentType={'newPassword'} placeholder=' Confirm Password'/>
            <TouchableOpacity style={styles.submit}>
                <View style={styles.button}>
                    <Text>Submit</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const Tab = createBottomTabNavigator()

const LoginPage:React.FC<Props>=(route,navigation)=>{
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Sign Up' component={SignUp} />
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
        borderWidth:2,
        fontSize:20,
        margin:20,
    },
    textinput2:{    
        padding:10,
        width: Dimensions.get('window').width*0.8,
        borderColor:'black',
        borderWidth:2,
        fontSize:20,
        margin:20,
    },
    submit:{
        alignContent:'center',
        alignItems:'center',
    },
    login:{
        padding:20
    },
    signup:{
        padding:20
    },
    button:{
        elevation:5,
        backgroundColor:'grey',
        paddingVertical:10,
        paddingHorizontal:20
    }

})

export default LoginPage;