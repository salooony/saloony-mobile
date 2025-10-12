import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import ForgetForm from '@/components/organisms/forget-form';
import { Text } from 'react-native-paper';

const ForgetPage = () => {
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
         <Text variant="headlineMedium" style={styles.title}>
        Forgot Your Password
      </Text>
      <View style={styles.descriptionContainer}>
        <Text variant="bodyMedium" style={styles.descriptionText}>
          Enter your Email Address to send you a Verification Code on SMS
        </Text>
      </View>
        <ForgetForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgetPage;