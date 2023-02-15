import React, { useState, useEffect, memo, useRef, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import CardList from '../components/cardList';
import CardComments from '../components/cardComments';
import CardDescription from '../components/cardDescription';
import CardTags from '../components/cardTags';
import CardHeaderDetails from '../components/cardHeaderDetails';
import CardRate from '../components/cardRate';

const { height } = Dimensions.get('window')

const CardRecommend = memo(({ inDetail = false }) => {
  const navigation = useNavigation()
  const [showListRecommend, setShowListRecommend] = useState(false)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        setShowListRecommend(true)
      }, 1500);
    });

    return unsubscribe;
  }, [navigation]);

  return showListRecommend && <Fragment>
    <Text style={styles.titleRecommend} >Rekomendasi</Text>
    <CardList keys="rekomendasi" fetch={false} inDetail={inDetail} />
  </Fragment>
})

const Details = ({ route }) => {
  const flatListRef = useRef()
  const scrollToTop = useSelector(state => state.books.scrollToTop)
  const item = route.params?.item

  useEffect(() => {
    flatListRef?.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [scrollToTop])

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        bounces={false} >
        <View style={styles.minView} >
          <CardHeaderDetails data={item?.volumeInfo || {}} />
          <CardRate />
          <CardDescription description={item?.volumeInfo?.description} />
          <CardTags />
          <CardComments />
          <CardRecommend inDetail />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  minView: {
    backgroundColor: '#fff',
    minHeight: height,
    paddingBottom: 20
  },
  titleRecommend: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 20,
    paddingTop: 20,
    borderColor: '#f3f3f3',
    borderTopWidth: 10
  },

})

export default Details;
