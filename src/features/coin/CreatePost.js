/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {apiPostNewData} from '../PostSliceExample';

import {useDispatch, useSelector} from 'react-redux';

const CreatePost = ({route, navigation}) => {
  const {id, userId, title} = route.params;
  // const {posts, loading, error} = useSelector(state => state.post);

  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(apiPostNewData(id));
    // return fetch(id);
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbtn}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>User Data</Text>
      </View>
      <View style={styles.internalarea}>
        <Text style={styles.dataText}>User Details</Text>
        <View style={styles.internalfiled}>
          <Text style={styles.dataText}>userId:{userId}</Text>
          <Text style={styles.dataText}>id:{id}</Text>
          <Text style={styles.dataText}>title:{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  main: {
    height: '8%',
    paddingTop: 10,
    backgroundColor: 'black',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingLeft: '30%',
  },
  text1: {
    // textAlign: 'center',
    color: 'white',
    fontSize: 25,
    paddingRight: '40%',
    // justifyContent: 'center',
  },
  textbtn: {
    // textAlign: 'center',
    color: 'white',
    fontSize: 20,
    // justifyContent: 'center',
  },
  internalarea: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  dataText: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 5,
  },
  internalfiled: {
    paddingTop: 50,
  },
});
