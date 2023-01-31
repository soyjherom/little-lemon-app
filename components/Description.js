import { StyleSheet, Text, View } from 'react-native'

export const Description = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text numberOfLines={10} style={styles.descriptionText}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  descriptionText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 30
  }
})