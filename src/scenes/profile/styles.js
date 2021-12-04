import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    width: '100%',
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  darktitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  field: {
    fontSize: 15,
    textAlign: 'center'
  },
  darkfield: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  avatar: {
    margin: 30,
    alignSelf: "center",
  },
  button: {
    backgroundColor: '#a9a9a9',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  deletebutton: {
    backgroundColor: '#dc143c',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },
  footerLink: {
    color: "#a9a9a9",
    fontWeight: "bold",
    fontSize: 16
  },
})
