import React from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import useFetchShow from "@/hooks/useFetchShow";

const Choice = () => {
	const { showname } = useLocalSearchParams();
	const navigation = useNavigation();
	const { error, loading, show } = useFetchShow();

	const handleSearchPress = () => {
			navigation.navigate("(users)/search");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					gap: 10
				}}
				>
					<View style={{flexDirection: "row", gap: 10 }}>
						<View style={{ width: 50, height: 50 }}>
							<Image source={require("@/assets/icons/profile.png")} style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "gray", borderRadius: 10 }} />
						</View>
						<View style={{flexDirection: 'column', justifyContent: "space-between"}}>
							<ThemedText
								style={{
									fontSize: 20,
									fontWeight: "bold",
									textAlign: "left",
								}}
								>
								Hi Yodahe,
							</ThemedText>
							<ThemedText style={{ textAlign: "left" }}>
								Welcome
							</ThemedText>
						</View>
					</View>
					<View style={{ width: 50, height: 50, marginRight: 20, padding: 7 }}>
						<Link href="/(users)/search" asChild>
							<TouchableOpacity>
								<Image source={require("@/assets/icons/SearchTop.png")} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 10 }} />
							</TouchableOpacity>
						</Link>
					</View>
			</View>
			{/* Table for showing available shows and run button */}
			<View style={styles.showsLayout}>
				{loading ? (
						<ThemedText style={{ textAlign: 'center', width: "100%" }}>Loading...</ThemedText>
					) : error ? (
						<ThemedText style={{ textAlign: 'center', width: "100%" }}>Error: {error}</ThemedText>
					) : show ? (
						<>
							<ThemedText>Available Shows</ThemedText>
							<FlatList
								data={show?.showname}
								keyExtractor={(item) => item}
								renderItem={({ item }) => (
									<View style={{ padding: 10, borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: "#ccc", borderBottomColor: "#ccc", flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
										<View style={{flexDirection: "row", alignItems: "center", gap: 10, width: '50%' }}>
											<ThemedText>{item}</ThemedText>
										</View>
										<View style={{width: "30%"}}>
											<TouchableOpacity>
												<Link
													asChild
													href={{
														pathname: "/colors",
													}}
												>
													<Button title="RUN" style={{ width: 100, color: "#007BFF" }} />
												</Link>
											</TouchableOpacity>
										</View>
									</View>
								)}
							/>
						</>
					) : (
						<View style={{width: "100%"}}>
								<ThemedText>No shows available</ThemedText>
						</View>
					)}
			</View>
		</SafeAreaView>
	);
};

export default Choice;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	showsLayout: {
		marginTop: 40,
	},
	tableContainer: {
    marginTop: 10,
		width: '100%'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 1,
		borderUpWidth: 1,
    borderColor: '#ccc',
  },
  tableHeader: {
    backgroundColor: '#dcdcdc',
  },
  tableCell: {
    padding: 8,
		borderRightWidth: 1,
		borderColor: '#ccc',
    justifyContent: 'center',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tableCellText: {
    textAlign: 'left',
  },
});
