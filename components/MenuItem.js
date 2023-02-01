
import { 
  StyleSheet, 
  Text,
  TouchableHighlight, 
  View } from 'react-native'

import { useCallback, useState } from 'react'

export const MenuItem = ({ item }, key) => {
  
  const [selected, setSelected] = useState(false)
  const [unselected, setUnselected] = useState(false)
  
  const toggleSelected = useCallback(()=>{
    setSelected(!selected)
    setUnselected(!unselected)
  },[setSelected, selected, setUnselected, unselected])
  
  const addToCar = useCallback(()=>{
    console.log(`Adding to car: ${item.name}`)
    setSelected(false)
    setUnselected(false)
  },[setSelected, setUnselected])

  const cancel = useCallback(()=>{
    setUnselected(false)
    setSelected(false)
  },[setUnselected, setSelected])

  return (
    <View style={styles.itemContainer}>
      {unselected && 
        <TouchableHighlight onPress = {cancel}>
          <View style={styles.unSelector}>
            <Text style={{margin: 10}}>Cancel</Text>
          </View>
        </TouchableHighlight>
      }
      <TouchableHighlight style={styles.itemContainer}
        onPress = {toggleSelected}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.name} </Text>
          <Text style={styles.item}>{item.price}</Text>
        </View>
      </TouchableHighlight>
      {selected && 
        <TouchableHighlight onPress = {addToCar}>
          <View style={styles.selector}>
            <Text style={{margin: 10}}>   Add </Text>
          </View>
        </TouchableHighlight>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  selector:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  unSelector:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  item: {margin: 10, marginTop:20, marginBottom: 20},
  itemContainer: {
    backgroundColor: '#F4CE14',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
  }
})