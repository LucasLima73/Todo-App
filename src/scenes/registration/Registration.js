import React, { useState } from 'react'
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  StatusBar,
  useColorScheme,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { firebase } from '../../firebase/config'
import Spinner from 'react-native-loading-spinner-overlay'

export default function Registration({ navigation }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [spinner, setSpinner] = useState(false)
  const scheme = useColorScheme()

  const onFooterLinkPress = () => {
    navigation.navigate('Login')
  }

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    setSpinner(true)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          fullName,
          avatar:
            'https://firebasestorage.googleapis.com/v0/b/reactnative-expo-boilerplate.appspot.com/o/icon.png?alt=media&token=7f2812b7-e1d9-48e3-9720-e79d6650cea5',
        }
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Home', { user: data })
          })
          .catch((error) => {
            setSpinner(false)
            alert(error)
          })
      })
      .catch((error) => {
        setSpinner(false)
        alert(error)
      })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
        <TextInput
          style={styles.darkinput}
          placeholder="Seu nome"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.darkinput}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.darkinput}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.darkinput}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirmar senha"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Criar conta</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text
            style={
              styles.darkfooterText
            }
          >
            J?? possui uma conta?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Entrar
            </Text>
          </Text>
        </View>
       
      </KeyboardAwareScrollView>
      <Spinner
        visible={spinner}
        textStyle={{ color: '#fff' }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </View>
  )
}
