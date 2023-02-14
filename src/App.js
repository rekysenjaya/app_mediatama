import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Dimensions, Text, View, Image, TouchableOpacity, ActivityIndicator, Modal, StyleSheet, Animated, Alert } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { useDispatch, useSelector } from 'react-redux';

enableScreens(false);

import * as actionAuth from './actions/actionAuth';
import * as actionBooks from './actions/actionBooks';

import Config from './constants/Config';

import iconHome from './assets/home.png'
import iconHome_ from './assets/home_.png'
import iconSquares from './assets/squares.png'
import iconSquares_ from './assets/squares_.png'
import iconBookClose from './assets/book_close_.png'
import iconDiamond from './assets/diamond.png'
import iconDiamond_ from './assets/diamond_.png'
import iconUser from './assets/user.png'
import iconUser_ from './assets/user_.png'

import Home from './views/Home'
import Blank from './views/Blank'
import Details from './views/Details';

const Stack = createNativeStackNavigator();

export const HomePage = () => {
  const _renderIcon = (routeName, selectedTab) => {
    switch (routeName) {
      case 'home':
        return <Image source={routeName === selectedTab ? iconHome_ : iconHome} style={styles.imgIcon} />
      case 'explore':
        return <Image source={routeName === selectedTab ? iconSquares_ : iconSquares} style={styles.imgIcon} />
      case 'diamond':
        return <Image source={routeName === selectedTab ? iconDiamond_ : iconDiamond} style={styles.imgIcon} />
      case 'profile':
        return <Image source={routeName === selectedTab ? iconUser_ : iconUser} style={styles.imgIcon} />
    }
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        strokeColor="#DDDDDD"
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        screenOptions={{
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: '#65c1cb'
          },
          headerTintColor: '#000',

        }}
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                padding: 20
              }}
              onPress={() => navigate('new')}>
              <Image source={iconBookClose} style={styles.imgIcon} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="home"
          position="LEFT"
          options={{
            headerShown: false
          }}
        >
          {props => <Home {...props} />}
        </CurvedBottomBar.Screen>
        <CurvedBottomBar.Screen
          name="explore"
          position="LEFT"
        >
          {props => <Blank {...props} />}
        </CurvedBottomBar.Screen>
        <CurvedBottomBar.Screen
          name="diamond"
          position="RIGHT"
        >
          {props => <Blank {...props} />}
        </CurvedBottomBar.Screen>
        <CurvedBottomBar.Screen
          name="profile"
          position="RIGHT"
        >
          {props => <Blank {...props} />}
        </CurvedBottomBar.Screen>
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export const styles = StyleSheet.create({
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
    backgroundColor: '#65c1cb',
    borderColor: '#3994a9',
    borderWidth: 2
  },
  imgIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});

function App(props) {

  return (<React.Fragment>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_bottom',
          headerStyle: {
            backgroundColor: '#65c1cb'
          },
          headerTintColor: '#000',

        }}
      >
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="new"
          component={Blank}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </React.Fragment>);
}

export default App