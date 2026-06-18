import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native';
import styles from "./style";
import { SEARCH_TEXTS } from '@/constants/search.constants';

const CityCard = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      <View style={styles.cardContent}>
        <Text style={styles.cardSubtitle}>{SEARCH_TEXTS.DISCOVER_OUR}</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CityCard

