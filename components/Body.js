import { 
  Pressable, 
  StyleSheet, 
  ScrollView, 
  Text, 
  View 
} from 'react-native'
import { useCallback, useState } from 'react'
import { Welcome } from './Welcome';
import { Description } from './Description'
import { Menu } from './MenuSectionList'

const green = '#495E57'
const yellow = '#F4CE14'

export const Body = () => {

  const [ showMenu, setShowMenu ] = useState(false)

  const handleOnPressShowMenu = useCallback(()=>{
    setShowMenu(!showMenu)
  },[showMenu, setShowMenu])

  return (
    <View style={styles.bodyContainer}>      
      {!showMenu && <>
        <Welcome/>
        <Description/>
      </>}
      <Pressable style={styles.button}
        onPressOut={handleOnPressShowMenu}>
        <Text style={styles.buttonText}>Show the menu</Text>
      </Pressable>
      {showMenu && <View style={{flex:1, width: '100%'}}>
        <Text style={styles.notes}>
          IVA and Service Taxes Included in the price
        </Text>
        <Menu/>
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  notes: {
    textAlign: 'center',
    color: "#EDEFEE"
  },
  pressableComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: green
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: yellow,
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32
  },
  bodyContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: green
  }
})