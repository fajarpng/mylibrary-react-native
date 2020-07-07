import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    Dimensions,
    FlatList,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import {fetchBook} from '../redux/actions/fetchData'

const deviceWidth = Dimensions.get('window').width;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPage: 1,
      search: ''
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const {currentPage, search} = this.state
    const param = `?page=${currentPage}&search=${search}`
    const {books} = this.props.fetchData

    this.props.fetchBook(param)
    // this.setState({data: [...this.state.data, ...books]})
  }
  search = () => {
    this.setState({currentPage: 1, data: []}, () => {
      this.getData()
    })
  }
  nextPage = () => {
    this.setState({currentPage: this.state.currentPage + 1}, () => {
      this.getData()
    })
  }
  render() {
    const { name } = this.props.auth
    const {books, isLoading} = this.props.fetchData
    const { data, currentPage } = this.state;
    return (
      <LinearGradient colors={['#380036','#0CBABA']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={styles.hi}>Hi,</Text>
            <Text style={styles.name}>{name} !</Text>
            <View style={styles.inputWraper}>
              <TextInput placeholder='Search book ...'
                style={styles.input}
                onChangeText={(e) => this.setState({search: e})}/>
              <Icon name='search' size={20} onPress={()=>this.search()}/>
            </View>
          </View>
          <Text style={styles.listText}>Books List</Text>
            <FlatList
              style={styles.listWrapper} 
              data={books}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.imgWrapper} 
                  onPress={() => this.props.navigation.navigate('detail',{item})}>
                  <Image source={{uri : item.image}} style={styles.image}/>
                </TouchableOpacity>
              )}
              numColumns={3}
              keyExtractor={item => item.image}
              onRefresh={() => this.getData()}
              refreshing={isLoading}
              // onEndReached={this.nextPage}
              onEndReachedThreshold={0.5}
            />
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
    fetchData: state.fetchData,
    auth: state.auth,
})
const mapDispatchToProps = { fetchBook }
export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  topWrapper: {
    width: deviceWidth,
    height: 200,
    padding: 20
  },
  hi: {
    color: '#fff',
    fontSize: 40,
  },
  name: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputWraper: {
    width: deviceWidth - 50,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  input: {
    width: deviceWidth - 100,
    alignSelf: 'center',
    padding: 10
  },
  listText: {
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 20,
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  listWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  imgWrapper:{
    width: 100,
    height: 150,
    margin: 5,
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
})