import React, {Component} from 'react'
import { connect } from 'react-redux'
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
            email: 'tinky@mail.com',
            password:'123'
        }
  }

  login = () => {
    console.log(this.state)
    // this.props.login(this.state)
  }
  componentDidUpdate(){
      const {msg, isError} = this.props.auth
      if(msg !== ''){
          if(isError){
               Alert.alert("Alert Title")
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
                <TextInput placeholder='Email' style={styles.input} onChangeText={(e) => this.setState({email: e})}/>
                <TextInput placeholder='Password' style={styles.input} onChangeText={(e) => this.setState({password: e})}/>
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