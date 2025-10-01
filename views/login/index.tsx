import ThemedText from '@/components/atoms/typography/ThemedText';
import LoginForm from '@/components/organisms/login-form';
import SocialAuth from '@/components/organisms/SocialAuth';
import { Link } from 'expo-router';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { styles } from './style';

const LoginPage = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        <LoginForm />
        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>Don’t have an account?</ThemedText>
          <Link href="/login" style={styles.link}>
            Sign up
          </Link>
        </View>
        <SocialAuth />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;