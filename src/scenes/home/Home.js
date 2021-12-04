import React, { useState, useEffect, useReducer } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native'
import { firebase } from '../../firebase/config'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'
import { Swipeable } from 'react-native-gesture-handler'

export default function Task(props) {
  const navigation = useNavigation()
  const userData = props.extraData
  const [token, setToken] = useState('')
  const [tasks, setTasks] = useState([])
  const [tarefas, setTarefas] = useState([])

  function deleteTask(id) {
    firebase.default
      .firestore()
      .collection('users')
      .doc(userData.id)
      .collection('task')
      .doc(id)
      .delete()
    console.log(deleteTask)
  }
  console.log(userData)
  // function getTasks() {
  //   firebase
  //     .default
  //     .firestore()
  //     .collection('Tasks')
  //     .doc(userData.id)
  //     .get()
  //     .then(doc => {
  //       if (doc.exists) {
  //         setTasks(doc.data().tasks)
  //       } else {
  //         console.log('No such document!')
  //       }
  //     })
  //     .catch(error => {
  //       console.log('Error getting document:', error)
  //     })
  // }

  useEffect(() => {
    firebase.default
      .firestore()
      .collection('users')
      .doc(userData.id)
      .collection('task')
      .onSnapshot((query) => {
        const list = []
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setTasks(list)
      })
  }, [])
  function renderizarItens() {
    return tasks.map((item) => {
      return <Text>{item.date}</Text>
    })
  }

  // function LeftActions() {
  //     <View style={styles.leftAction}>
  //       <MaterialCommunityIcons name="delete" size={30} color="white" />
  //     </View>
  //   }
  // function Actions(dra)
  //   const scale = (dragX) => {
  //     dragX.interpolate({
  //       inputRange: [0, 100],
  //       outputRange: [0, 1],
  //       extrapolate: 'clamp',
  //     })
  //   }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <Swipeable
              onSwipeableLeftOpen={() => {
                deleteTask(item.id)
              }}
              renderLeftActions={() => {
                return (
                  <View style={styles.leftAction}>
                    <MaterialCommunityIcons
                      name="delete"
                      size={30}
                      color="black"
                    />
                  </View>
                )
              }}
            >
              <View style={styles.Tasks}>
                {/* <TouchableOpacity
                  style={styles.deleteTask}
                  onPress={() => {
                    deleteTask(item.id)
                  }}
                >
                  <FontAwesome
                    name="trash"
                    size={23}
                    color="#F92e6A"
                  ></FontAwesome>
                </TouchableOpacity> */}
                <View style={styles.DescriptionTask}>
                  <Text>{item.description}</Text>
                  <Text style={{ left: '85%', fontSize: 10 }}>
                    {JSON.stringify(item.date).replace(/['"]+/g, '')}
                  </Text>
                </View>
              </View>
            </Swipeable>
          )
        }}
      />
      <TouchableOpacity
        style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.iconButton}>
          <MaterialCommunityIcons
            name="plus"
            size={40}
          ></MaterialCommunityIcons>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 50,
  },
  Tasks: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  deleteTask: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
  DescriptionTask: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '95%',
    alignContent: 'flex-start',
    backgroundColor: '#f5f5f5cf',
    padding: 12,
    height: 80,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
    marginRight: 15,
    color: '#282b2db5',
  },
  DescriptionTask2: {
    flexDirection: 'row',
    width: '85%',
    alignContent: 'flex-start',
    backgroundColor: '#f5f5f5cf',
    padding: 12,
    height: 80,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 5,
    marginRight: 15,
    color: '#282b2db5',
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonLogout: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLogout: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  leftAction: {
    justifyContent: 'center',
    flex: 1,
    height: '85%',
    marginLeft: '3%',
    borderRadius: 10,
  },
})
