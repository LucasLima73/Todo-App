import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import { Container } from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.dateWeek}>Histórico</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  dateWeek: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 18,
    color: '#6A6A6A',
    textTransform: 'uppercase',
  },
})
