import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { style } from './style';

const OtpHeader = () => {
  return (
    <>
      <Text variant="headlineMedium" style={style.title}>
        Verification Code
      </Text>
      <View style={style.descriptionContainer}>
        <Text variant="headlineMedium" style={style.descriptionText}>
          Enter the OTP from SMS that we’ve sent
        </Text>

        <Text variant="bodyMedium" style={style.phoneText}>
          to
          <Text variant="bodyMedium" style={style.phoneNumber}>
            {' '}
            +970597624323
          </Text>
        </Text>
      </View>
      <Text variant="titleSmall" style={style.timerText}>
        2:03
      </Text>
    </>
  );
};

export default OtpHeader;
