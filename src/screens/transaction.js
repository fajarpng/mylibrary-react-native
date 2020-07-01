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

export default class Trans extends Component {
  render (){
    return (
        <LinearGradient colors={['#0984e3','#74b9ff']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={styles.page}>Your Books</Text>
          </View>
          <View style={styles.listWrapper}>
            <View style={styles.itemWrapper}>
              <View style={styles.imgWrapper}>
                <Image source={book} style={styles.image}/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.title}> I want to eat Your pancreas</Text>
                <Text style={styles.date}>Borrowed by Tinky</Text>
              </View>
              <TouchableOpacity style={styles.btnReturn}>
                <Text style={styles.return}>Return</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.itemWrapper}>
              <View style={styles.imgWrapper}>
                <Image source={b} style={styles.image}/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.title}>Very Nice</Text>
                <Text style={styles.date}>Borrowed by Tinky</Text>
              </View>
              <TouchableOpacity style={styles.btnReturn}>
                <Text style={styles.return}>Return</Text>
              </TouchableOpacity>
            </View>
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
    height: 100,
    padding: 20
  },
  page: {
    color: '#fff',
    fontSize: 20,
  },
  itemWrapper:{
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#fff',
    margin: 20,
    elevation: 5,
  },
  imgWrapper:{
    marginLeft: 10,
    top: -20,
    width: 70,
    height: 100,
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
  detail: {
    padding: 5,
    width: 170,
  },
  title: {
    color: '#0984e3',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  date: {
    color: '#74b9ff'
  },
  btnReturn:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  return: {
    color: 'red'
  }
})