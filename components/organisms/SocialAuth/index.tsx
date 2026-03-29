import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Line from '@/components/atoms/line';
import ThemedText from '@/components/atoms/typography/ThemedText';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const SocialAuth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Line />
        <ThemedText type="buttonText">Or Sign up with</ThemedText>
        <Line />
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/google.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/facebook.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialAuth;
