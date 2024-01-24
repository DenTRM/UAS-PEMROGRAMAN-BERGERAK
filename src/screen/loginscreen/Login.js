import React, { useState, useEffect } from 'react';
import Logounikama from '../../../assets/images/logo.png';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Latar from '../../../assets/images/latar.png';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import axios from 'axios';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mahasiswa, setMahasiswa] = useState([]);

    const handleLogin = () => {
        const serverUrl = 'http://192.168.18.2:3000/login';
        axios.post(serverUrl, {
            username,
            password,
        })
        .then(response => {
            const token = response.data.token;
            const username = response.data.username;
            alert(`Terlogin sebagai: ${username}`);
            navigation.navigate('Upload');
        })
        .catch(error => {
            console.log(error.response.data);
            alert('Login gagal');
        });
    };

    const handleHelp = () => {
        alert('Tampilkan halaman bantuan');
    };
    const handleRegister = () => {
        navigation.navigate('Upload');
    };

    return (
        <View style={styles.container}>
            <Image source={Latar} style={styles.backgroundImage} />
            <Image source={Logounikama} style={styles.unikama} />
            <Text style={styles.unikamaText}>
                Aplikasi <Text style={styles.blueText}>Unggah Mandiri</Text> Karya Ilmiah
            </Text>
            <View style={styles.loginContent}>
                <Text selectable={false} style={styles.header}>Sign in to</Text>
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
                <Button title="Sign in" onPress={handleLogin} />
                <TouchableOpacity onPress={handleHelp}>
                    <Text style={styles.bantuan}>Bantuan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.register}>Belum memiliki akun? Daftar sekarang</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const backgroundImage = require('../../../assets/images/background.jpg');

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
    loginContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '75%',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '40%',
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
    bantuan: {
        color: 'blue',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    register: {
        color: '#3435AA',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Login;
