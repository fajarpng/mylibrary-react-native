import React, {Component} from 'react'
import qs from 'querystring'
import { connect } from 'react-redux'
import axios from 'axios'
import { login, clear } from '../redux/actions/auth'
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    Alert,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import logo from '../assets/logo-b.png'

const deviceWidth = Dimensions.get('window').width;

class Login extends Component {
  constructor(props){
        super(props)
        this.state = {
            email: '',
            password:''
        }
  }

  login = () => {
    this.props.login(this.state)
  }
  componentDidUpdate(){
      const {msg, isError} = this.props.auth
      if(msg !== ''){
          if(isError){
               Alert.alert("Failed")
          } else {
               Alert.alert("Success")
          }
      this.props.clear()
      }
  }
  render (){
    return (
        <View style={styles.parent}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.title}>Hi ! Log in to your account</Text>
            <View style={styles.btnWrapper}>
              <View style={styles.inputWraper}>
                <TextInput
                  placeholder='Email'
                  style={styles.input} onChangeText={(e) => this.setState({email: e})}/>
                <TextInput
                  placeholder='Password'
                  secureTextEntry={true}
                  style={styles.input} onChangeText={(e) => this.setState({password: e})}/>
              </View>
                <TouchableOpacity style={styles.btn} onPress={this.login} ><Text style={styles.text}>LOGIN</Text></TouchableOpacity>
            </View>
            <View style={styles.linkWraper}>
              <Text >Don t have an account ?</Text>
              <Text style={styles.title} onPress={() => this.props.navigation.navigate('register')}> Register now</Text>
            </View>
    </View>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
})
const mapDispatchToProps = { login, clear }

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
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
    elevation: 5,
    alignItems: 'center',
    backgroundColor: '#0CBABA',
    width: 250,
    borderRadius: 15,
    padding: 5
  },
  title: {
    color: '#0CBABA',
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
    borderBottomColor: '#0CBABA',
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
    }
})