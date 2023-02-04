import { View, Image, StyleSheet } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo}
        source={require('../assets/little-lemon-logo.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain'
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor:"#FFF979",
    flex: 0.2
  },
  headerText: {
    color: "black",
    fontSize: 30,
    padding: 40,
    marginTop:20,
    marginBottom: 10,
    textAlign: 'center'
  }
})