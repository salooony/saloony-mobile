import OtpForm from '@/components/organisms/otp-form';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { style } from './style';
import OtpHeader from '@/components/atoms/ottp-header';
import OtpFooter from '@/components/atoms/OtpFooter';

const OtpPage = () => {
  return (
    <KeyboardAvoidingView
      style={style.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <OtpHeader />
        <OtpForm />
        <OtpFooter />
        <View style={style.loginButtonContainer}>
          <Button mode="contained" style={style.button} labelStyle={style.label}>
            Login
          </Button>
          <Text variant="labelMedium" style={style.backText}>
            Back to Login
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpPage;
