import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './src/config/firebase'

export default function App() {
  const [estado, setEstado] = useState({
    email: '',
    senha: ''
  })

  const auth = getAuth()

  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' value={estado.email} onChangeText={(value) => {
        setEstado({...estado, email: value})
      }} style={{borderWidth: 1, borderColor: '#c8c8c8', height: 40, width: 200, padding: 5, borderRadius: 15}}></TextInput>
      <TextInput placeholder='Senha' value={estado.senha} onChangeText={(value) => {
        setEstado({...estado, senha: value})
      }} style={{borderWidth: 1, borderColor: '#c8c8c8', height: 40, width: 200, padding: 5, borderRadius: 15}}></TextInput>

      <Button title='Create user' onPress={async () => {
        try {
          await createUserWithEmailAndPassword(auth, estado.email, estado.senha);
          console.log("User created.");
        } catch(error) {
          console.log(error);
        }

      }}/>
      <Button title='Login' onPress={async () => {
        try {
          await signInWithEmailAndPassword(auth, estado.email, estado.senha);
          console.log('Loggin Sucessfull!');
        } catch(error) {
          console.log(error);
        }
      }}/>

      <Button title='Exit' onPress={() => {
        try {
          signOut(auth);
          console.log('Saiu!');
        } catch(error) {
          console.log(error);
        }
      }}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
