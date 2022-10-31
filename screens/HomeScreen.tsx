import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { OAuthCredential, OAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { auth, provider } from '../FirebaseAuthFunctions';
import { RootStackParamList } from '../types';



const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const discovery = useAutoDiscovery('https://login.microsoftonline.com/f0ee14ae-dd70-4d49-9459-ca2044a434e5/v2.0');
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '2c75a943-f8f6-4cd8-bf82-e819c1fc15c4',
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        scheme: 'exp://192.168.0.105:19000'
      }),
    },
    discovery
  );
  console.log(response)
const [user, setUser] = useState<OAuthCredential| null>();
const authFunciton = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.    
    // Get the OAuth access token and ID Token
    const credential = OAuthProvider.credentialFromResult(result);
    setUser(credential);
  })
  .catch((error) => {
  });
}
  return (
    <View style={styles.container}>
      <Button onPress={() => {
        navigation.navigate('messPage', { mess: "veg mess" })
      }} mode="contained" style={styles.MessButtons}>Veg Mess</Button>
      <Button onPress={() => { navigation.navigate('messPage', { mess: "Non-veg mess" }) }} mode="contained" style={styles.MessButtons}>Non-Veg Mess</Button>
      <Button onPress={() => { navigation.navigate("GroupPage", { groupID: "groupA001" }) }}>
        Group A
      </Button>
      <Button
        onPress={() => {
          authFunciton();
        }}>
        login
      </Button>
      <Text>
        {JSON.stringify(response)}
      </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  MessButtons: {
    margin: 10
  }
})
export default HomeScreen