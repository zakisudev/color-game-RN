import React from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import useFetchShow from "@/hooks/useFetchShow";
import EntypoIcon from "react-native-vector-icons/Entypo";

const Games = (props) => {
	const { showname } = useLocalSearchParams();
	const { error, loading, show } = useFetchShow();
		return (
    <View style={styles.container}>
			<ThemedText
					style={{
						fontSize: 24,
						fontWeight: "bold",
						marginBottom: 10,
						textAlign: "center",
					}}
				>
					Play Games
			</ThemedText>
			<Link
				href={{
					pathname: "/games/rncg/ui/screens/game",
				}}
				style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="game-controller" size={30} color="gray" />
					<ThemedText>Color Match</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link
				href={{
					pathname: "/games/rncw/App",
				}}
				style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="game-controller" size={30} color="gray" />
					<ThemedText>Color Waver</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link href={{
					pathname: "/games/rnsm/GameNavigator",
				}}
				style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="game-controller" size={30} color="gray" />
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
		padding: 16,
		marginTop: 20,
		gap: 20,
	},
	showsLayout: {
		marginTop: 40,
	},
	table: {
		marginTop: 10,
		width: "95%",
		flexDirection: "column",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 5,
	},
	tableRow: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		padding: 10,
		borderBottomWidth: 1,
		borderColor: "#000",
	},
});
