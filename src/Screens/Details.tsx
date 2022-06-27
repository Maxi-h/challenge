// Vendors
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import {useNavigation} from '@react-navigation/core';
// import Styled from 'styled-components/native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
