import { StyleSheet, Text, View } from 'react-native'
import { Welcome } from './Welcome';
import { Description } from './Description'

export const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Welcome/>
      <Description/>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyContainer:{
    flex: 1,
    justifyContent: 'start-end',
    alignItems: 'center',
  }
})