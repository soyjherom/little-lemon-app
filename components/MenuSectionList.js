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
      {name: 'Humus',price: '$5', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'], image:'https://www.simplyrecipes.com/thmb/J-X1xpDU2606pUXnmL4a7409sHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__12__easy-hummus-vertical-a-1800-2ee0f05419d744bcb85017bce019c7bf.jpg'},
      {name: 'Moutabal',price: '$7',  id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'}, 
      {name: 'Falafel',price: '$5', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Marinated Olives',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Kofta',price: '$4', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Eggplant Salad',price: '$10', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
    ]
  },
  {
    title:'Main dishes',
    data:[
      {name: 'Lentil Burger',price: '$15', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Smoked Salmon',price: '$25', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Kafta Burger',price: '$14', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Turkish Kebab',price: '$15', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
    ]
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries',price: '$5', id: uuid.v4()},
      {name: 'Buttered Rice',price: '$7', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Bread sticks',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Pita Pocket',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Lentil Soup',price: '$8', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Greek Salad',price: '$10', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
      {name: 'Rice Pilaf',price: '$9', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
    ]
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava',price: '$3', id: uuid.v4(), ingredients: ['potato', 'tomato', 'tobaco', 'olive oil'],image:'https://picsum.photos/200'},
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