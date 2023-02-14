import React, { useEffect, useRef, memo, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, FlatList, Text, TouchableOpacity, View, Image } from 'react-native';

import * as actionBooks from '../actions/actionBooks';

const { width } = Dimensions.get('screen')

import iconNoImage from '../assets/no-image.jpg'

const Card = memo(({ item, index, count }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const toPageDetail = () => {
    dispatch(actionBooks.storeUpdate({ scrollToTop: Date.now() }))
    navigation.navigate('details', { item })
  }

  return (<TouchableOpacity key={item?.id} activeOpacity={0.6}
    onPress={toPageDetail}>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: count == (index + 1) ? 30 : 10,
    }}>
      <View style={{ width: (width / 3) - 10 }}>
        <Image source={item?.volumeInfo?.imageLinks?.smallThumbnail ? { uri: item?.volumeInfo?.imageLinks?.smallThumbnail } : iconNoImage} alt={item?.volumeInfo?.title}
          style={{
            height: width / 2,
            width: '100%',
            resizeMode: 'cover',
            borderWidth: 1,
            borderColor: '#E5E5E5',
            borderRadius: 10
          }} />
        <Text style={{ fontWeight: '500', fontSize: 12, marginTop: 10 }} numberOfLines={2}>{item?.volumeInfo?.title}</Text>
      </View>
    </View>
  </TouchableOpacity>)
})

const CardList = ({ keys, category, maxResults = 10, newest, fetch = true }) => {
  const data = useSelector(state => state.books[`${keys}`] || {});
  const scrollToTop = useSelector(state => state.books.scrollToTop)
  const dispatch = useDispatch();
  const flatListRef = useRef()

  useEffect(() => {
    if (fetch) {
      dispatch(actionBooks.getList({
        keys,
        params: {
          q: category,
          startIndex: 1,
          maxResults,
          printType: 'books',
          orderBy: newest ? 'newest' : 'relevance'
        }
      }))
    }
  }, [])

  useEffect(() => {
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 })
  }, [scrollToTop])

  return <Fragment>
    {!!category && <View style={{ borderColor: '#3994a9', borderLeftWidth: 5, margin: 20, paddingLeft: 8 }} >
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >{category}</Text>
    </View>}
    <FlatList
      ref={flatListRef}
      style={{ paddingLeft: 20, marginRight: 50, width: width - 0 }}
      showsHorizontalScrollIndicator={false}
      snapToInterval={(width) / 3}
      horizontal
      data={data?.items || []}
      renderItem={(item) => <Card {...item} count={data?.items?.length || 0} />}
      keyExtractor={(item, index) => `${item}${index}`}
    />
  </Fragment>
}

export default memo(CardList)