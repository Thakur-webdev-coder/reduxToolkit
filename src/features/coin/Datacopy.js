// for showing specific data from existing 
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
// import {apiPostNewData} from '../PostSliceExample';
import {apiPostNewData,deleteUser} from '../PostSliceExample';
import {useDispatch, useSelector} from 'react-redux';

const CreatePost = ({route, navigation}) => {
  // const [userApiData, setuserApiData] = useState(apiPostNewData);
  // const [id, setId] = useState('')
  const {id, userId, title} = route.params;

  const {userData} = useSelector(state => state.post);
  // console.log('userData', userData);
  const {posts, loading, error} = useSelector(state => state.post);

  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(apiPostNewData(id));
    // return fetch(id);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
        {loading ? (
          <ActivityIndicator size="large" color="green" style={styles.loader} />
        ) : (
          <View>
            <View>
              <Text style={styles.dataText}>{userData.id}</Text>
              <Text style={styles.dataText}>{userData.title}</Text>
              <Text style={styles.dataText}>{userData.userId}</Text>
              <Text style={styles.dataText}>{userData.body}</Text>
            </View>
          </View>
        )}
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
  },
  internalfiled: {
    paddingTop: 50,
  },
});

// <View>
//           {userData ? (
//             <View>
//               <Text style={styles.dataText}>{item.id}</Text>
//               <Text style={styles.dataText}>{userData.title}</Text>
//               <Text style={styles.dataText}>{userData.userId}</Text>
//             </View>
//           ) : null}
//         </View>
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import {getPosts} from './postSlice';

export const apiLists = createAsyncThunk('post/apiLists', async data => {
  console.log({data});
  // return fetch('https://jsonplaceholder.typicode.com/posts/')
  //   .then(resp => resp.json())
  //   .catch(error => {
  //     console.log('errrrrrrrrr', error);
  //   });
  return axios
    .get('https://jsonplaceholder.typicode.com/posts/')
    .then(resp => resp.data)
    .catch(error => console.log('Something went wrong', error));
});
// export const apiPostNewData = createAsyncThunk(
//   'post/apiPostNewData',
//   async id => {
//     console.log('fething myuser..', id);
//     return axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(resp => resp.data)
//       .catch(error => console.log('Something went wrong', error));
//   },
// );

export const addNewUser = createAsyncThunk('post/addNewUser', async id => {
  console.log('fething user..', id);
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(resp => resp.data)
    .catch(error => console.log('Something went wrong', error));
});
export const deleteUser = createAsyncThunk('post/deleteUser', async id => {
  console.log('fething user..', id);
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'DELETE',
   
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(resp => resp.data)
    .catch(error => console.log('Something went wrong', error));
});

// for delete api:-
// 
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: false,
    edit: false,
    postData: {},
    userData: {
      id: '',
      userId: '',
      title: '',
      body: '',
    },
  },
  extraReducers: {
    [apiLists.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [apiLists.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [apiLists.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [apiPostNewData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [apiPostNewData.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    [apiPostNewData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;

    },[deleteUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default postSlice.reducer;



<TouchableOpacity onPress={()=>dispatch(deleteUser({id:post[0].id}))}><Text>delPost</Text></TouchableOpacity>
// https://stackoverflow.com/questions/62985154/how-to-handle-axios-post-request-with-react-native