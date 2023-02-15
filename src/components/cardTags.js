import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import Config from '../constants/Config';

const Tags = ({ category }) => {
  return <View>
    {!!category && <View style={styles.cardTitle} >
      <Text style={styles.cardTitleText} >{category}</Text>
    </View>}
    {!!category ?
      <View style={styles.tagsCardFullList} >
        {Config.categoryFull.map((value, index) => <TouchableOpacity key={`${value},${index}`}>
          <View style={styles.tagsCardFull} >
            <Image source={value.img} style={styles.iconTags} />
            <Text style={styles.tagsCardText} >{value.name}</Text>
          </View>
        </TouchableOpacity>)}
      </View>
      :
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsScroll} >
        {Config.category.map((value, index) => <TouchableOpacity key={`${value},${index}`}>
          <View style={[styles.tagsCard, { marginLeft: index ? 0 : 20 }]} >
            <Text style={styles.tagsCardText} >{value}</Text>
          </View>
        </TouchableOpacity>)}
      </ScrollView>}
  </View>
}

const styles = StyleSheet.create({
  cardTitle: {
    borderColor: '#3994a9',
    borderLeftWidth: 5,
    margin: 20,
    paddingLeft: 8
  },
  cardTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
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
  tagsCardFull: {
    backgroundColor: '#f3f3f3',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginRight: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tagsCardFullList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20,
    marginTop: -10
  },
  iconTags: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10
  },
  tagsCardText: {
    color: '#000',
    fontSize: 10
  }
})

export default memo(Tags)