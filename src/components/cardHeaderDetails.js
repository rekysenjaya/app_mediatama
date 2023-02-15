import React, { memo, Fragment } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import iconArrowLeft from '../assets/arrow_left.png'
import iconLanguage from '../assets/language_.png'
import iconNoImage from '../assets/no-image.jpg'

const { width } = Dimensions.get('window')

const CardHeaderImage = ({ data }) => {
  const navigation = useNavigation()

  return <Fragment>
    <ImageBackground source={data?.imageLinks?.smallThumbnail ? { uri: `${data?.imageLinks?.smallThumbnail}`.replace('http:', 'https:') } : iconNoImage} >
      <View style={styles.imgBgOpacity} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.buttonOpacity} >
            <Image source={iconArrowLeft} style={styles.buttonOpacityImg} />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <View style={styles.cardImage} >
      <Image source={data?.imageLinks?.smallThumbnail ? { uri: `${data?.imageLinks?.smallThumbnail}`.replace('http:', 'https:') } : iconNoImage} style={styles.cardImages} />
      <View style={styles.cardDesc} >
        <Text style={styles.cardDescTitle} numberOfLines={2}>{data?.title}</Text>
        <Text style={styles.cardDescAuthors} numberOfLines={2}>{(data?.authors || []).join(', ')}</Text>
        <Text style={styles.cardDescCategory} numberOfLines={2}>{(data?.categories || []).join(', ')}</Text>
        <View style={styles.buttonLanguage} >
          <Image source={iconLanguage} style={styles.buttonLanguageImg} />
          <Text style={styles.buttonLanguageText} >Indonesia</Text>
        </View>
      </View>
    </View>
  </Fragment>
}

const styles = StyleSheet.create({
  imgBgOpacity: {
    width,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 70
  },
  buttonOpacity: {
    height: 50,
    width: 50,
    borderRadius: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  buttonOpacityImg: {
    width: 40,
    height: 20,
    resizeMode: 'contain'
  },
  cardImage: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  cardImages: {
    width: width / 3,
    height: width / 2,
    borderRadius: 10,
    resizeMode: 'cover',
    marginTop: -50
  },
  cardDesc: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    height: width / 2.65,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardDescTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000'
  },
  cardDescAuthors: {
    fontWeight: '500',
    fontSize: 12,
    color: '#65c1cb'
  },
  cardDescCategory: {
    fontWeight: '500',
    fontSize: 12,
    color: '#000'
  },
  buttonLanguage: {
    borderRadius: 5,
    height: 30,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
  },
  buttonLanguageImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5
  },
  buttonLanguageText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#fff'
  }
})

export default memo(CardHeaderImage)