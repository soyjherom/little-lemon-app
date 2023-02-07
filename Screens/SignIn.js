import { 
  Alert,
  Button,
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { useCallback, useEffect, useState } from 'react'

const yellow = '#F4CE14'

export const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleOnFocusUsername = useCallback(()=>{
    Alert.alert('Username has been focussed!')
  },[])
  const handleOnFocusPassword = useCallback(()=>{
    Alert.alert('Password has been focussed!')
  },[])

  const handleOnBlurOrOnUnFocusUsername = useCallback(()=>{
    Alert.alert('Username has been unfocussed!')
  },[])

  const handleOnChangeUsername = useCallback((input)=>{
    setUsername(input)
  },[])
  const handleOnChangePassword = useCallback((input)=>{
    setPassword(input)
  },[])

  const handleOnPressSignInButton = useCallback(()=>{
    const user = {
      username: username,
      password: password
    }
    console.log(user)
  },[username, password])
  const handleOnPressCancelButton = useCallback(()=>{
    setUsername('')
    setPassword('')
  },[setUsername, setPassword])

  useEffect(()=>{
    if(username) console.log(`Username: ${username}`)
    if(password) console.log(`Password: ${password}`)
  },[username, password])

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS==='ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}
        keyboardDismissMode='on-drag'>
        <Text style={styles.header}>
          Sign in with your username and password
        </Text>
        <TextInput style={styles.input}
          value={username}
          onChangeText={handleOnChangeUsername}
          onFocus={handleOnFocusUsername}
          onBlur={handleOnBlurOrOnUnFocusUsername}
          placeholder={'Username'}
          clearButtonMode={"always"}/>
        <TextInput style={styles.input}
          value={password}
          onChangeText={handleOnChangePassword}
          onFocus={handleOnFocusPassword}
          placeholder={'Password'}
          secureTextEntry={true}
          clearButtonMode={"always"}/>
        <View style={styles.buttonContainer}>
          <Button title='Create Account'
            color={yellow}
            onPress={handleOnPressCancelButton}/>
          <Button title='Login'
            color={yellow}
            onPress={handleOnPressSignInButton}/>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  header: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57'
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    fontSize: 16,
    backgroundColor: yellow
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
})