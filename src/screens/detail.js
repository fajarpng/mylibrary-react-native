import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    Dimensions,
    Alert,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import {addTrans, clear} from '../redux/actions/actionData'
import {fetchTrans, fetchBook} from '../redux/actions/fetchData'

const deviceWidth = Dimensions.get('window').width;

class Detail extends Component {
  componentDidUpdate(){
      const {msg, isError} = this.props.actionData
      const param = '?page=1'
      if(msg !== ''){
          if(isError){
            Alert.alert(msg)
          } else {
            Alert.alert(msg)
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
    
    var isAvail
    if(status === 'Not Available'){
      isAvail = false
    }else(isAvail = true)
    return (
      <View style={styles.parent}>
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.top}>
          <View style={styles.detailWrapper}>
            <View style={styles.imgWrapper}>
              <Image source={{uri : image}} style={styles.image}/>
            </View>
            <View style={styles.detail}>
              <View>
                <Text style={styles.detailTitle}>{title}</Text>
                <Text style={styles.author}>{genre}</Text>
                <Text style={styles.author}>By {author}</Text>
              </View>
              {isAvail && (
                <TouchableOpacity style={styles.btn} onPress={this.borrowBook}>
                  <Text style={styles.text}>Borrow</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </LinearGradient>
        <View style={styles.synopsis}>
          <Text> {description} </Text>
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
    actionData: state.actionData,
    fetchData: state.fetchData,
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