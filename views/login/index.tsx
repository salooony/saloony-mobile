import ThemedText from '@/components/atoms/typography/ThemedText';
import LoginForm from '@/components/organisms/login-form';
import SocialAuth from '@/components/organisms/SocialAuth';
import { ROUTES } from '@/constants/routes';
import { Link } from 'expo-router';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { style } from '../otp/style';
import { styles } from './style';

const LoginPage = () => {
  return (
    <KeyboardAvoidingView
      style={style.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        <LoginForm />
        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>Don’t have an account?</ThemedText>
          <Link href={ROUTES.SIGNUP} style={styles.link}>
            Sign up
          </Link>
        </View>
        <SocialAuth />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;