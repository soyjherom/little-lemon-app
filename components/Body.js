import { StyleSheet, ScrollView, View } from 'react-native'
import { Welcome } from './Welcome';
import { Description } from './Description'
import { Menu } from './Menu'

const green = '#495E57'

export const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <ScrollView 
      horizontal={false}
      indicatorStyle={'white'}
      style={{
        backgroundColor: green,
      }}>
        <Welcome/>
        <Description/>
        <Menu/>
      </ScrollView>
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