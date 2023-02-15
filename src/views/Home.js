import React, { useState, useCallback, useMemo } from 'react';
import { View, Image, ScrollView, TextInput, StyleSheet, RefreshControl, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import iconSearch from '../assets/search.png'
import iconNotif from '../assets/bell.png'

import CardList from '../components/cardList';
import CardTags from '../components/cardTags';
import GiftSee from '../components/giftSee';

const Home = props => {
  const [state, setState] = useState({
  });
  const updateState = useCallback((update) => {
    setState(data => ({
      ...data,
      ...update,
    }))
  }, [])

  const refreshCard = () => {
    updateState({ dateNow: Date.now() })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={refreshCard}
          />
        }>
        <View style={styles.headerComponent}>
          <View style={styles.borderInput} >
            <Image source={iconSearch} style={styles.iconSearch} />
            <TextInput
              style={styles.inputSearch}
              placeholder='Cari judul novel'
            />
          </View>
          <GiftSee />
          <Image source={iconNotif} style={styles.iconNotif} />
        </View>
        {useMemo(() => <View key={state.dateNow} style={styles.scrollView}>
          <CardList keys="new" category="Baru Rilis" newest />
          <CardList keys="newChapter" category="Chapter Baru Setiap Hari" newest typeGrid="grid" />
          <CardList keys="ekslusif" category="Ekslusif" newest />
          <CardTags category="Kategory" />
          <CardList keys="fullChapter" category="Cerita Lengkap" newest typeGrid="vertical" />
          <CardList keys="rekomendasi" category="Rekomendasi" newest />
        </View>, [state.dateNow])}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerComponent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  scrollView: {
    paddingBottom: 100
  },
  borderInput: {
    borderColor: '#d1d1d1',
    borderWidth: 2,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  inputSearch: {
    flex: 1,
    paddingVertical: 5
  },
  iconSearch: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 5
  },
  iconNotif: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  }
})

export default Home;