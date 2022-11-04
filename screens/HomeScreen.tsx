import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { RootStackParamList } from '../types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from 'firebase/auth';
import { provider } from '../FirebaseFunctions';
import { firebase } from '../FirebaseConfig'

const HomeScreen = () => {
  const [user, setUser] = useState<User>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const discovery = useAutoDiscovery('https://login.microsoftonline.com/f0ee14ae-dd70-4d49-9459-ca2044a434e5/v2.0');
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '3d405eae-91ae-4556-96ae-b284ab02febe',
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        scheme: 'exp://192.168.0.105:19000'
      }),
    },
    discovery
  );
  console.log(response);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((e) => {
      if(e){

      }
    });
    firebase
  }, [])
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
        onPress={async () => {
          firebase.auth().signInWithRedirect(provider)

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