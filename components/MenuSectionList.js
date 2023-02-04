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
      {accessibilityLabel: "Hummus Dish Image", name: 'Humus',price: '$5', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'], 
      image:require('../images/Hummus.png')},
      {accessibilityLabel: "Moutabal Dish Image", name: 'Moutabal',price: '$7',  id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/Moutabal.png')}, 
      {name: 'Falafel',price: '$5', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/Falafel.png')},
      {name: 'Marinated Olives',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/MarinatedOlives.png')},
      {name: 'Kofta',price: '$4', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/Kofta.png')},
      {name: 'Eggplant Salad',price: '$10', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/EggplantSalad.png')},
    ]
  },
  {
    title:'Main dishes',
    data:[
      {name: 'Lentil Burger',price: '$15', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/LentilBurger.png')},
      {name: 'Smoked Salmon',price: '$25', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/SmokedSalmon.png')},
      {name: 'Kafta Burger',price: '$14', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/KaftaBurger.png')},
      {name: 'Turkish Kebab',price: '$15', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/TurkishKebab.png')},
    ]
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries',price: '$5', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/Fries.png')},
      {name: 'Buttered Rice',price: '$7', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/ButteredRice.png')},
      {name: 'Bread sticks',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/BreadSticks.png')},
      {name: 'Pita Pocket',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/PitaPocket.png')},
      {name: 'Lentil Soup',price: '$8', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/LentilSoup.png')},
      {name: 'Greek Salad',price: '$10', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/GreekSalad.png')},
      {name: 'Rice Pilaf',price: '$9', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/RicePilaf.png')},
    ]
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],
      image:require('../images/Baklava.png')},
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