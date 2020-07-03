import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default class Genre extends Component {
  logout = () => {
    this.props.logout()
  }
  render (){
    return (
      <View  style={styles.parent}>
        <LinearGradient colors={['#0984e3','#74b9ff']} style={styles.top}>
          <Text style={styles.title}>List Genres</Text>
        </LinearGradient>
        <View style={styles.btmWrapper}>
            <ScrollView style={styles.profile}>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
              <Text style={styles.profileSubText}>Tinky</Text>
              <Text style={styles.profileSubText}>tinky@mail.com</Text>
            </ScrollView>
        </View>
      </View>
    )
  }
}
// const mapStateToProps = state => ({
//     auth: state.auth,
// })
// const mapDispatchToProps = {  }
// export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#fff',
    flex: 1,
    width: deviceWidth,
    position: 'relative',
    alignItems: 'center',
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
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileText:{
    color: '#74b9ff',
    fontSize: 15,
    marginBottom: 1
  },
  profileSubText:{
    color: '#0984e3',
    fontSize: 20,
    margin: 10
  },
  profile: {
    padding: 30,
    borderRadius: 5,
    width: 300,
    backgroundColor: '#fff'
  }
})