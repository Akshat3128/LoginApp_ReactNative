import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginForm />
    </SafeAreaView>
  );
}