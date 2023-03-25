import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native"
import {Picker} from '@react-native-picker/picker';

import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

import data from "../data/transpose";
import colors from '../config/colors';
import fonts from "../config/fonts";
import images from "../data/images";

const GameScreen = () => {

	const [randomNumber, setRandomNumber] = useState(3);
	const [imageUri, setImageUri] = useState()
	const [selectedLanguage, setSelectedLanguage] = useState();
	const [showAnswer, setShowAnswer] = useState(false);

	useEffect(() => {
		let fileName = images[data[5][randomNumber]];
    setImageUri(fileName);
  }, [randomNumber]);

	let generateNumber = () => {
		newNumber = Math.floor(Math.random() * 11) + 1;
		setRandomNumber(newNumber);
		setShowAnswer(false);
	};

	let confirmAnswer = () => {
		setShowAnswer(true);
	}

	let sheet = data[5][randomNumber];
	let instrument = data[0][randomNumber];

	let PickerItems = data[0].map((item, key) => {
		return <Picker.Item label={item} value={key} />
	})

	return (
		<Wrapper>
			<View style={styles.container}>
				<Text>
					<Text style={styles.instruction}>Sheet Music: </Text>
					<Text style={styles.note}>C</Text>
				</Text>
				<Image source={imageUri} style={styles.image} />
				<Text style={styles.bottom}>
					<Text style={styles.instruction}>Instrument: </Text>
					<Text style={styles.note}>F</Text>
				</Text>
				{!showAnswer && <View>
					<Text style={styles.instruction}>What note should you play?</Text>
					<Picker
						style={styles.picker}
						selectedValue={selectedLanguage}
						onValueChange={(itemValue, itemIndex) =>
							setSelectedLanguage(itemValue)
						}>
						{PickerItems}
					</Picker>
					<Button
						onPress={confirmAnswer}
						title="Confirm"
					/>
				</View>}
				{showAnswer && <View>
					<Text>
						<Text>You Said:</Text>
						<Text>{data[0][selectedLanguage]}</Text>
					</Text>
					<Text style={styles.instruction}>Right Answer:</Text>
					<Text style={styles.note}>{instrument}</Text>
					<Button
						onPress={generateNumber}
						title="Next"
					/>
				</View>}
			</View>
		</Wrapper>
	)
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
		padding: 30,
  },
	image: {
		width: '100%',
	},
	text: {
		color: colors.primary,
	},
	instruction: {
		color: colors.black,
		fontSize: 24,
		fontFamily: fonts.semibold,
		textAlign: "center"
	},
	note: {
		color: colors.primary,
		fontSize: 40,
		fontFamily: fonts.bold,
		textAlign: "center"
	},
	bottom: {
		paddingBottom: 60,
	}
});