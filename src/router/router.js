import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux'

const Stack = createStackNavigator();

import Landing from '../screens/landing';
import Login from '../screens/login'
import Register from '../screens/register'
import Detail from '../screens/detail'
import Tab from '../screens/botNavbar'

class Route extends Component {
  render() {
  	let isLogin
  	if(this.props.auth.token !== null){
  		isLogin = true
  	}else{isLogin = false}
    return (
    	<NavigationContainer>
	        <Stack.Navigator>
		    	{!isLogin ? ( 
		    		<>
		        	<Stack.Screen options={{headerShown: false}} component={Landing} name={'landing'}/>
		        	<Stack.Screen 
		        		options={{
				          title: ' ',
				          headerStyle: {
				            backgroundColor: '#fff',
				            elevation: 0
				          },
				          headerTintColor: '#0CBABA',
				          headerTitleStyle: {
				            fontWeight: 'bold',
				          },
				        }}
		        		component={Login} 
		        		name={'login'}/>
		        	<Stack.Screen
		        		options={{
				          title: ' ',
				          headerStyle: {
				            backgroundColor: '#fff',
				            elevation: 0
				          },
				          headerTintColor: '#0CBABA',
				          headerTitleStyle: {
				            fontWeight: 'bold',
				          },
				        }}
		        		component={Register}
		        		name={'register'}/>
		    		</>) : (
		    		<>
		    		<Stack.Screen options={{headerShown: false}} component={Tab} name={'main'}/>
		    		<Stack.Screen
		        		options={{
				          title: 'Detail',
				          headerStyle: {
				            backgroundColor: '#380036',
				            elevation: 0
				          },
				          headerTintColor: '#fff',
				        }}
		        		component={Detail}
		        		name={'detail'}/> 
		    		</>)
		    	}
	        </Stack.Navigator>
	     </NavigationContainer>
    );
  }
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Route)