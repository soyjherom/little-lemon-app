import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native'
import { useCallback, useState } from 'react'

const yellow = '#F4CE14'

export const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleOnChangeUsername = useCallback((input)=>{
    setUsername(input)
  },[])
  const handleOnChangeEmail = useCallback((input)=>{
    setEmail(input)
  },[])
  const handleOnChangePhone = useCallback((input)=>{
    setPhone(input)
  },[])
  const handleOnChangePassword = useCallback((input)=>{
    setPassword(input)
  },[])
  const handleOnPress = useCallback(()=>{
    const userAccount = {
      username: username,
      password: password,
      email: email,
      phone: phone
    }
    console.log(userAccount)
  },[])

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS==='ios'?'padding':'height'}>
      <ScrollView style={styles.container}
        keyboardDismissMode='on-drag'>
        <Text style={styles.headingSection}>
          Fill the form to Sign Up
        </Text>
        <TextInput style={styles.input}
          value={username}
          onChangeText={handleOnChangeUsername}
          placeholder={'User name'}/>
        <TextInput style={styles.input}
          value={email}
          onChangeText={handleOnChangeEmail}
          placeholder={'Email'}
          keyboardType={"email-address"}/>
        <TextInput style={styles.input}
          value={phone}
          onChangeText={handleOnChangePhone}
          placeholder={'Phone number'}
          keyboardType={"phone-pad"}/>
        <TextInput style={styles.input}
          value={password}
          onChangeText={handleOnChangePassword}
          placeholder={'Password'}
          secureTextEntry={true}/>
        <Button title={'Create Account'} 
          color={yellow}
          onPress={handleOnPress}/>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57'
  },
  container:{
    flex: 1
  },
  input: {
    backgroundColor: yellow,
    fontSize: 16,
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
})