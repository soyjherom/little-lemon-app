import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Footer } from '../components/Footer'
import { Body } from '../components/Body'
import { useCallback, useState } from 'react'
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

const yellow = '#F4CE14'
const green = '#495E57'

export const WelcomeScreen = ({ navigation })=>{
  const handleOnPress = useCallback(()=>{
    navigation.navigate('Menu')
  },[navigation])
  return (
    <View style={styles.container}>
      <Body/>
      <Pressable style={styles.buttonContainer}
        onPress={handleOnPress}>
        <Text style={styles.buttonText}>Go To Menu</Text>
      </Pressable>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: yellow,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    marginLeft: 70,
    marginRight: 40,
    marginBottom: 100,
  },
  buttonText: {
    color: green,
    margin: 5,
  },
});