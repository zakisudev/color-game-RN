import { SafeAreaView, View, Image, StyleSheet, text } from 'react-native';
import { ThemedText } from "@/components/ThemedText";

const Profile = (props) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View
				style={{
					display: "flex",
          alignItems: "center",
          padding: 20,
          gap: 10
				}}
			>
        <View style={{ width: 50, height: 50 }}>
          <Image source={require("@/assets/icons/profile.png")} style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "gray", borderRadius: 10 }} />
        </View>
				<ThemedText
					style={{
						fontSize: 24,
						fontWeight: "bold",
						marginBottom: 10,
						textAlign: "center",
					}}
				>
					Yodahe Siyum
				</ThemedText>
			</View>
		</SafeAreaView>
	);
};

export default Profile;

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
