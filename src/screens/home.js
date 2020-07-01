import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import book from '../assets/a.jpg'
import b from '../assets/b.jpg'
import BotNav from './botNavbar'
const deviceWidth = Dimensions.get('window').width;

export default class Home extends Component {
  render (){
    const {name, input, hi} = styles
    return (
        <LinearGradient colors={['#0984e3','#74b9ff']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={hi}>Hi,</Text>
            <Text style={name}>Tinky !</Text>
            <View style={styles.inputWraper}>
              <TextInput placeholder='Search book ...' style={input} />
            </View>
          </View>
          <Text style={styles.listText}>Books List</Text>
          <View style={styles.listWrapper}>
            <TouchableOpacity style={styles.imgWrapper}>
              <Image source={book} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgWrapper}>
              <Image source={b} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgWrapper}>
              <Image source={b} style={styles.image}/>
            </TouchableOpacity>
          </View>
          <View style={styles.listWrapper}>
            <TouchableOpacity style={styles.imgWrapper}>
              <Image source={b} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgWrapper}>
              <Image source={book} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgWrapper}>
              <Image source={b} style={styles.image}/>
            </TouchableOpacity>
          </View>
          <BotNav/>
        </LinearGradient>

    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  topWrapper: {
    width: deviceWidth,
    height: 200,
    padding: 20
  },
  hi: {
    color: '#fff',
    fontSize: 40,
  },
  name: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 30,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10
  },
  listText: {
    marginTop: 40,
    marginLeft: 10,
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  listWrapper: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgWrapper:{
    width: 100,
    height: 150,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  image: {
    flex:1,
    height: undefined,
    width: undefined,
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 5
  },
})