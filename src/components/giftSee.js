import React, { useState, memo, Fragment } from 'react';
import { View, Image, Modal, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Config from '../constants/Config';

import iconGift from '../assets/gift.png'
import iconClose from '../assets/close.png'
import imgHeaderBG from '../assets/img_header_bg.png'
import imgDiamondPlus from '../assets/diamond_plus.png'

const { height, width } = Dimensions.get('window')

const GiftSee = () => {
  const [modal, setModal] = useState(false)

  return <Fragment>
    <TouchableOpacity onPress={() => setModal(true)} >
      <Image source={iconGift} style={styles.iconGift} />
    </TouchableOpacity>
    <Modal
      style={{ height }}
      visible={modal}
      animationType="slide"
      transparent
    >
      <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.5)' }} >
        <View style={{ width: width - 80, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Image source={imgHeaderBG} style={{ height: (width - 80) * .61, width: width, resizeMode: 'contain', marginBottom: -((width - 80) * .28), zIndex: 1 }} />
          <View style={{ backgroundColor: '#fff', minHeight: 150, width: (width - 80), borderRadius: 20 }} >
            <View style={{ padding: 10, paddingTop: (width - 80) * .28 }} >
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} >
                {Config.giftList.map((v, i) => {
                  console.log(Config.giftList.length, i + 1, !((i + 1) % 2 == 0));
                  const oddLast = (Config.giftList.length === i + 1) ? !((i + 1) % 2 == 0) : false
                  return <View key={v} style={{ backgroundColor: '#fff', borderRadius: 5, width: oddLast ? ((width - 110) / 4) * 2 : (width / 6), elevation: 1, position: 'relative', marginBottom: 10 }} >
                    <View style={{ backgroundColor: '#094d91', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 2 }} >
                      <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12 }} >Hari {v === 1 ? 'Ini' : v}</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                      <Image source={imgDiamondPlus} style={{ marginHorizontal: 10, width: (width / 6) * .8, resizeMode: 'contain' }} />
                    </View>
                    {v !== 1 && <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,.5)', borderRadius: 5 }} />}
                  </View>
                })}
              </View>
              <View style={{ backgroundColor: '#3994a9', padding: 15, borderRadius: 10, marginVertical: 20 }} >
                <Text style={{ textAlign: 'center', color: '#fff' }} >Ambil</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => setModal(false)} >
            <Image source={iconClose} style={{ marginTop: 20, height: 40, width: 40, borderRadius: 100, borderWidth: 2, borderColor: '#fff', resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </Fragment>
}

const styles = StyleSheet.create({

  iconGift: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
})

export default memo(GiftSee)