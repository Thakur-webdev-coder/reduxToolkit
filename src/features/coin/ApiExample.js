import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const ApiExample = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const [isError, setIsError] = useState(false);
  const [loader, setloader] = useState(true);
  const [isfetching, setIsfetching] = useState(false);
  useEffect(() => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/todos/')
    //   .then(resp => {
    //     console.log(resp);
    //     setData(resp.data);
    //     setloader(false);
    //     setIsError(false);
    //   })
    //   .catch(err => {
    //     console.log('Error.....', err);
    //     setIsError(true);
    //     // alert('error in fething data');
    //   });
    // const uri = 'https://jsonplaceholder.typicode.com/todos/';
    // fetch(uri)
    //   .then(resp => resp.json())
    //   .then(resp => setData(resp));
    fetchingUrl();
    // setIsfetching(false);
  }, []);

  const fetchingUrl = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(resp => {
        console.log(resp);
        setData(resp.data);
        setloader(false);
        setIsError(false);
        setIsfetching(false);
      })
      .catch(err => {
        console.log('Error.....', err);
        setIsError(true);
        // alert('error in fething data');
      });
  };

  const handleRefresh = () => {
    setIsfetching(true);
    fetchingUrl();
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.headertext}>API Data without Redux</Text>
      </View>
      <View>
        {isError && (
          <Text style={styles.errorMessage}>somethingwentT wrong</Text>
        )}
        {loader ? (
          <ActivityIndicator size="large" color="red" style={styles.loader} />
        ) : (
          <View>
            <FlatList
              data={data}
              onRefresh={handleRefresh}
              refreshing={isfetching}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={styles.area}>
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.text}>{item.id}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '60%'}}>
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
    </View>
  );
};

export default ApiExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  area: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  headertext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  main: {
    height: '10%',
    paddingTop: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  errorMessage: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
});

// useEffect(() => {
//   const uri = 'https://jsonplaceholder.typicode.com/todos/';
//   fetch(uri)
//     .then(resp => resp.json())
//     .then(resp => setData(resp));
//     .cat
// },[]);

// useEffect(() => {
//   const uri = 'https://jsonplaceholder.typicode.com/todos/';
//   axios
//     .get(uri)
//     .then(resp => {
//       setData(resp);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }, []);
