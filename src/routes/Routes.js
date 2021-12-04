import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import AsyncStorage  from '@react-native-async-storage/async-storage'

import Main from './navigation'
import Stack from './navigation/stacks/Stacks'

const Routes = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null)

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })
  }, [])

  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  // rendering
  // if (!checked) return <Text>Loading...</Text>

  if (isFirstLaunch === null) {
    return null
  } else if (isFirstLaunch === true) {
    return <Stack />
  } else {
    return <Main />
  }
}

export default Routes
