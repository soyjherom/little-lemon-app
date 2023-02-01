import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Body } from './components/Body'
import { FeedbackForm } from './components/Feedback'

export default function App() {

  const showBody = false
  const showFeedbackForm = true

  return (
    <View style={styles.container}>
      <Header/>
      { showBody && <Body/> }
      { showFeedbackForm && <FeedbackForm/>}
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
