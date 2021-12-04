import React, { useState } from 'react'
import { Text, View, StatusBar, Image, TextInput, TouchableOpacity, useColorScheme } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { firebase } from '../../firebase/config'
import Spinner from 'react-native-loading-spinner-overlay'

export default function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [spinner, setSpinner] = useState(false)
  const scheme = useColorScheme()

  const onFooterLinkPress = () => {
    navigation.navigate('Registration')
  }

  const onLoginPress = () => {
    setSpinner(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              setSpinner(false)
              alert("User does not exist anymore.")
              return;
            }
          })
          .catch(error => {
            setSpinner(false)
            alert(error)
          });
      })
      .catch(error => {
        setSpinner(false)
        alert(error)
      })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
        <TextInput
          style={styles.darkinput}
          placeholder='E-mail'
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
          placeholder='Senha'
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.darkfooterText}>Não tem uma conta? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Registre-se</Text></Text>
        </View>
      </KeyboardAwareScrollView>
      <Spinner
        visible={spinner}
        textStyle={{ color: "#fff" }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </View>
  )
}