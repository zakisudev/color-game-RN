import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

export default function PatternModes() {
  const [color, setColor] = useState('#FFFFFF');
  const [pattern, setPattern] = useState('wave');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (pattern) {
        case 'wave':
          handleWavePattern();
          break;
        case 'ripple':
          handleRipplePattern();
          break;
        case 'spotlight':
          handleSpotlightPattern();
          break;
        default:
          setColor('#FFFFFF');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [pattern, index]);

  const handleWavePattern = () => {
    const waveColors = ['#0000FF', '#00FFFF', '#FF00FF']; // Blue wave colors
    setColor(waveColors[index % waveColors.length]);
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Animatable.View
      animation="fadeIn"
      iterationCount="infinite"
      duration={500}
      style={[styles.container, { backgroundColor: color }]}
    >
      {/* The background changes dynamically based on the selected pattern */}
    </Animatable.View>
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