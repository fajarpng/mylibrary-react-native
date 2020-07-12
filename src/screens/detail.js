import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    Modal,
    Alert,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import {addTrans, clear} from '../redux/actions/actionData'
import {fetchTrans, fetchBook} from '../redux/actions/fetchData'

const deviceWidth = Dimensions.get('window').width;
const REACT_APP_URL = 'http://192.168.43.133:1000/'

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
    }
  }
  componentDidUpdate(){
      const {msg, isError} = this.props.actionData
      const param = '?page=1'
      if(msg !== ''){
          if(isError){
            Alert.alert(msg)
          } else {
            Alert.alert(msg)
            this.setState({modalVisible: false})
            this.props.fetchTrans()
            this.props.fetchBook(param)
            this.props.navigation.goBack()
          }
      this.props.clear()
      }
  }
  borrowBook = () => {
    const {id, token} = this.props.auth
    const data = {
      id_book: this.props.route.params.item.id, 
      id_user: id
    }
    this.props.addTrans(data, token)
  }
  render (){
    const {title, author, genre, status, description, image} = this.props.route.params.item
    const {isLoad} = this.props.actionData
    var isAvail
    if(status === 'Not Available'){
      isAvail = false
    }else(isAvail = true)
    return (
      <View style={styles.parent}>
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.top}>
          <View style={styles.detailWrapper}>
            <View style={styles.imgWrapper}>
              <Image source={{uri : `${REACT_APP_URL}img/${image}`}} style={styles.image}/>
            </View>
            <View style={styles.detail}>
              <View>
                <Text style={styles.detailTitle}>{title}</Text>
                <Text style={styles.author}>{genre}</Text>
                <Text style={styles.author}>By {author}</Text>
              </View>
              {isAvail && (
                <TouchableOpacity style={styles.btn} onPress={() => this.setState({modalVisible: true})}>
                  <Text style={styles.text}>Borrow</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </LinearGradient>
        <ScrollView style={styles.synopsis}>
          <Text> {description} </Text>
        </ScrollView>
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        >
          <View style={styles.modalParent}>
            <View style={styles.modalWraper}>
              <TouchableOpacity
              style={{alignSelf:'flex-end', padding: 10}}
              onPress={() => {
                this.setState({modalVisible: false});
              }}
              >
                <Icon name='times' size={20} style={{alignSelf:'flex-end'}}/>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Are you sure ?</Text>
              {isLoad ? (
                <View style={styles.modalBtn}>
                  <ActivityIndicator size={25} color="#fff" />
                  <ActivityIndicator size={25} color="#fff" />
                  <ActivityIndicator size={25} color="#fff" />
                </View>
                ):(
                <TouchableOpacity
                style={styles.modalBtn}
                onPress={this.borrowBook}
                >
                  <Text style={styles.modalBtnText}>Borrow now</Text>
                </TouchableOpacity>
                )
              }
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
    actionData: state.actionData,
})
const mapDispatchToProps = { fetchTrans, addTrans, clear, fetchBook }
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    width: deviceWidth,
    position: 'relative',
    alignItems: 'center',
  },
  modalParent: {
    flex: 1,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalWraper: {
    backgroundColor: '#fff',
    width: deviceWidth - 50,
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 25,
    color: '#0CBABA',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20
  },
  modalBtn:{
    backgroundColor: '#0CBABA',
    justifyContent: 'center',
    width: 'auto',
    flexDirection: 'row',
    padding: 10,
  },
  modalBtnText:{
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center'
  },
  top: {
    paddingTop: 30,
    width: deviceWidth,
    height: 300,
  },
  text: {
    color: '#0CBABA',
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
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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