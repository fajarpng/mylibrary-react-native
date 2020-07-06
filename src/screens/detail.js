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

import book from '../assets/b.jpg'

const deviceWidth = Dimensions.get('window').width;

export default class Landing extends Component {
  render (){
    return (
      <View style={styles.parent}>
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.top}>
          <View style={styles.detailWrapper}>
            <View style={styles.imgWrapper}>
              <Image source={book} style={styles.image}/>
            </View>
            <View style={styles.detail}>
              <View>
                <Text style={styles.detailTitle}>Very Nice</Text>
                <Text style={styles.author}>Romance</Text>
                <Text style={styles.author}>By Marey Dermansky</Text>
              </View>
              <TouchableOpacity style={styles.btn}><Text style={styles.text}>Borrow</Text></TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.synopsis}>
          <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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
    height: 300,
  },
  text: {
    color: '#74b9ff',
    fontSize: 20,
  },
  detailWrapper: {
    top: 80,
    marginLeft: 10,
    width: deviceWidth,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    height: 40,
    elevation: 5,
    alignSelf: 'center',
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
  author:{
    color: '#fff',
    marginLeft: 10,
    fontSize: 15,
  },
  detailTitle:{
    color: '#fff',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  detail: {
    justifyContent: 'space-between',
    borderRadius: 15,
    height: 200,
    width: 200,
  },
  imgWrapper:{
    width: 130,
    height: 200,
    elevation: 20,
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
  synopsis: {
    marginTop: 20,
    padding: 10,
    width: deviceWidth,
  },
})