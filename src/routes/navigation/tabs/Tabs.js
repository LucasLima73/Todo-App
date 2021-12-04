import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { Ionicons } from '@expo/vector-icons'
import { colors } from 'theme'

// stack navigators
import {
  HomeNavigator,
  ProfileNavigator,
  AboutNavigator,
  AddTaskNavigator,
  TaskNavigator,
  EditNavigator
} from '../stacks'

const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }) => (
  <View style={{ backgroundColor: '#fff' }}>
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#2a363b',
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  </View>
)

const TabNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
        showLabel: false,
        tabStyle: {
          bottom: 30,
          backgroundColor: '#fff',
          height: 90,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="home"
                size={30}
                style={{ color: focused ? '#000' : '#dbdbdb' }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#dbdbdb',
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
        name="Home"
        children={() => (
          <HomeNavigator user={user} navigationProps={navigationProps} />
        )}
      />
          <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="newspaper"
                size={30}
                style={{ color: focused ? '#000' : '#dbdbdb' }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#dbdbdb',
                  fontSize: 12,
                }}
              >
                To do
              </Text>
            </View>
          ),
        }}
        name="Task"
        children={() => (
          <TaskNavigator user={user} navigationProps={navigationProps} />
        )}
      />
     
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="add"
                size={50}
                style={{ color: focused ? '#000' : '#dbdbdb' }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#dbdbdb',
                  fontSize: 12,
                }}
              >
              </Text>
            </View>
          ),
        }}
        name="AddTask"
        children={() => (
          <AddTaskNavigator user={user} navigationProps={navigationProps} />
        )}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="rocket"
                size={30}
                style={{ color: focused ? '#000' : '#dbdbdb' }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#dbdbdb',
                  fontSize: 12,
                  right: 5,
                }}
              >
                Sobre
              </Text>
            </View>
          ),
        }}
        name="About"
        children={() => (
          <AboutNavigator user={user} navigationProps={navigationProps} />
        )}
      />
       <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="person"
                size={30}
                style={{ color: focused ? '#000' : '#dbdbdb' }}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#dbdbdb',
                  fontSize: 12,
                }}
              >
                Perfil
              </Text>
            </View>
          ),
        }}
        name="Profile"
        children={() => (
          <ProfileNavigator user={user} navigationProps={navigationProps} />
        )}
      />
       
    </Tab.Navigator>
  )
}

export default TabNavigator
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})
