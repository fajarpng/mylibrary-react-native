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
import BotNav from './botNavbar'

const deviceWidth = Dimensions.get('window').width;

export default class Trans extends Component {
  render (){
    return (
        <LinearGradient colors={['#0984e3','#74b9ff']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={styles.page}>Your books list</Text>
          </View>
          <View style={styles.listWrapper}>
            <View style={styles.itemWrapper}>
              <Image source={book} style={styles.image}/>
              <View>
                <Text> I want to eat Your pancreas</Text>
                <Text>Borrowed 12-10-2020</Text>
              </View>
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
    height: 130,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 30,
    padding: 10
  },
  imgWrapper:{
    shadowColor: "#000",
    elevation: 5,
    borderRadius: 15,
  },
  image: {
    top: -60,
    borderRadius: 15,
    width: 100,
    height: 200,
    resizeMode: 'contain',
    marginRight: 5
  },
  title: {
    fontSize: 30
  }
})