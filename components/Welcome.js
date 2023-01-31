import { View, Text, StyleSheet }  from 'react-native' 
export const Welcome = () => {
  return (<>
    <View style={styles.welcome}>
      <Text style={styles.welcomeMessage}>Welcome to the Little Lemon App</Text>
    </View>
  </>)
}

const styles = StyleSheet.create({
  welcomeMessage:{
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    margin: 50
  }
})