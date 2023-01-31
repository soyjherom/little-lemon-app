
import { 
  StyleSheet, 
  Text,
  TouchableHighlight, 
  View } from 'react-native'

export const MenuItem = ({ item }) => {
  return (
    <TouchableHighlight onPress = {
      ()=>{
        console.log('I has been tapped')
      }
    }>
      <View 
        style={styles.itemContainer}>
        <Text style={styles.item}>{item.name} </Text>
        <Text style={styles.item}>{item.price}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {margin: 10},
  itemContainer: {
    backgroundColor: '#F4CE14',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    margin: 5,
  }
})