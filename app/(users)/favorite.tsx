import { Tabs, Redirect, Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";

const Favorites = () => {
  const showname = ["Selina Live", "The Witchers", "Breaking Bad", "Game of Thrones"];
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
						marginBottom: 15,
						textAlign: "center",
					}}
				>
					Your Favorite Shows
				</ThemedText>
				<FlatList
					data={showname}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc", flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
              <View style={{flexDirection: "row", alignItems: "center", gap: 10, width: '50%' }}>
                {/* Favorite icon to unfavorite */}
                <TouchableOpacity>
                  <ThemedText>❤️</ThemedText>
                </TouchableOpacity>
                <ThemedText>{item}</ThemedText>
              </View>
              <View style={{width: "30%"}}>
                <TouchableOpacity>
                  <Link
                    asChild
                    href={{
                      pathname: "/show",
                    }}
                  >
                    <Button title="RUN" style={{ width: 100, color: "#007BFF" }} />
                  </Link>
                </TouchableOpacity>
              </View>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Favorites


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
