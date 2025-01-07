import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import useFetchShow from "@/hooks/useFetchShow";

const ColorChange = () => {
    const { showname } = useLocalSearchParams();
    const [currentColor, setCurrentColor] = useState("black");
    const [keycode, setKeycode] = useState<string[]>([]);

    const fetchShowData = async () => {
        const { error, loading, show } = useFetchShow(showname as string);
        if (!loading && show?.colorcode) {
            setCurrentColor(show.colorcode[0][0]);
            setKeycode(show.keycode[0]);
        }
    };

    useEffect(() => {
        fetchShowData(); // Initial fetch
        const interval = setInterval(fetchShowData, 1000); // Fetch every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [showname]);

    return (
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: currentColor }]}>
            <Text style={styles.text}>Keycode: {keycode.join(", ")}</Text>
        </View>
    );
};

export default ColorChange;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
