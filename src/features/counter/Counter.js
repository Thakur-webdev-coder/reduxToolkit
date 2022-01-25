import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './counterSlice';

const Counter = () => {
  // const handleDecrement = () => {
  //   if (count > 0) {
  //     dispatch(decrement());
  //   }
  // };
  // const [count, setcount] = useState(0);
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.area}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(increment());
          }}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <Text style={styles.textcounter}>Counter:{count}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (count > 0) {
              dispatch(decrement());
            }
          }}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  area: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    // paddingLeft:10
  },
  textcounter: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: 10,
  },
  btn: {
    width: '25%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  btn1: {
    width: '35%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 50,
  },
});
