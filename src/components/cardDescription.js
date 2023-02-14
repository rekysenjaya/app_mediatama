import React, { memo, useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Description = ({ description }) => {
  const [numberLine, setNumberLine] = useState(4);
  const [showMore, setShowMore] = useState(false);

  const onTextLayout = useCallback(e => {
    setShowMore(e.nativeEvent?.lines?.length > 4);
  }, []);

  return <View style={styles.descriptionCard}>
    <Text style={styles.descriptionCardTitle} >Sinopsis</Text>
    <Text numberOfLines={numberLine} onTextLayout={onTextLayout}>{description}</Text>
    {showMore && <TouchableOpacity onPress={() => setNumberLine(numberLine ? null : 4)} >
      <Text style={{ color: '#65c1cb', fontWeight: 'bold' }} >{numberLine ? 'Selengkapnya' : 'Tutup'}</Text>
    </TouchableOpacity>}
  </View>
}

const styles = StyleSheet.create({
  descriptionCard: {
    marginHorizontal: 20,
    marginTop: 10
  },
  descriptionCardTitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    marginBottom: 5
  }
})

export default memo(Description)