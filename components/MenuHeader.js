import { StyleSheet, Text, View } from 'react-native'

export const MenuHeader = ({text}) => {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listHeaderText: {
    color: 'white',
    fontSize: 25
  },
})