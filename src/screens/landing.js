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

import logo from '../assets/logo.png'

const deviceWidth = Dimensions.get('window').width;

export default class Landing extends Component {
  render (){
    return (
        <LinearGradient colors={['#0984e3','#74b9ff']} style={styles.parent}>
        	<Image source={logo} style={styles.image}/>
            <Text style={styles.title}>Hi ! Welcome to MyLibrary</Text>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('login')}>
                  <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('register')}>
                  <Text style={styles.text}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#74b9ff',
    fontSize: 20,
  },
  btnWrapper: {
    padding: 20,
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50
  },
  btn: {
    shadowColor: "#000",
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
    marginBottom: 100,
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain'
    }
})