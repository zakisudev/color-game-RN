import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ThemedText } from "@/components/ThemedText";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Link } from "expo-router";
import useFetchShow from "@/hooks/useFetchShow";

const HomeOptions = ({ show }: { show: any }) => {
	return (
		<View style={styles.container}>
			<Link
				href={{
					pathname: "/colors",
					params: { showname: show },
				}}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="colours" size={30} color="white" />
					<ThemedText>Color Wave</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link
				href={{
					pathname: "/colorChange",
					params: { showname: show },
				}}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="colours" size={30} color="white" />
					<ThemedText>Color Show</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link
				href={{
					pathname: "/musicSync",
					params: { showname: show },
				}}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="colours" size={30} color="white" />
					<ThemedText>Music Sync</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link
				href={{
					pathname: "/pattern",
					params: { showname: show },
				}}
				asChild
			>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="colours" size={30} color="white" />
					<ThemedText>Patterns</ThemedText>
				</TouchableOpacity>
			</Link>
			<Link href="/games" asChild>
				<TouchableOpacity style={styles.option}>
					<EntypoIcon name="game-controller" size={30} color="white" />
					<ThemedText>Games</ThemedText>
				</TouchableOpacity>
			</Link>
		</View>
	);
};

export default HomeOptions;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: 'center',
		width: '100%',
		marginTop: 40,
	},
	option: {
		alignItems: "center",
	},
});
