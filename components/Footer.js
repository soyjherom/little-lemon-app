import { View, Text, StyleSheet } from 'react-native'

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor:"#F4CE14",
    marginBottom: 10
  },
  footerText: {
    color: "black",
    fontSize: 18,
    textAlign: 'center'
  }
})