import React, { useState, useEffect, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback, Alert, Linking, Platform, RefreshControl } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Config from '../constants/Config';

const { width, height } = Dimensions.get('window')

const Profile = props => {
  const dataReducer = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [state, setState] = useState({
    
  });
  const updateState = useCallback((update) => {
    setState(data => ({
      ...data,
      ...update,
    }))
  }, [])

  useEffect(() => {
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }} >
      
    </SafeAreaView >
  );
};

export default Profile;
