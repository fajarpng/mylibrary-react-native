import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    FlatList,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import {fetchGenre} from '../../redux/actions/fetchData'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Profile extends Component {

  componentDidMount(){
    this.props.fetchGenre()
  }
  render (){
    const { genres, isLoading} = this.props.fetchData
    return (
      <View style={styles.parent}>
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.top}>
          <Text style={styles.title}>List Authors</Text>
        </LinearGradient>
        <View style={styles.btmWrapper}>
          <FlatList
            data={genres}
            renderItem={({item}) => (
              <Item
                title={item.genre}
              />
            )}
            keyExtractor={item => item.genre}
            // onRefresh={() => this.getData({page: currentPage})}
            refreshing={isLoading}
            // onEndReached={this.nextPage}
            onEndReachedThreshold={0.5}
          />
        </View>
      </View>
    )
  }
}

class Item extends Component {
  render() {
    return (
       <View>
          <View style={styles.profile}>
              <Text style={styles.authorText}>{this.props.title}</Text>
              <View style={styles.row}>
                <Icon name='trash' color='red' size={20}/>
                <Icon name='pencil-alt' color='orange' size={20}/>
              </View>
          </View>
       </View>
    )
  }
}
const mapStateToProps = state => ({
    fetchData: state.fetchData,
})
const mapDispatchToProps = { fetchGenre }
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#fff',
    height: deviceHeight - 50,
    width: deviceWidth,
    position: 'relative',
    paddingBottom: 50,
  },
  top: {
    padding: 20,
    width: deviceWidth,
    height: 400,
  },
  text: {
    color: '#74b9ff',
    fontSize: 20,
  },
  row: {
    width: 60,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  btmWrapper: {
    top: -300,
    width: deviceWidth,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  authorText:{
    color: '#380036',
    fontSize: 17,
  },
  desc: {
    color: '#fff',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  descWrapper: {
    padding: 10,
    backgroundColor: '#380036',
    borderBottomStartRadius: 5,
    width: deviceWidth - 50,
    borderBottomEndRadius: 5,
  },
  profile: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: deviceWidth - 50,
    backgroundColor: '#fff',
    elevation: 5,
  }
})