import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Coin = () => {
  const count = useSelector(state => state.counter.count);

  return (
    <View>
      <Text style={styles.textcounter}>Coin:{count}</Text>
    </View>
  );
};

export default Coin;

const styles = StyleSheet.create({});
