import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Body } from './components/Body'
import { FeedbackForm } from './components/Feedback'
import { SignUpForm } from './components/SingUp';
import { SignInForm } from './components/SignIn';

export default function App() {

  const showBody = false
  const showFeedbackForm = false
  const showSignUpForm = false
  const showSignInForm = true

  return (
    <View style={styles.container}>
      <Header/>
      { showBody && <Body/> }
      { showFeedbackForm && <FeedbackForm/>}
      { showSignUpForm && <SignUpForm/>}
      { showSignInForm && <SignInForm/>}
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    justifyContent: 'space-between'
  }
});
