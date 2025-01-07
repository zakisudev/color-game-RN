import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const { width, height } = Dimensions.get('window');

export default function InteractiveColorEffects() {
  const [color, setColor] = useState('#000000'); // Initial color

  useEffect(() => {
    // Subscribe to gyroscope updates
    const subscription = Gyroscope.addListener(({ x, y, z }) => {
      // Map gyroscope data to RGB values
      const r = Math.min(255, Math.max(0, Math.floor((x + 1) * 127.5)));
      const g = Math.min(255, Math.max(0, Math.floor((y + 1) * 127.5)));
      const b = Math.min(255, Math.max(0, Math.floor((z + 1) * 127.5)));

      // Convert RGB to hex and set color
      setColor(`#${toHex(r)}${toHex(g)}${toHex(b)}`);
    });

    // Enable gyroscope updates
    Gyroscope.setUpdateInterval(200);

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  // Helper function to convert number to hex
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
});