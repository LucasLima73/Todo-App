import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../../scenes/login'
import Registration from '../../../scenes/registration'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import Detail from '../../../scenes/details'
import About from '../../../scenes/about'
import AddTask from '../../../scenes/addTask'
import Task from '../../../scenes/task'
import OnBoarding from '../../../scenes/onBoarding'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

// ------------------------------------
// Navigators
// ------------------------------------

export const LoginNavigator = (props) => {
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
        <Stack.Screen
        options={{ headerShown: false }}
        name="OnBoarding"
        component={OnBoarding}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={Registration}
      />
    </Stack.Navigator>
  )
}

export const HomeNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen options={{ headerShown: false }} name="Home">
        {(props) => <Home {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const ProfileNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen options={{ headerShown: false }} name="Profile">
        {(props) => <Profile {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Detail">
        {(props) => <Detail {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name="Edit">
        {(props) => <Edit {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const AboutNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen options={{ headerShown: false }} name="About">
        {(props) => <About {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const AddTaskNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen options={{ headerShown: false }} name="AddTask">
        {(props) => <AddTask {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
export const TaskNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen options={{ headerShown: false }} name="AddTask">
        {(props) => <Task {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
