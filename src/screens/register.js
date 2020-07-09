import React, {Component} from 'react'
import { connect } from 'react-redux'
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

import { register, clear } from '../redux/actions/auth'
import logo from '../assets/logo-b.png'

const deviceWidth = Dimensions.get('window').width;

class Register extends Component {
  constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password:'',
            id_role: 2
        }
  }
  register = () => {
    this.props.register(this.state)
  }
  componentDidUpdate(){
    const {msg, isError} = this.props.auth
    if(msg !== ''){
      if(isError){
        Alert.alert(msg)
      }
      else {
        Alert.alert(msg)
        this.props.navigation.navigate('login')
      }
    this.props.clear()
    }
  }
  render (){
    return (
        <View style={styles.parent}>
        	<Image source={logo} style={styles.image}/>
            <Text style={styles.title}>Hi ! Create your account</Text>
            <View style={styles.btnWrapper}>
              <View style={styles.inputWraper}>
                <TextInput
                  placeholder='Username'
                  onChangeText = {(e) => this.setState({name: e})}
                  style={styles.input}/>
                <TextInput
                  placeholder='Email'
                  onChangeText = {(e) => this.setState({email: e})}
                  style={styles.input}/>
                <TextInput
                  placeholder='Password'
                  onChangeText = {(e) => this.setState({password: e})}
                  secureTextEntry={true}
                  style={styles.input} />
              </View>
                <TouchableOpacity
                  onPress={this.register}
                  style={styles.btn}>
                  <Text style={styles.text}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.linkWraper}>
              <Text >Have an account ?</Text>
              <Text style={styles.title} onPress={() => this.props.navigation.navigate('login')}> Login now</Text>
            </View>
    </View>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
})
const mapDispatchToProps = { register, clear }

export default connect(mapStateToProps, mapDispatchToProps)(Register)
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#fff',
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