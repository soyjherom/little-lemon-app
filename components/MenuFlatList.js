import uuid from 'react-native-uuid'
import { 
  FlatList, 
  StyleSheet,
  Text,
  View 
} from 'react-native'
import { useCallback } from 'react'
import { MenuItem } from './MenuItem'

const menuItemsToDisplay = [
  {name: 'Humus',price: '$5', id: uuid.v4()},
  {name: 'Moutabal',price: '$7',  id: uuid.v4()},
  {name: 'Marinated Olives',price: '$3', id: uuid.v4()},
  {name: 'Kafta',price: '$4', id: uuid.v4()},
  {name: 'Eggplant Salad',price: '$10', id: uuid.v4()},
  {name: 'Lentil Burger',price: '$15', id: uuid.v4()},
  {name: 'Smoked Salmon',price: '$25', id: uuid.v4()},
  {name: 'Kafta Burger',price: '$14', id: uuid.v4()},
  {name: 'Turkish Kebab',price: '$15', id: uuid.v4()},
  {name: 'Fries',price: '$5', id: uuid.v4()},
  {name: 'Buttered Rice',price: '$7', id: uuid.v4()},
  {name: 'Pita Pocket',price: '$3', id: uuid.v4()},
  {name: 'Lentil Soup',price: '$8', id: uuid.v4()},
  {name: 'Greek Salad',price: '$10', id: uuid.v4()},
  {name: 'Rice Pilaf',price: '$9', id: uuid.v4()},
  {name: 'Baklava',price: '$3', id: uuid.v4()},
]

const green = '#495E57'

const Separator = () => {
  return <View style={styles.separator}></View>
}

const MenuHeader = () => {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>Menu</Text>
    </View>
  )
}

const MenuFooter = () => {
  return (
    <View style={styles.listFooter}>
      <Text style={styles.listFooterText}>
        Select and add elements to buy
      </Text>
    </View>
  )
}

export const MenuFlatList = () => {
  
  const itemToRender = useCallback(
    ({item}) => <MenuItem item={item}/>
  ,[])

  const handleExtraction = useCallback(item => item.id,[])
  
  return (
    <View style={{ flex: 0.75}}>
      <FlatList 
        data={menuItemsToDisplay}
        renderItem={itemToRender}
        keyExtractor={handleExtraction}
        ItemSeparatorComponent={<Separator/>}
        ListHeaderComponent={<MenuHeader/>}
        ListFooterComponent={<MenuFooter/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: green
  },
  listHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listHeaderText: {
    color: 'white',
    fontSize: 25
  },
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