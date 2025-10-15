import ResetForm from '@/components/organisms/reset-form';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './style';

const ResetPage = () => {
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Reset your Password
        </Text>
        <ResetForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPage;
