import uuid from 'react-native-uuid'
import { 
  FlatList, 
  View 
} from 'react-native'
import { useCallback } from 'react'
import { MenuItem } from './MenuItem'
import { MenuHeader } from './MenuHeader'
import { MenuFooter } from './MenuFooter'
import { Separator } from './MenuSeparator'

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

export const Menu = () => {
  
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
        ListHeaderComponent={<MenuHeader text={'Menu'}/>}
        ListFooterComponent={<MenuFooter text={'Select and add elements to buy'}/>}
      />
    </View>
  )
}