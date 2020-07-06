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

import {fetchAuthor} from '../../redux/actions/fetchData'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Profile extends Component {

  componentDidMount(){
    this.props.fetchAuthor()
  }
  render (){
    const { authors, isLoading} = this.props.fetchData
    return (
      <View style={styles.parent}>
        <LinearGradient colors={['#380036','#0CBABA']} style={styles.top}>
          <Text style={styles.title}>List Authors</Text>
        </LinearGradient>
        <View style={styles.btmWrapper}>
            <FlatList
              data={authors}
              renderItem={({item}) => (
                <Item
                  title={item.author}
                  content={item.description}
                />
              )}
              keyExtractor={item => item.author}
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
  constructor(props){
    super(props)
    this.state = {
      expanded : false
    }
  }
  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }
  render() {
    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.profile} onPress={()=>this.toggleExpand()}>
                <Text style={styles.authorText}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'chevron-up' : 'chevron-down'} size={20} color='#000' />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.descWrapper}>
                    <Text style={styles.desc}>{this.props.content}</Text>    
                </View>
            }
       </View>
    )
  }
}
const mapStateToProps = state => ({
    fetchData: state.fetchData,
})
const mapDispatchToProps = { fetchAuthor }
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: deviceWidth - 50,
    backgroundColor: '#fff',
    elevation: 5,
  }
})