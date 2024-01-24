import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Logounikama from '../../../assets/images/logo.png';
import Latar from '../../../assets/images/latar.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [telp, setTelp] = useState('');
  const [prodi, setProdi] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (
      !nim ||
      !nama ||
      !telp ||
      !prodi ||
      !email ||
      !username ||
      !password
    ) {
      alert('Please fill in all the fields');
      return;
    }

    const serverUrl = 'http://192.168.18.2:3000/';
    axios.post(serverUrl, {
      nim,
      nama,
      telp,
      prodi,
      email,
      username,
      password,
    })
    .then(response => {
      const token = response.data.token;
      const username = response.data.username;
      alert(`Registered as: ${username}`);
      navigation.navigate('Login');
    })
    .catch(error => {
      console.log(error.response.data);
      alert('Registration failed');
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.container}>
        <Image source={Latar} style={styles.backgroundImage} />
        <Image source={Logounikama} style={styles.unikama} />
        <View style={styles.registerContent}>
          <Text selectable={false} style={styles.header}>Register</Text>
          <TextInput
            placeholder="NIM"
            value={nim}
            onChangeText={(text) => setNim(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Name"
            value={nama}
            onChangeText={(text) => setNama(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            value={telp}
            onChangeText={(text) => setTelp(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Program Studi"
            value={prodi}
            onChangeText={(text) => setProdi(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={nim && nama && telp && prodi && email && username && password ? false : true}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Sudah memiliki akun? Login disini</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  registerContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'flex-end', // Menggunakan 'flex-end' untuk meletakkan konten di bagian bawah
    flexDirection: 'column',
    height: '80%',
    flex: 0.7, // Menambahkan properti 'flex' untuk mengisi ruang ke atas
  },
  
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#3435AA',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontWeight: '500',
    backgroundColor: '#C0C0C0',
    fontSize: 12,
  },
  unikama: {
    position: 'absolute',
    top: '2%',
    width: '30%',
    height: '20%',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  unikamaText: {
    color: '#000000',
    position: 'absolute',
    top: '20%',
    fontSize: 17,
  },
  blueText: {
    color: 'blue',
    fontSize: 17,
  },
  registerButton: {
    backgroundColor: '#3435AA',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    marginBottom: 10,
    opacity: 0.5,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3435AA',
  },
  loginButtonText: {
    color: '#3435AA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  register: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
},
});

export default Register;