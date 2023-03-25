import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';

import GameScreen from './app/screens/GameScreen';

import colors from './app/config/colors';

export default function App() {

  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold, 
		Raleway_700Bold 
  });

	if (!fontsLoaded) {
    return null;
  }

  return (
    <GameScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	text: {
		color: colors.primary,
	}
});
