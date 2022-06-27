import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../redux/CounterSlice';
import Text from './Typography/Text';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.textbox}
          onChangeText={setIncrementAmount}
          value={incrementAmount}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }>
          <Text>Add Amount</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            dispatch(incrementAsync(Number(incrementAmount) || 0))
          }>
          <Text>Add Async</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    border: 0,
    fontSize: 32,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    color: 'rgb(112, 76, 182)',
    paddingBottom: 4,
    backgroundColor: 'rgba(112, 76, 182, 0.1)',
    borderRadius: 2,
    marginHorizontal: 3,
  },
  value: {
    fontSize: 78,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 2,
  },
  textbox: {
    fontSize: 32,
    padding: 2,
    width: 64,
    textAlign: 'center',
    marginRight: 8,
  },
});
