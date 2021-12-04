import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import LottieView from 'lottie-react-native'
import { MotiView, MotiText } from 'moti'
import { firebase } from '../../firebase/config'

export default function App(props) {
  const userData = props.extraData
  const [token, setToken] = useState('')
  const animation = useRef(null)

  useEffect(() => {
    firebase
      .firestore()
      .collection('tokens')
      .doc(userData.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data())
          const data = doc.data()
          setToken(data)
        } else {
          console.log('No such document!')
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  }, [])

  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration: 5000 }}
      style={styles.container}
    >
      <MotiText
        style={{ fontSize: 15, marginTop: -100 }}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 5000, delay: 2000 }}
      >
        Olá, {userData.fullName}! obrigado por instalar este App
      </MotiText>
      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 5000, delay: 2000 }}
        style={{ fontSize: 40, marginTop: 30, fontWeight: 'bold' }}
      >
        Criado por:
      </MotiText>
      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 5000, delay: 2000 }}
        style={{ marginBottom: 20, fontSize: 20 }}
      >
        Lucas Lima
      </MotiText>
      <LottieView
        source={require('../../../assets/walking.json')}
        style={{ width: 300, height: 300 }}
        resizeMode="cover"
        ref={animation}
        autoPlay={true}
      />
      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 5000, delay: 2000 }}
        style={{ marginTop: 40, fontSize: 15 }}
      >
        Acesse o{' '}
        <MotiText
          onPress={() => {
            Linking.openURL(
              "https://github.com/LucasLima73/Todo-App"
            );
          }}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 5000, delay: 2000 }}
          style={{ marginTop: 40, fontSize: 15, color: 'blue' }}
        >
          repositório
        </MotiText>{' '}
        do GitHub e divirta-se
      </MotiText>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
