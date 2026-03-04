import { View } from 'react-native';
import React from 'react';
import { ROUTES } from '@/constants/routes';
import ThemedText from '../typography/ThemedText';
import { style } from './style';
import { Link } from 'expo-router';

const OtpFooter = () => {
  return (
    <View style={style.footer}>
      <ThemedText style={style.footerText}>Didn&apos;t receive the OTP?</ThemedText>
      <Link href={ROUTES.LOGIN} style={style.link}>
        RESEND
      </Link>
    </View>
  );
};

export default OtpFooter;
