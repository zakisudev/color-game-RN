import { Tabs, Redirect } from 'expo-router';
import { StyleSheet, Text, View, TextInput, FlatList} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import HomeOptions from "./_components/HomeOptions";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import useFetchShow from "@/hooks/useFetchShow";

const Search = (props) => {
	const { showname } = useLocalSearchParams();
	return (
		<SafeAreaView style={styles.safeArea}>
			<View
				style={{
					display: "flex",
				}}
			>
				<ThemedText
					style={{
						fontSize: 24,
						fontWeight: "bold",
						marginBottom: 10,
						textAlign: "center",
					}}
				>
					Search Shows
				</ThemedText>
				{/* Search input */}
				<TextInput placeholder="Search shows" style={styles.searchInput}/>
				{/* Search results */}
				<ThemedText style={{ marginTop: 10 }}>Search results</ThemedText>
				{/* Search results list */}
				<FlatList
					data={showname}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
							<ThemedText>{item}</ThemedText>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Search;

const styles = StyleSheet.create({
	whiteText: {
		color: "white",
	},
	safeArea: {
		flex: 1,
		paddingTop: 20,
		paddingHorizontal: 10,
	},
	searchInput: {
		fontSize: 16,
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		backgroundColor: "#fff",
		padding: 10,
		marginBottom: 10,
	},
});
