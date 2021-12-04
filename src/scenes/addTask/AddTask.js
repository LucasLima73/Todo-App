import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { firebase } from '../../firebase/config'

export default function NewTask(props) {
  const navigation = useNavigation()
  const userData = props.extraData
  const [description, setDescription] = useState(null)
  const database = firebase.default.firestore()

  const [day, setDay] = useState(0)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState(0)
  const [weekDay, setWeekDay] = useState('')

  useEffect(() => {
    const date = new Date()

    setDay(date.getDate())
    setYear(date.getFullYear())

    console.log(date.getDay())

    switch (date.getDay()) {
      case 0:
        setWeekDay('Domingo')
        break
      case 1:
        setWeekDay('Segunda-feira')
        break
      case 2:
        setWeekDay('Terça-feira')
        break
      case 3:
        setWeekDay('QUarta-feira')
        break
      case 4:
        setWeekDay('Quinta-feira')
        break
      case 5:
        setWeekDay('Sexta-feira')
        break
      case 6:
        setWeekDay('Sábado')
        break
    }

    switch (date.getMonth()) {
      case 0:
        setMonth('JAN')
        break
      case 1:
        setMonth('FEV')
        break
      case 2:
        setMonth('MAR')
        break
      case 3:
        setMonth('ABR')
        break
      case 4:
        setMonth('MAI')
        break
      case 5:
        setMonth('JUN')
        break
      case 6:
        setMonth('JUL')
        break
      case 7:
        setMonth('AGO')
        break
      case 8:
        setMonth('SET')
        break
      case 9:
        setMonth('OUT')
        break
      case 10:
        setMonth('NOV')
        break
      case 11:
        setMonth('DEZ')
        break
    }
  }, [])

  const getDate = () => {
    const result = `${day}/${month}/${year}`
   return result
    console.log(result)
  }

  function addTask() {
    database.collection('users').doc(userData.id).collection('history').add({
      date: getDate(),
      description: description,
      status: false,
    })
    database.collection('users').doc(userData.id).collection('task').add({
      date: getDate(),
      description: description,
      status: false,
    })
    setDescription('')
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  label: {
    width: '90%',
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    marginTop: 50,
    color: '#a9a9a9',
  },
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: '#a9a9a9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
