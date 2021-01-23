import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginPost } from '../store/auth/effects';


export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const login = () => {
    if (username.trim() === '' || password.trim() === '') {
      return;
    }
    dispatch(loginPost(username, password));
  }
  return (
    <View style={ styles.container } >
      <View style={ styles.inputView } >
        <TextInput
          style={ styles.inputText }
          placeholder='Username...'
          value={ username }
          placeholderTextColor='#003f5c'
          onChangeText={ e => { setUsername(e) } } />

      </View>
      <View style={ styles.inputView } >
        <TextInput
          style={ styles.inputText }
          placeholder='Password...'
          value={ password }
          placeholderTextColor='#003f5c'
          onChangeText={ e => { setPassword(e) } } />
      </View>


      <TouchableOpacity style={ styles.loginBtn } onPress={ login } >
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: 'white'
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: 'white'
  }
});
