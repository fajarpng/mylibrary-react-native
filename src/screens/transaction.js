import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Dimensions,
    Modal,
    Alert,
    FlatList,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import {deleteTrans, clear} from '../redux/actions/actionData'
import {fetchTrans, fetchBook} from '../redux/actions/fetchData'

const REACT_APP_URL = 'http://192.168.43.133:1000/'
const deviceWidth = Dimensions.get('window').width;

class Trans extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      id: ''
    }
  }
  componentDidMount(){
    this.props.fetchTrans()
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
          }
      this.props.clear()
      }
  }
  returnBook = (id) => {
    this.props.deleteTrans(id,this.props.auth.token)
  }
  render (){
    const { name} = this.props.auth
    const { trans, isLoading} = this.props.fetchData
    const { isLoad } = this.props.actionData
    
    const data = trans.filter(val => { return val.name === name})

    return (
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={styles.page}>Your Books</Text>
          </View>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View style={styles.itemWrapper}>
                  <View style={styles.imgWrapper}>
                    <Image source={{uri: `${REACT_APP_URL}img/${item.image}`}} style={styles.image}/>
                  </View>
                  <View style={styles.detail}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>Borrowed by {item.name}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.btnReturn}
                    onPress={() => this.setState({modalVisible: true, id: item.id})}>
                    <Icon name='undo-alt' color='red' size={20}/>
                    <Text style={styles.return}>Return</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.title}
              refreshing={isLoading}
              onEndReachedThreshold={0.5}
            />
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
                    onPress={() => this.returnBook(this.state.id)}
                    >
                      <Text style={styles.modalBtnText}>Return now</Text>
                    </TouchableOpacity>
                    )
                  }
                </View>
              </View>
            </Modal>
        </LinearGradient>
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    actionData: state.actionData,
    fetchData: state.fetchData,
})
const mapDispatchToProps = { fetchTrans, deleteTrans, clear, fetchBook }
export default connect(mapStateToProps, mapDispatchToProps)(Trans)

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
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
  topWrapper: {
    width: deviceWidth,
    height: 100,
    padding: 20,
  },
  page: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemWrapper:{
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 20,
    elevation: 5,
  },
  imgWrapper:{
    marginLeft: 10,
    top: -10,
    width: 70,
    height: 100,
    elevation: 5,
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
  detail: {
    padding: 5,
    width: 170,
  },
  title: {
    color: '#380036',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  date: {
    color: '#0CBABA'
  },
  btnReturn:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  return: {
    marginTop: 5,
    color: 'red'
  }
})