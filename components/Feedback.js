import { useCallback, useState } from 'react'
import { 
  Button,
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  StyleSheet, 
  Text, 
  TextInput
} from 'react-native'

const yellow = '#F4CE14'

export const FeedbackForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [feedback, setFeedback] = useState('')
  
  const handleOnChangeFirstName = useCallback((input)=>{
    setFirstName(input)
  },[setFirstName])
  const handleOnChangeLastName = useCallback((input)=>{
    setLastName(input)
  },[setLastName])
  const handleOnChangeEmail = useCallback((input)=>{
    setEmail(input)
  },[setEmail])
  const handleOnChangeFeedback = useCallback((input)=>{
    setFeedback(input)
  },[setFeedback])
  const handleOnChangePhone = useCallback((input)=>{
    setPhone(input)
  },[setPhone])
  const handleSend = useCallback(()=>{
    console.log(`First name ${firstName}`)
    console.log(`Last name ${lastName}`)
    console.log(`Email ${email}`)
    console.log(`Feedback ${feedback}`)
  },[firstName, lastName, email, feedback])

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS==='ios'? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode='on-drag'>
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <TextInput 
          style={styles.input}
          value={firstName}
          onChangeText={ handleOnChangeFirstName }
          placeholder={'First Name'}/>
        <TextInput 
          style={styles.input}
          value={lastName}
          onChangeText={ handleOnChangeLastName }
          placeholder={'Last Name'}/>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={ handleOnChangeEmail }
          placeholder={'email'}
          keyboardType={"email-address"}/>
        <TextInput 
          style={styles.input}
          value={phone}
          onChangeText={ handleOnChangePhone }
          placeholder={'phone number'}
          keyboardType={"phone-pad"}/>
        <TextInput 
          style={styles.messageInput}
          value={feedback}
          onChangeText={ handleOnChangeFeedback }
          placeholder={'Your message here'}
          multiline={true}
          maxLength={255}/>
        <Button 
          color={yellow}
          title={'Send'}
          onPress={ handleSend }/>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headingSection: {
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
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: yellow
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: yellow
  }
})