import { ROUTES } from '@/constants/routes';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import ThemedText from '../typography/ThemedText';
import { style } from './style';

const OtpFooter = () => {
  return (
    <View style={style.footer}>
      <ThemedText style={style.footerText}>{"Didn't receive the OTP?"}</ThemedText>
      <Link href={ROUTES.LOGIN} style={style.link}>
        {'RESEND'}
      </Link>
    </View>
  );
};

export default OtpFooter;
