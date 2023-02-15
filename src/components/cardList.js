import React, { useEffect, useRef, memo, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, FlatList, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Config from '../constants/Config';

import iconNoImage from '../assets/no-image.jpg'
import iconStar from '../assets/star.png'

import * as actionBooks from '../actions/actionBooks';

const { width } = Dimensions.get('screen')

export const Card = memo(({ item, index, count, typeGrid, inDetail }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const toPageDetail = () => {
    if (inDetail) {
      dispatch(actionBooks.storeUpdate({ scrollToTop: Date.now() }))
    }
    navigation.navigate('details', { item })
  }

  return (<TouchableOpacity
    key={item?.id}
    activeOpacity={0.6}
    onPress={toPageDetail}>
    <View
      style={[
        styles.card,
        typeGrid ?
          (typeGrid == 'vertical' ?
            {
              borderTopWidth: index ? 1 : 0,
              paddingTop: index ? 10 : 0,
              marginTop: index ? 10 : 0,
              borderColor: '#E5E5E5'
            }
            :
            { marginBottom: 10 }
          )
          :
          { marginRight: count == (index + 1) ? 30 : 10 }
      ]}>
      <View style={[typeGrid ?
        (typeGrid == 'grid' ?
          styles.cardVertical
          :
          styles.cardVerticalFull)
        :
        styles.cardHorizontal]}>
        <Image
          source={
            item?.volumeInfo?.imageLinks?.smallThumbnail ?
              { uri: item?.volumeInfo?.imageLinks?.smallThumbnail }
              :
              iconNoImage
          }
          alt={item?.volumeInfo?.title}
          style={[
            typeGrid ?
              styles.imgVertical
              :
              styles.imgHorizontal
          ]} />
        <View style={typeGrid == 'grid' ? styles.gridDesc : null} >
          <Text
            style={[
              typeGrid ?
                (typeGrid == 'grid' ? styles.titleVertical : styles.titleVerticalFull)
                :
                styles.titleHorizontal
            ]}
            numberOfLines={2}>
            {item?.volumeInfo?.title}
          </Text>
          {typeGrid == 'vertical' && <Text style={styles.descVerticalFull} numberOfLines={3} >{item?.volumeInfo?.description}</Text>}
          {typeGrid == 'grid' && <View style={styles.cardStart} >
            <Image source={iconStar} style={styles.imageIconStart} />
            <Text>{Config.getRndInteger(3.0, 5)}</Text>
          </View>}
        </View>
      </View>
    </View>
  </TouchableOpacity>)
})

const CardList = ({ keys, category, maxResults, newest, fetch, typeGrid, inDetail }) => {
  const data = useSelector(state => state.books[`${keys}`] || {});
  const scrollToTop = useSelector(state => state.books.scrollToTop)
  const dispatch = useDispatch();
  const flatListRef = useRef()

  const propsFlatlist = {
    style: { paddingLeft: 20, marginRight: 50, width: width - 0 },
    showsHorizontalScrollIndicator: false,
    snapToInterval: (width) / 3,
    horizontal: true
  }
  if (typeGrid) {
    maxResults = 6
  }

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
    {!!category && <View style={styles.cardTitle} >
      <Text style={styles.cardTitleText} >{category}</Text>
    </View>}
    {typeGrid ?
      <View style={typeGrid === 'vertical' ? styles.cardListVerticalFull : styles.cardListVertical} >
        {(data?.items || []).map((item, index) => <Card
          key={`${item.id}${index}`.toLowerCase()}
          item={item}
          index={index}
          typeGrid={typeGrid}
          inDetail={inDetail}
          count={data?.items?.length || 0}
        />)}
      </View>
      :
      <FlatList
        ref={flatListRef}
        data={data?.items || []}
        renderItem={(item) => <Card
          {...item}
          typeGrid={typeGrid}
          inDetail={inDetail}
          count={data?.items?.length || 0}
        />}
        keyExtractor={(item, index) => `${item}${index}`}
        {...propsFlatlist}
      />}
  </Fragment>
}

const styles = StyleSheet.create({
  cardListVertical: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20
  },
  cardListVerticalFull: {
    paddingHorizontal: 20
  },
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
  imgHorizontal: {
    width: '100%',
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    height: width / 2
  },
  descHorizontal: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 10
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHorizontal: {
    width: ((width / 3) - 10)
  },
  imgVertical: {
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    height: width / 3,
    width: (width / 4) - 10
  },
  titleHorizontal: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12
  },
  titleVertical: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 5,
    width: (width / 4) - 20
  },
  titleVerticalFull: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
    marginLeft: 10,
  },
  cardVertical: {
    width: (width / 2) - 20,
    display: 'flex',
    flexDirection: 'row'
  },
  cardVerticalFull: {
    width: (width - (width / 3)),
    display: 'flex',
    flexDirection: 'row'
  },
  cardStart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageIconStart: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginHorizontal: 5
  },
  gridDesc: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  descVerticalFull: {
    marginLeft: 10,
    fontSize: 12,
    marginVertical: 20
  }
})

CardList.propTypes = {
  keys: PropTypes.string.isRequired,
  category: PropTypes.string,
  maxResults: PropTypes.number,
  newest: PropTypes.bool,
  fetch: PropTypes.bool,
  typeGrid: PropTypes.string,
  inDetail: PropTypes.bool
}

CardList.defaultProps = {
  keys: '',
  category: '',
  maxResults: 10,
  fetch: true,
  typeGrid: null,
  inDetail: false
}

export default memo(CardList)