import React, { useState, useCallback, useMemo } from 'react';
import { View, Image, Dimensions, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback, TextInput, StyleSheet, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import iconSearch from '../assets/search.png'
import iconGift from '../assets/gift.png'
import iconNotif from '../assets/bell.png'

import CardList from '../components/cardList';

const { height } = Dimensions.get('window')

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
          <Image source={iconGift} style={styles.iconGift} />
          <Image source={iconNotif} style={styles.iconNotif} />
        </View>
        {useMemo(() => <View key={state.dateNow} style={styles.scrollView}>
          <CardList keys="new" category="Baru Rilis" newest />
          <CardList keys="newChapter" category="Chapter Baru Setiap Hari" newest typeGrid="grid" />
          <CardList keys="fullChapter" category="Cerita Lengkap" newest typeGrid="vertical" />
          <CardList keys="ekslusif" category="Ekslusif" newest />
          <CardList keys="rekomendasi" category="Rekomendasi" newest />
        </View>, [state.dateNow])}
      </ScrollView>
      <Modal
        style={{ height }}
        visible={false}
        animationType="none"
        transparent
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.2)' }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback>
              <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, margin: 30, marginBottom: 0 }} >

              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
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
  iconGift: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
  iconNotif: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  }
})

export default Home;