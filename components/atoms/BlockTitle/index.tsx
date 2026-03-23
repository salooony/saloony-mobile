import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './style';

const BlockTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.sectionTitleWrap}>
      <Text variant="titleMedium" style={styles.sectionTitle}>
        {title}
      </Text>
    </View>
  );
};

export default BlockTitle;
