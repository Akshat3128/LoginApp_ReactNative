import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

const isValidEmail = (email) => {
  const basicEmailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const endsWithGmail = email.toLowerCase().endsWith('@gmail.com');
  return basicEmailCheck && endsWithGmail;
};

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }
    Alert.alert('Login Details', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyApp Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={secure}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Icon
            name={secure ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.links}>
        <Text style={styles.link}>Forgot Password?</Text>
        <Text style={styles.link}>Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#007BFF',
  },
});