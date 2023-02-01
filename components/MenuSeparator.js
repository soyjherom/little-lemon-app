import { StyleSheet, View } from 'react-native'

const green = '#495E57'

export const Separator = () => {
  return <View style={styles.separator}></View>
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: green
  },
})