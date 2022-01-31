import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addNewUser} from '../PostSliceExample';
import {deleteUser} from '../PostSliceExample';

const Adduser = ({route, navigation}) => {
  const {id, userId, title, body} = route.params;
  // const [userData, setuserData] = useState('');
  // const [disabled, setdisabled] = useState();
  const [validation, setValidation] = useState({
    isValidId: true,
  });
  // const [error, setError] = useState('');
  const [values, setvalues] = useState({
    id: '',
    userId: '',
    title: '',
    body: '',
    isValidId: true,
  });

  const {posts} = useSelector(state => state.post);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(addNewUser(values));
  };

  const createUserData = () => {
    fetchData();
  };

  const HandleInputValidation = val => {
    console.log('handling validation');
    if (val.trim().length >= 1) {
      setValidation({...validation, isValidId: true});
    } else {
      setValidation({...validation, isValidId: false});
    }
  };

  console.log(values, '...values,');

  const disabled = !(values.id && values.userId && values.title && values.body);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbtn}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.text1}> Add User </Text>
      </View>
      <View style={styles.fieldarea}>
        <View>
          <TextInput
            placeholder="enter Id"
            keyboardType="numeric"
            placeholderTextColor="black"
            style={styles.inputfiled}
            onChangeText={text => setvalues({...values, id: text})}
            value={values.id}
            onEndEditing={e => HandleInputValidation(e.nativeEvent.text)}
          />
          {validation.isValidId ? null : (
            <Text style={{color: 'red'}}>* id is Mandatory</Text>
          )}
        </View>
        <TextInput
          placeholder="enter userId"
          keyboardType="numeric"
          placeholderTextColor="black"
          style={styles.inputfiled}
          onChangeText={text => setvalues({...values, userId: text})}
          value={values.userId}
        />
        <TextInput
          placeholder="enter title"
          placeholderTextColor="black"
          style={styles.inputfiled}
          onChangeText={text => setvalues({...values, title: text})}
          value={values.title}
        />
        <TextInput
          placeholder="enter body"
          placeholderTextColor="black"
          style={styles.inputfiled}
          onChangeText={text => setvalues({...values, body: text})}
          value={values.body}
          // value={values.body}
          // value={values}
        />
      </View>
      <View>
        <TouchableOpacity
          style={[styles.ablebtn, {opacity: disabled ? 0.5 : 1}]}
          onPress={createUserData}
          // disabled={!values.id}
          // disabled={!(values.id && values.userId) ? true : false}
          disabled={disabled}>
          <Text style={styles.btntext}>Add Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Adduser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  textbtn: {
    // textAlign: 'center',
    color: 'white',
    fontSize: 20,
    // justifyContent: 'center',
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
  fieldarea: {
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: '80%',
    // backgroundColor: 'red',
  },
  inputfiled: {
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  idbtn: {
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    marginBottom: 15,
    color: 'black',
    // paddingVertical: 5,
  },
  ablebtn: {
    backgroundColor: 'yellow',
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  disablebtn: {
    backgroundColor: 'grey',
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  btntext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  // btnfield: {flexDirection: 'row', justifyContent: 'space-around'},
});

//  // <TouchableOpacity style={styles.btn}>
//   <Text style={styles.btntext}>delUser</Text>
// </TouchableOpacity>
// {disabled ? styles.disablebtn : styles.disablebtn}
