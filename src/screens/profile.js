import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth'
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

class Profile extends Component {
  logout = () => {
    this.props.logout()
  }
  render (){
    const {name, email} = this.props.auth
    // const decoded = jwt.decode(token)
    // console.log(decoded)
    // console.log('aaaaaaaaaaaaaaaaaaaaaaa')
    return (
      <View  style={styles.parent}>
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.top}>
          <Text style={styles.title}>Profile View</Text>
          
        </LinearGradient>
        <View style={styles.btnWrapper}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>Username</Text>
              <Text style={styles.profileSubText}>{name}</Text>
              <Text style={styles.profileText}>Email</Text>
              <Text style={styles.profileSubText}>{email}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={this.logout}><Text style={styles.text}>LOGOUT</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
})
const mapDispatchToProps = { logout }
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

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
    color: '#0CBABA',
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
    color: '#0CBABA',
    fontSize: 15,
    marginBottom: 1
  },
  profileSubText:{
    color: '#380036',
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