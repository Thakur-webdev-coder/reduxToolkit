/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
// import {apiPostNewData} from '../PostSliceExample';
// import {apiPostNewData} from '../PostSliceExample';
import {useDispatch, useSelector} from 'react-redux';
import {apiFetchById} from '../PostSliceExample';
import {deleteUser} from '../PostSliceExample';

const CreatePost = ({route, navigation}) => {
  // const [userApiData, setuserApiData] = useState(apiPostNewData);
  // const [Id, setId] = useState('')
  const {id, userId, title, body} = route.params;

  const {userData, loading, error} = useSelector(state => state.post);
  // const {posts, loading, error} = useSelector(state => state.post);

  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(apiFetchById(id));
    // return fetch(id);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteUserData = () => {
    // dispatch(deleteUser({id: posts[0].id}));
    dispatch(deleteUser(id));
    console.log('deleting by id');
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbtn}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>User Data</Text>
      </View>
      <View style={styles.internalarea}>
        <Text style={styles.dataText}>User Detail</Text>
        <View style={{height: '60%'}}>
          <View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="green"
                style={styles.loader}
              />
            ) : (
              <View>
                {userData ? (
                  <View>
                    <Text style={styles.dataText}>
                      userId:{userData.userId}
                    </Text>
                    <Text style={styles.dataText}>id:{id}</Text>
                    <Text style={styles.dataTextt}>title:{userData.title}</Text>
                    <Text style={styles.dataTextt}>body:{userData.body}</Text>
                  </View>
                ) : null}
              </View>
            )}
          </View>
        </View>
        <View style={{width: '100%'}}>
          <TouchableOpacity style={styles.btn} onPress={deleteUserData}>
            <Text style={styles.btntext}>delete User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
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
    fontWeight: 'bold',
  },
  dataTextt: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  internalfiled: {
    paddingTop: 50,
  },
  btn: {
    backgroundColor: 'red',
    width: '25%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 30,
  },
  btntext: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// <View style={styles.internalfiled}>
// <Text style={styles.dataText}>userId:{userId}</Text>
// <Text style={styles.dataText}>id:{id}</Text>
// <Text style={styles.dataText}>title:{title}</Text>
// </View>
