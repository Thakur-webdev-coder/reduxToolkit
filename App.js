import React from 'react';
import {StyleSheet, View} from 'react-native';
// import ApiwithRedux from './src/features/coin/ApiwithRedux';
// import ApiExample from './src/features/coin/ApiExample';
import ApiwithRedux from './src/features/coin/ApiwithRedux';
// import Counter from './src/features/counter/Counter';
// import Coin from './src/features/coin/Coin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePost from './src/features/coin/CreatePost';
import Edituser from './src/features/coin/Edituser';
// import {createStackNavigator} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={ApiwithRedux} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Edit" component={Edituser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'teal',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    // paddingLeft:10
  },
  textcounter: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '30%',
    // paddingVertical: 10,
  },
  btn: {
    width: '10%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    width: '15%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    // marginT:10
  },
});
