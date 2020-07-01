import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import logo from '../assets/logo-b.png'

const deviceWidth = Dimensions.get('window').width;

export default class Register extends Component {
  render (){
    return (
        <View style={styles.parent}>
        	<Image source={logo} style={styles.image}/>
            <Text style={styles.title}>Hi ! Create your account</Text>
            <View style={styles.btnWrapper}>
              <View style={styles.inputWraper}>
                <TextInput placeholder='Username' style={styles.input}/>
                <TextInput placeholder='Email' style={styles.input}/>
                <TextInput placeholder='Password' style={styles.input} />
              </View>
                <TouchableOpacity style={styles.btn}><Text style={styles.text}>REGISTER</Text></TouchableOpacity>
            </View>
            <View style={styles.linkWraper}>
              <Text >Have an account ?</Text>
              <Text style={styles.title}> Login now</Text>
            </View>
    </View>
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
    color: '#fff',
    fontSize: 20,
  },
  btnWrapper: {
    padding: 20,
    width: deviceWidth,
    alignItems: 'center',
    paddingBottom: 50
  },
  btn: {
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    backgroundColor: '#0984e3',
    width: 250,
    borderRadius: 15,
    padding: 5
  },
  title: {
    color: '#0984e3',
    marginBottom: 20,
  },
  linkWraper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  inputWraper: {
    marginBottom:50
  },
  input: {
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: '#0984e3',
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
    }
})