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

import {fetchBook, fetchGenre, clear} from '../redux/actions/fetchData'

const deviceWidth = Dimensions.get('window').width;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPage: 1,
      search: '',
      genre: ''
    };
  }
  componentDidMount() {
    this.getData(this.state.genre);
  }
  getData = (genre) => {
    const {currentPage, search, data} = this.state
    const param = `?page=${currentPage}&search=${search}&id_genre=${genre}`

    this.props.fetchBook(param)
  }
  componentDidUpdate(){
    const {isLoading, books, msg} = this.props.fetchData
    if(msg === 'FULFILED'){
      if (isLoading) {
        console.log(msg)
      } else {
        this.setData()
      }
      this.props.clear()
    }
    ;
  }
  setData = () => {
    const { books } = this.props.fetchData
    const {currentPage, search} = this.state

    if (currentPage > 1) {
      console.log('NEXT PAGE')
      console.log(books)
      this.setState({data: [...this.state.data, ...books]})
    } else {
      console.log('FRIST PAGE')
      console.log(books)
      this.setState({data: [...books]})
    }
  }
  onRefresh = () => {
    this.setState({currentPage: 1, data: [], search: '', genre:''}),
    this.props.fetchBook('?page=1')
  }
  search = () => {
    this.setState({currentPage: 1, data: []}, () => {
      this.getData('')
    })
  }
  nextPage = () => {
    const {pageInfo} = this.props.fetchData
    const {currentPage, genre} =this.state
    console.log('AAAAAA NEXT PAGE AAAAAAAAA')
    if ( pageInfo.nextLink !== null) {
      if( (genre !== '') && ((currentPage + 1) !== pageInfo.totalPage)){
        this.setState({currentPage: currentPage + 1}, () => {
          this.getData(genre)
        })
      } else {
        this.setState({currentPage: currentPage + 1}, () => {
          this.getData(genre)
        })
      }
    }
  }
  render() {
    const { name } = this.props.auth
    const {books, genres, isLoading} = this.props.fetchData
    const { data, currentPage } = this.state;
    return (
      <LinearGradient colors={['#380036','#0CBABA']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={styles.hi}>Hi,</Text>
            <Text style={styles.name}>{name} !</Text>
            <View style={styles.inputWraper}>
              <TextInput placeholder='Search book ...'
                value={this.state.search}
                style={styles.input}
                onChangeText={(e) => this.setState({search: e})}/>
                <TouchableOpacity>
                  <Icon name='search' color='#380036' size={20} onPress={()=>this.search()}/>
                </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.listText}>Books List</Text>
          <View>
            <FlatList
              style={styles.listGenre}
              horizontal
              data={genres}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.btnGenre}
                  onPress={() => this.setState({genre: item.id},this.getData(item.id))}>
                  <Text style={styles.textGenre}>{item.genre}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.genre}
              refreshing={isLoading}
              onEndReachedThreshold={0.2}
            />
          </View>
          <FlatList
            style={styles.listWrapper} 
            data={books}
            renderItem={({item}) => (
              <View style={styles.bookWrapper}>
              <TouchableOpacity style={styles.imgWrapper} 
                onPress={() => this.props.navigation.navigate('detail',{item})}>
                <Image source={{uri : item.image}} style={styles.image}/>
              </TouchableOpacity>
              <Text style={styles.titleText}> {item.title} </Text>
              </View>
            )}
            numColumns={3}
            keyExtractor={item => item.id.toString()}
            onRefresh={this.onRefresh}
            refreshing={isLoading}
            onEndReached={this.nextPage}
            onEndReachedThreshold={0.2}
          />
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
    fetchData: state.fetchData,
    auth: state.auth,
})
const mapDispatchToProps = { fetchBook, fetchGenre, clear}
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
    marginTop: 20,
    marginLeft: 10,
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  listWrapper: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bookWrapper: {

  },
  titleText: {
    width: 100,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  imgWrapper:{
    width: 100,
    height: 150,
    margin: 5,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  listGenre: {
    marginTop: 10,
  },
  btnGenre: {
    marginLeft: 10,
    backgroundColor: '#0CBABA',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  textGenre: {
    color: '#fff',
    fontSize: 17
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