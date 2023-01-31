import { ScrollView, Text, View } from 'react-native'
import { MenuItem } from './MenuItem'

const green = '#495E57'
const yellow = '#F4CE14'
const lastMenu = ' \n  \n  \n  \n  \n  \n \n \n  \n  \n'
const menuItemsToDisplay = [
  {name: 'Humus',price: '$5'},
  {name: 'Moutabal',price: '$7'},
  {name: 'Marinated Olives',price: '$3'},
  {name: 'Kafta',price: '$4'},
  {name: 'Eggplant Salad',price: '$10'},
  {name: 'Lentil Burger',price: '$15'},
  {name: 'Smoked Salmon',price: '$25'},
  {name: 'Kafta Burger',price: '$14'},
  {name: 'Turkish Kebab',price: '$15'},
  {name: 'Fries',price: '$5'},
  {name: 'Buttered Rice',price: '$7'},
  {name: 'Pita Pocket',price: '$3'},
  {name: 'Lentil Soup',price: '$8'},
  {name: 'Greek Salad',price: '$10'},
  {name: 'Rice Pilaf',price: '$9'},
  {name: 'Baklava',price: '$3'},
]

export const Menu = () => {
  return (
    <View style={{ flex: 0.75}}>
      <ScrollView 
      horizontal={false}
      indicatorStyle={'white'}
      style={{
        padding: 40,
        backgroundColor: green,
      }}>
        <Text style={{
          fontSize: 20,
          flexWrap: 'wrap',
          color: 'white'
        }}>View Menu</Text>
        {
          menuItemsToDisplay.map(i=>
            <MenuItem key={i.name} item={{name:i.name, price:i.price}}/>
          )
        }
      </ScrollView>
    </View>
  )
}