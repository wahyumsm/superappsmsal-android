import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MSAL GROUP</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {color: '#000000'}]}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
          autoCapitalize="none"
          placeholderTextColor="#000000"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {color: '#000000'}]}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          placeholderTextColor="#000000"
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f3',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4dc257',

    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4dc257',
  },

  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#d3d3d3',
    borderWidth: 3,
    borderRadius: 8,
    backgroundColor: '#ecf0f3',
    marginBottom: 16,
    paddingLeft: 8,
  },
  loginButton: {
    backgroundColor: '#03ac0e',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
