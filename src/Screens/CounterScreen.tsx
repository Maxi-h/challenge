// Vendors
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppBar from '../components/AppBar';
import {Counter} from '../components/Counter';
// import {useNavigation} from '@react-navigation/core';
// import Styled from 'styled-components/native';

const CounterScreen = () => {
  const {dispatch} = useNavigation();
  return (
    <View style={styles.container}>
      <AppBar
        title={'Counter'}
        onTap={() => dispatch(DrawerActions.openDrawer())}
      />
      <View style={styles.space} />
      <Text>Counter</Text>
      <Counter />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-start', alignItems: 'center'},
  space: {height: 150},
});
