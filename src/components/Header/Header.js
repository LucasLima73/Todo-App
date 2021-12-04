import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import { Container } from './styles';

const Header = () => {
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

  return (
      <View style={styles.header}>
        <View style={styles.date}>
          <Text style={styles.dateDay}>{day}</Text>
          <View style={styles.dateMonthYear}>
            <Text style={styles.dateMonth}>{month}</Text>
            <Text style={styles.dateYear}>{year}</Text>
          </View>
        </View>
        <Text style={styles.dateWeek}>{weekDay}</Text>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 64,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateDay: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 56,
    color: '#6A6A6A',
  },
  dateMonth: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 18,
    color: '#6A6A6A',
  },
  dateYear: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 18,
    color: '#6A6A6A',
  },
  dateMonthYear: {
    marginLeft: 10,
  },
  dateWeek: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 18,
    color: '#6A6A6A',
    textTransform: 'uppercase',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
    minWidth: 300,
    maxHeight: 200,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  modalInput: {
    width: 250,
    height: 40,
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
    fontFamily: 'OpenSans_400Regular',
    color: '#6A6A6A',
    fontSize: 16,
  },
  modalText: {
    fontFamily: 'OpenSans_600SemiBold',
    textTransform: 'uppercase',
    justifyContent: 'flex-start',
    color: '#6A6A6A',
    fontSize: 18,
  },
  modalButton: {
    width: 120,
    height: 50,
    backgroundColor: '#50E3A4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  modalButtonText: {
    fontFamily: 'OpenSans_600SemiBold',
    justifyContent: 'flex-start',
    color: '#24704F',
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    marginBottom: 100,
    backgroundColor: '#50E3A4',
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.15,
  },
  textButton: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 42,
    color: '#39A778',
  },
  toDo: {
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 50,
    maxWidth: 300,
    flexDirection: 'row',
  },
  toDoButton: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderColor: '#DBDBDB',
    borderWidth: 2,
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  toDoButtonDone: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: '#50E3A4',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toDoText: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 20,
    color: '#6A6A6A',
    maxWidth: 250,
  },
  toDoTextDone: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 20,
    color: '#B6B6B6',
    maxWidth: 250,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
