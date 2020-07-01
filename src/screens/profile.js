import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import logo from '../assets/logo-b.png'

const deviceWidth = Dimensions.get('window').width;

export default class Landing extends Component {
  render (){
    return (
      <View  style={styles.parent}>
        <LinearGradient colors={['#0984e3','#74b9ff']} style={styles.top}>
          <Text style={styles.title}>Profile View</Text>
          
        </LinearGradient>
        <View style={styles.btnWrapper}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>Username</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileText}>Email</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
            </View>
            <TouchableOpacity style={styles.btn}><Text style={styles.text}>LOGOUT</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    width: deviceWidth,
    position: 'relative',
    alignItems: 'center',
  },
  top: {
    paddingTop: 30,
    width: deviceWidth,
    height: 400,
    alignItems: 'center',
  },
  text: {
    color: '#74b9ff',
    fontSize: 20,
    marginBottom: 50
  },
  btnWrapper: {
    top: -100,
    width: deviceWidth,
    alignItems: 'center',
    paddingBottom: 50
  },
  btn: {
    height: 40,
    elevation: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 15,
    padding: 5
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  profileText:{
    color: '#74b9ff',
    fontSize: 15,
    marginBottom: 1
  },
  profileSubText:{
    color: '#0984e3',
    fontSize: 20,
    margin: 10
  },
  profile: {
    elevation: 5,
    marginBottom: 50,
    padding: 30,
    borderRadius: 15,
    width: 300,
    backgroundColor: '#fff'
  }
})