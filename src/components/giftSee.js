import React, { useState, memo, Fragment } from 'react';
import { View, Image, Modal, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Config from '../constants/Config';

import iconGift from '../assets/gift.png'
import iconClose from '../assets/close.png'
import imgHeaderBG from '../assets/img_header_bg.png'
import imgDiamondPlus from '../assets/diamond_plus.png'

const { height, width } = Dimensions.get('window')

const GiftSee = () => {
  const [count, setCount] = useState(99)
  const [modal, setModal] = useState(false)

  return <Fragment>
    <TouchableOpacity activeOpacity={.8} onPress={() => setModal(true)} >
      <View style={styles.cardGift} >
        <Image source={iconGift} style={styles.iconGift} />
        {!!count && <Text style={styles.cardGiftCount} >{count}</Text>}
      </View>
    </TouchableOpacity>
    <Modal
      style={{ height }}
      visible={modal}
      animationType="slide"
      transparent
    >
      <View style={styles.cardModal} >
        <View style={styles.cardModalBg}>
          <Image source={imgHeaderBG} style={styles.cardModalHeaderImage} />
          <View style={styles.card} >
            <View style={styles.cardPadding} >
              <View style={styles.cardListGift} >
                {Config.giftList.map((v, i) => {
                  const oddLast = (Config.giftList.length === i + 1) ? !((i + 1) % 2 == 0) : false;
                  return <View
                    key={v}
                    style={[{ width: oddLast ? ((width - 110) / 4) * 2 : (width / 6) }, styles.cardListGifts]} >
                    <View style={styles.cardListGiftHeader} >
                      <Text style={styles.cardListGiftHeaderText} >Hari {v === 1 ? 'Ini' : v}</Text>
                    </View>
                    <View style={styles.cardListGiftCenter}>
                      <Image source={imgDiamondPlus} style={styles.cardListGiftCenterImage} />
                    </View>
                    {v !== 1 && <View style={styles.cardOpacity} />}
                  </View>
                })}
              </View>
              <TouchableOpacity activeOpacity={.8} onPress={() => {
                setModal(false)
                setCount(count - 1)
              }} >
                <View style={styles.cardButton} >
                  <Text style={styles.cardButtonText} >Ambil</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => setModal(false)} >
            <Image source={iconClose} style={styles.buttonCloseIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </Fragment>
}

const styles = StyleSheet.create({
  cardGift: {
    position: 'relative'
  },
  cardGiftCount: {
    color: '#fff',
    height: 20,
    width: 20,
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 30,
    position: 'absolute',
    top: -5,
    right: 5
  },
  iconGift: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
  cardModal: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  cardModalBg: {
    width: width - 80,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardModalHeaderImage: {
    height: (width - 80) * .61,
    width: width,
    resizeMode: 'contain',
    marginBottom: -((width - 80) * .28),
    zIndex: 1
  },
  card: {
    backgroundColor: '#fff',
    minHeight: 150,
    width: (width - 80),
    borderRadius: 20
  },
  cardPadding: {
    padding: 10, paddingTop: (width - 80) * .28
  },
  cardListGift: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  cardListGifts: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 1,
    position: 'relative',
    marginBottom: 10
  },
  cardListGiftHeader: {
    backgroundColor: '#094d91',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 2
  },
  cardListGiftHeaderText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12
  },
  cardListGiftCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  cardListGiftCenterImage: {
    marginHorizontal: 10,
    width: (width / 6) * .8,
    resizeMode: 'contain'
  },
  cardOpacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,.5)',
    borderRadius: 5
  },
  cardButton: {
    backgroundColor: '#3994a9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20
  },
  cardButtonText: {
    textAlign: 'center',
    color: '#fff'
  },
  buttonCloseIcon: {
    marginTop: 20,
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    resizeMode: 'contain'
  }
})

export default memo(GiftSee)