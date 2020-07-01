import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import home from '../assets/home.png'
import auth from '../assets/author.png'
import trans from '../assets/trans.png'
import gen from '../assets/gen.png'

const deviceWidth = Dimensions.get('window').width;

export default class Nav extends Component {
	render(){
		return(
			<View style={styles.botWrapper}>
				<TouchableOpacity  style={styles.listWrapper}>
					<Image source={home} style={styles.image}/>
	         		<Text style={styles.text}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity  style={styles.listWrapper}>
					<Image source={auth} style={styles.image}/>
	         		<Text style={styles.text}>Author</Text>
				</TouchableOpacity>
				<TouchableOpacity  style={styles.listWrapper}>
					<Image source={gen} style={styles.image}/>
	         		<Text style={styles.text}>Genre</Text>
				</TouchableOpacity>
				<TouchableOpacity  style={styles.listWrapper}>
					<Image source={trans} style={styles.image}/>
	         		<Text style={styles.text}>Transaction</Text>
				</TouchableOpacity>
         	</View>
		)
	}
}

const styles = StyleSheet.create({
	image: {
		width: 30,
		height: 30,
    	resizeMode: 'contain'
	},
	text: {
		color: '#929292'
	},
	listWrapper: {
		alignItems: 'center',
		width: 80,
	},
	botWrapper:{
		flexDirection: 'row',
    	justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 5,
		paddingTop: 5,
		alignItems: 'center',
	    shadowColor: "#000",
	    shadowOpacity: 0.5,
	    elevation: 5,
	    width: deviceWidth,
	    height: 60,
	    backgroundColor: '#fff',
	    bottom: 0,
	    position: 'absolute'
	  }
})