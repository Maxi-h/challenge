/* eslint-disable react-hooks/exhaustive-deps */
// Vendors
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import AppBar from '../components/AppBar';
import MainCard from '../components/MainCard';
import useCountries from '../hooks/useCountries';

// import {useNavigation} from '@react-navigation/core';
// import Styled from 'styled-components/native';

// const renderItem = useCallback(
//   (item: Country) => (
//     <MainCard code={item.code} name={item.name} emoji={item.emoji} />
//   ),
//   [],
// );

const HomeScreen = () => {
  const [listCountries, setListCountries] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const {getCountries} = useCountries();
  const {navigate} = useNavigation<any>();

  const loadData = async () => {
    setLoadingData(true);
    const {data, loading} = await getCountries();
    setListCountries(data.countries);
    setLoadingData(loading);
  };

  useEffect(() => {
    loadData();
  }, [listCountries]);

  const renderItem = useCallback(
    ({item}: any) => (
      <MainCard
        country={item}
        onPress={() => navigate('Details', {code: item.code})}
      />
    ),
    [navigate],
  );

  const {dispatch} = useNavigation();

  return (
    <View style={styles.container}>
      <AppBar
        title={'Home'}
        onTap={() => dispatch(DrawerActions.openDrawer())}
      />
      <Text style={styles.title}>Paises del mundo</Text>
      {loadingData ? (
        <Text>Loading..</Text>
      ) : (
        <View style={styles.styledFlatList}>
          <FlatList
            data={listCountries}
            keyExtractor={(country, index) => index.toString()}
            ListEmptyComponent={() => <Text>{'No se encontraron datos'}</Text>}
            renderItem={renderItem}
            initialNumToRender={0}
            maxToRenderPerBatch={8}
            windowSize={1}
            updateCellsBatchingPeriod={40}
            onEndReachedThreshold={1}
          />
        </View>
      )}
      {/*  */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  styledFlatList: {flex: 1, marginHorizontal: 10},
});
