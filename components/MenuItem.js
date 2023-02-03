
import { 
  Image,
  StyleSheet, 
  Text,
  TouchableHighlight, 
  View } from 'react-native'

import { useCallback, useState } from 'react'

import NumericInput from 'react-native-numeric-input'

export const MenuItem = ({ item }, key) => {
  
  const [selected, setSelected] = useState(false)
  const [quantity, setQuantity] = useState(1)
  
  const toggleSelected = useCallback(()=>{
    setSelected(!selected)
  },[setSelected, selected])
  
  const addToCar = useCallback(()=>{
    console.log(`Adding to car: ${item.name}`)
    setSelected(false)
  },[setSelected])

  const cancel = useCallback(()=>{
    setSelected(false)
    setQuantity(1)
  },[setSelected, setQuantity])

  const handleOnChangeQuantity = useCallback((input)=>{
    setQuantity(input)
  },[setQuantity])

  return (
    <>
      <View style={styles.itemContainer}>
        <TouchableHighlight style={styles.itemContainer}
          onPress = {toggleSelected}>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.name} </Text>
            <Text style={styles.item}>{item.price}</Text>
          </View>
        </TouchableHighlight>
      </View>
      {selected && 
      <View style={styles.dishCard}>
        <Text style={styles.dishCardHeading}>Ingredients</Text>
        <View style={styles.dishIngredients}>
          <Image style={styles.logo} 
            source={{uri:item.image}}/>
          <View style={styles.dishIngredient}>
            {item.ingredients?.map(i => 
              <Text>{i}</Text>
            )}
          </View>
        </View>
        <View style={styles.itemContainer}>
          <TouchableHighlight onPress = {cancel}>
            <View style={styles.cancelButton}>
              <Text style={{margin: 10}}>No thanks</Text>
            </View>
          </TouchableHighlight>
          <NumericInput value={quantity}
            onChange={handleOnChangeQuantity}
            totalWidth={150}
            minValue={1}/>
          <TouchableHighlight onPress = {addToCar}>
            <View style={styles.addButton}>
              <Text style={{margin: 10}}>Yes I want this</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>}
    </>
  )
}

const styles = StyleSheet.create({
  dishCard: {
    flex:1, 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginBottom: 5
  },
  dishCardHeading: {
    color:'white', 
    fontSize: 18, 
    alignText: 'center', 
    padding: 10
  },
  dishIngredients: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: '#BDECB6', 
    marginBottom: 5
  },
  dishIngredient: {
    flex:1, 
    alignItems: 'flex-start',
    padding: 10
  },
  logo:{
    width: 150,
    height: 150,
  },
  addButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5DBB63',
    borderRadius: 5,
    width: 120,
  },
  cancelButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0967C',
    borderRadius: 5,
    width: 120,
  },
  item: {margin: 10, marginTop:20, marginBottom: 20},
  itemContainer: {
    backgroundColor: '#F4CE14',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
})