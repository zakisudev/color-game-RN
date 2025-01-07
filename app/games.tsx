import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'
import EntypoIcon from "react-native-vector-icons/Entypo";


const Games = () => {
  return (
    <View style={styles.container}>
			<Link
				href={{
					pathname: "/games/rncg/ui/screens/game",
				}}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="game-controller" size={30} color="white" />
					<ThemedText>Color Match</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link
				href={{
					pathname: "/games/rncw/App",
				}}
        asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="game-controller" size={30} color="white" />
					<ThemedText>Color Waver</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link href={{
					pathname: "/games/rnsm/GameNavigator",
				}}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="game-controller" size={30} color="white" />
					<ThemedText>Sequence Memorizer</ThemedText>
				</TouchableOpacity>
			</Link>
		</View>
	);
};

export default Games;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: 'center',
		width: '100%',
		marginTop: 40,
	},
	option: {
		alignItems: "center",
	},
});
