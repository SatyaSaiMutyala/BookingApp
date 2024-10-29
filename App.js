import { StatusBar } from 'expo-status-bar';
import StackNavigation from './Components/Navigation/StackNavigation';
import { StyleSheet } from 'react-native';
import AppBackground from './Components/AppBackgroundColor';

export default function App() {
  return (
    <>
        <StackNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});