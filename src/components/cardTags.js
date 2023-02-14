import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Config from '../constants/Config';

const Tags = (props) => {
  return <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsScroll} >
    {Config.category.map((value, index) => <TouchableOpacity key={`${value},${index}`}>
      <View style={[styles.tagsCard, { marginLeft: index ? 0 : 20 }]} >
        <Text style={styles.tagsCardText} >{value}</Text>
      </View>
    </TouchableOpacity>)}
  </ScrollView>
}

const styles = StyleSheet.create({
  tagsScroll: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    marginVertical: 10,
    paddingRight: 10
  },
  tagsCard: {
    backgroundColor: '#d1d1d1',
    padding: 2,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10
  },
  tagsCardText: {
    color: '#000',
    fontSize: 10
  }
})

export default memo(Tags)