import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { ThemedText } from "@/components/ThemedText";
import useFetchShow from "@/hooks/useFetchShow";

const ShowScreen = () => {
	const { error, loading, show } = useFetchShow(); 

  const colorCodes = show?.colorcode[0];
  const keyCodes = show?.keycode[0];
  const showName = show?.showname[0];

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style={styles.header}>{showName}</ThemedText>
      <ThemedText style={styles.subHeader}>Available Color Codes</ThemedText>
      {loading ? (
        <ThemedText style={{ alignText: "center", width: "100%"}}>Loading...</ThemedText>
      ) : error ? (
        <ThemedText style={{ alignText: "center", width: "100%"}}>Error: {error}</ThemedText>
      ) : (
        <FlatList
          data={colorCodes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={[styles.colorCodeItem, { backgroundColor: item, width: "100%" }]}>
              <ThemedText style={{color: 'white', textAlign: 'center'}}>{item}</ThemedText>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  colorCodeItem: {
    padding: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});