import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import { fetchTrans } from '../redux/actions/fetchData'

const deviceWidth = Dimensions.get('window').width;

class Trans extends Component {
  componentDidMount(){
    this.props.fetchTrans()
  }
  render (){
    // const { trans, isLoading} = this.props.fetchData
    return (
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={styles.page}>Your Books</Text>
          </View>
            
        </LinearGradient>
    )
  }
}
// class Item extends Component {
//   render() {
//     return (
//        <View style={styles.itemWrapper}>
//         <View style={styles.imgWrapper}>
//           <Image source={this.props.cover} style={styles.image}/>
//         </View>
//         <View style={styles.detail}>
//           <Text style={styles.title}>{this.props.title}</Text>
//           <Text style={styles.date}>Borrowed by {this.props.name}</Text>
//         </View>
//         <TouchableOpacity style={styles.btnReturn}>
//           <Icon name='undo-alt' color='red' size={20}/>
//           <Text style={styles.return}>Return</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

const mapStateToProps = state => ({
    fetchData: state.fetchData,
})
const mapDispatchToProps = { fetchTrans }
export default connect(mapStateToProps, mapDispatchToProps)(Trans)

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
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
    color: '#74b9ff'
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