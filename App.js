import { StyleSheet, View } from 'react-native'
import { WelcomeScreen } from './Screens/WelcomeScreen'
import { MenuScreen } from './Screens/MenuScreen'
import { FeedbackForm } from './components/Feedback'
import { Header } from './components/Header'
import { SignUpForm } from './Screens/SingUp';
import { SignInForm } from './Screens/SignIn';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const yellow = '#F4CE14'
const green = '#495E57'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome"
          screenOptions={{ headerStyle: { backgroundColor: yellow}}}>
          <Stack.Screen 
            name="Welcome" 
            component={ WelcomeScreen }
            options={{ title: 'Home' }}/>
          <Stack.Screen name="Menu" component={ MenuScreen }/>
          <Stack.Screen name="Contact" component={ FeedbackForm }/>
          <Stack.Screen name="SignIn" component={ SignInForm }/>
          <Stack.Screen name="SignUp" component={ SignUpForm }/>
        </Stack.Navigator>      
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: green,
    justifyContent: 'space-between'
  }
});
