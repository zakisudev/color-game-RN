import { Tabs, Redirect } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import useFetchShow from "@/hooks/useFetchShow";
import HomeOptions from '@/components/HomeOptions'

const Home = (props) => {
	const { showname } = useLocalSearchParams();
	return (
		<SafeAreaView style={styles.container}>
			<HomeOptions />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	whiteText: {
		color: "white",
	},
});
