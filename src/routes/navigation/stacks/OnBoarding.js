import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import OnBoarding from '../../../scenes/onBoarding'
import Login from '../../../scenes/login'
import { colors } from 'theme'

// stack navigators
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const OnBoardings = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.lightPurple,
          inactiveTintColor: colors.gray,
        }}
        initialRouteName="OnBoarding"
        swipeEnabled={false}
      >
        <Tab.Screen name="OnBoarding" component={OnBoarding} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default OnBoardings
