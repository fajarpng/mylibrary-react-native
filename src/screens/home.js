import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
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
      isLoading: false,
      currentPage: 1,
    };
  }
  async componentDidMount() {
    await this.getData();
    this.props.fetchBook()
  }
  getData = async () => {
    this.setState({isLoading: true});
    const {data} = await axios.get(
      'https://reqres.in/api/users?page='.concat(this.state.currentPage),
    );
    this.setState({data: [...this.state.data, ...data.data], isLoading: false});
  };
  nextPage = () => {
    this.setState({currentPage: this.state.currentPage + 1}, () => {
      this.getData({page: this.state.currentPage});
    });
    // console.log('end of data');
  };
  render() {
    const {name} = this.props.auth
    const {books, isLoading} = this.props.fetchData
    const {data, currentPage} = this.state;
    return (
      <LinearGradient colors={['#380036','#0CBABA']} style={styles.parent}>
          <View style={styles.topWrapper}>
            <Text style={styles.hi}>Hi,</Text>
            <Text style={styles.name}>{name} !</Text>
            <View style={styles.inputWraper}>
              <TextInput placeholder='Search book ...' style={styles.input} />
            </View>
          </View>
          <Text style={styles.listText}>Books List</Text>
          <FlatList
            data={books}
            renderItem={({item}) => (
              <Item
                title={item.title}
                image={item.image}
              />
            )}
            keyExtractor={item => item.title}
            // onRefresh={() => this.getData({page: currentPage})}
            refreshing={isLoading}
            // onEndReached={this.nextPage}
            onEndReachedThreshold={0.5}
          />   
      </LinearGradient>
    );
  }
}

class Item extends Component {
  render (){
    return (
      <View style={styles.listWrapper}>
        <TouchableOpacity style={styles.imgWrapper} onPress={() => this.props.navigation.navigate('detail')}>
          <Image source={{uri : this.props.image}} style={styles.image}/>
        </TouchableOpacity>
      </View>
    )
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
  input: {
    marginTop: 30,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
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
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgWrapper:{
    width: 100,
    height: 150,
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