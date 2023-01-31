import { View, Text, StyleSheet } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:"#F4CE14",
    flex: 0.12
  },
  headerText: {
    color: "black",
    fontSize: 30,
    padding: 40,
    marginTop:20,
    textAlign: 'center'
  }
})