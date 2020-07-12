import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { logout, uploadImage, clear } from '../redux/actions/auth'
import FilePickerManager from 'react-native-file-picker'
import {
    StyleSheet,
    View,
    Dimensions,
    Modal,
    Alert,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';

const REACT_APP_URL = 'http://192.168.43.133:1000/'
import logo from '../assets/logo-b.png'

const deviceWidth = Dimensions.get('window').width;

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  selectImage = () => {
    const {id} = this.props.auth

    FilePickerManager.showFilePicker(null, (response) => {
    console.log('Response = ', response);
   
    if (response.didCancel) {
      console.log('User cancelled file picker');
    }
    else if (response.error) {
      console.log('FilePickerManager Error: ', response.error);
    }
    else {
      const data = new FormData()
      data.append('image', {
        name : response.fileName,
        size : response.size,
        type: response.type,
        uri: response.uri
      })
      this.props.uploadImage(id, data)
      console.log(response, data)
    }
    })
  }
  logout = () => {
    this.props.logout()
  }
  componentDidUpdate(){
      const {msg, isError} = this.props.auth
      if(msg !== ''){
          if(isError){
            Alert.alert(msg)
          } else {
            Alert.alert(msg)
          }
      this.props.clear()
      }
  }
  render (){
    const {name, email, image} = this.props.auth
    return (
      <View  style={styles.parent}>
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.top}>
          <Text style={styles.title}>Profile View</Text>
          <View style={styles.imgWrapper}>
            {image !== null ? (
              <Image source={{uri : `${REACT_APP_URL}img/${image}`}} style={styles.photo}/>
              ):(
              <Icon name='user-alt' size={90} color='#fff' style={styles.icon}/>
              )
            }
          </View>
          <TouchableOpacity
            style={styles.editPhoto}
            onPress={this.selectImage}>
            <Icon name='camera' size={20} color='#fff'/>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.btnWrapper}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>Username</Text>
              <Text style={styles.profileSubText}>{name}</Text>
              <Text style={styles.profileText}>Email</Text>
              <Text style={styles.profileSubText}>{email}</Text>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={this.logout}>
              <Text style={styles.text}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
})
const mapDispatchToProps = { logout, uploadImage, clear }
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
  imgWrapper: {
    marginTop: 50,
    justifyContent: 'center',
    width: 180,
    height: 180,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff'
  },
  icon: {
    alignSelf: 'center'
  },
  btnWrapper: {
    top: -60,
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
  photo: {
    flex:1,
    height: undefined,
    width: undefined,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  editPhoto:{
    top: -45,
    left: 50,
    backgroundColor: '#0CBABA',
    borderRadius: 50,
    padding: 10,
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