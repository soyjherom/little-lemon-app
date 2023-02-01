import { StyleSheet, Text, View } from 'react-native'

export const MenuFooter = ({text}) => {
  return (
    <View style={styles.listFooter}>
      <Text style={styles.listFooterText}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listFooterText: {
    color: 'white',
    fontSize: 12
  }
})