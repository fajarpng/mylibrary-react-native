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
import BotNav from './botNavbar'
const deviceWidth = Dimensions.get('window').width;

export default class Home extends Component {
  render (){
    const {name, input} = styles
    return (
        <LinearGradient colors={['#0984e3','#74b9ff']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={name}>Hi,</Text>
            <Text style={name}>Tinky !</Text>
            <View style={styles.inputWraper}>
              <TextInput placeholder='Search book ...' style={input} />
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
    height: 200,
    padding: 20
  },
  name: {
    color: '#fff',
    fontSize: 40,
  },
  input: {
    marginTop: 30,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10
  }
})