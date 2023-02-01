import uuid from 'react-native-uuid'
import { useCallback } from 'react'
import { SectionList, View } from 'react-native'
import { MenuItem } from './MenuItem'
import { MenuHeader } from './MenuHeader'
import { MenuFooter } from './MenuFooter'
import { Separator } from './MenuSeparator'

const menuElements = [
  {
    title: 'Appetizers',
    data: [
      {name: 'Humus',price: '$5', id: uuid.v4()},
      {name: 'Moutabal',price: '$7',  id: uuid.v4()}, 
      {name: 'Falafel',price: '$5', id: uuid.v4()},
      {name: 'Marinated Olives',price: '$3', id: uuid.v4()},
      {name: 'Kofta',price: '$4', id: uuid.v4()},
      {name: 'Eggplant Salad',price: '$10', id: uuid.v4()},
    ]
  },
  {
    title:'Main dishes',
    data:[
      {name: 'Lentil Burger',price: '$15', id: uuid.v4()},
      {name: 'Smoked Salmon',price: '$25', id: uuid.v4()},
      {name: 'Kafta Burger',price: '$14', id: uuid.v4()},
      {name: 'Turkish Kebab',price: '$15', id: uuid.v4()},
    ]
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries',price: '$5', id: uuid.v4()},
      {name: 'Buttered Rice',price: '$7', id: uuid.v4()},
      {name: 'Bread sticks',price: '$3', id: uuid.v4()},
      {name: 'Pita Pocket',price: '$3', id: uuid.v4()},
      {name: 'Lentil Soup',price: '$8', id: uuid.v4()},
      {name: 'Greek Salad',price: '$10', id: uuid.v4()},
      {name: 'Rice Pilaf',price: '$9', id: uuid.v4()},
    ]
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava',price: '$3', id: uuid.v4()},
    ]
  }
]

export const Menu = () => {
  
  const handleRenderItem = useCallback(({ item })=> 
    <MenuItem key={item.id} item={item}/> 
  ,[])

  const handleHeader = useCallback(({ section: { title} })=>
    <MenuHeader key={title} text={title}/>
  ,[])
  
  return (
    <View>
      <SectionList 
        sections={ menuElements }
        renderItem={ handleRenderItem }
        renderSectionHeader={ handleHeader }
        ListFooterComponent={<MenuFooter text={'Select and add elements to buy'}/>}
        ItemSeparatorComponent={ Separator }>
      </SectionList>
    </View>
  )
}