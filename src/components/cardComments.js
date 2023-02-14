import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Comments = (props) => {
  return <View style={styles.commentCard}>
    <View style={styles.commentCardFlex} >
      <Text style={styles.commentCardTitle} >Ulasan</Text>
      <Text style={styles.commentCardCount} >Semua Komentar(0)</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  commentCard: {
    margin: 20
  },
  commentCardFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commentCardTitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16
  },
  commentCardCount: {
    color: '#65c1cb',
    fontWeight: 'bold'
  }
})

export default memo(Comments)