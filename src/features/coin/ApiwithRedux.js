import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {apiLists} from '../PostSliceExample';

const ApiwithRedux = ({navigation}) => {
  //  const [isError, setIsError] = useState(null);
  const [loader, setloader] = useState(true);
  const [id, setId] = useState('');
  const [isFetching, setisFetching] = useState(false);
  const {posts, loading, error} = useSelector(state => state.post);
  // console.log('Something went wrong...!', error);
  const dispatch = useDispatch();
  // console.log({posts})

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = () => {
    dispatch(apiLists(1));
    setisFetching(false);
    // setloader(false);
    // setIsError(error);
  };

  const handleRefresh = () => {
    setisFetching(true);
    fetchData();
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text1}>Api with Redux</Text>
      </View>
      <View>
        {error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="red"
                style={styles.loader}
              />
            ) : (
              <View>
                <FlatList
                  data={posts}
                  onRefresh={handleRefresh}
                  refreshing={isFetching}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View style={styles.area}>
                      <View style={{width: '10%'}}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('CreatePost', {
                              id: item.id,
                              userId: item.userId,
                              title: item.title,
                            })
                          }>
                          <Text style={styles.text}>{item.id}</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{width: '40%'}}>
                        <Text style={styles.text}>{item.title}</Text>
                      </View>
                      <View style={{width: '10%'}}>
                        <Text style={styles.text}>{item.userId}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            )}
          </View>
        )}
      </View>
      <View />
    </View>
  );
};

export default ApiwithRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  area: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  main: {
    height: '8%',
    paddingTop: 10,
    backgroundColor: 'black',
    // justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: '30%',
  },
  text1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    // justifyContent: 'center',
  },
  textbtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    // justifyContent: 'center',
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 80,
    // backgroundColor: 'yellow',
    marginTop: '50%',
    flex: 1,
  },
  btn: {
    marginLeft: '20%',
    marginTop: 10,
  },
});
