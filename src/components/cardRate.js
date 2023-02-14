import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import iconStar from '../assets/star.png'
import iconArrowRight from '../assets/arrow_right.png'

const CardRate = (props) => {
  return <View style={styles.card}>
    <View style={styles.flexBetween}>
      <Text style={styles.rate} >24.5K</Text>
      <Text>Pembaca</Text>
    </View>
    <View style={styles.borderCenter} />
    <View style={styles.flexBetween}>
      <View style={styles.flexRow}>
        <Image source={iconStar} style={[styles.imageIcon, { marginRight: 5 }]} />
        <Text style={styles.rate} >4.9</Text>
      </View>
      <View style={styles.flexRow}>
        <Text>Komentar</Text>
        <Image source={iconArrowRight} style={styles.imageIcon} />
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 20
  },
  flexBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  borderCenter: {
    height: '100%',
    width: 1,
    backgroundColor: '#d1d1d1'
  },
  rate: {
    fontWeight: 'bold',
    color: '#000'
  },
  imageIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
})

export default memo(CardRate)