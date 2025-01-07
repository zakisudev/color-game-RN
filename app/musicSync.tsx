import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import { activateKeepAwake } from 'expo-keep-awake';

const { width, height } = Dimensions.get('window');

export default function MusicSyncLighting() {
  const [color, setColor] = useState('#FFFFFF');
  const [animation, setAnimation] = useState('fadeIn'); // Default animation
  const [recording, setRecording] = useState(null);

  useEffect(() => {
    let interval = null;

    const startListening = async () => {
      try {
        // Request microphone permissions
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access microphone was denied');
          return;
        }

        // Configure audio recording
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          staysActiveInBackground: true,
        });

        const newRecording = new Audio.Recording();
        await newRecording.prepareToRecordAsync({
          android: {
            extension: '.3gp',
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
          },
          ios: {
            extension: '.caf',
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
          },
          isMeteringEnabled: true,
        });
        await newRecording.startAsync();
        setRecording(newRecording);
        console.log('Recording started');

        // Start processing sound
        interval = setInterval(async () => {
          const soundLevel = await getSoundLevel(newRecording);

          console.log('Sound level:', soundLevel);
          // Adjust colors and animations based on sound level
          if (soundLevel > 0.1) { // Adjusted threshold for sensitivity
            setColor(randomBrightColor());
            setAnimation('pulse');
          } else {
            setColor(randomSoftColor());
            setAnimation('fadeOut');
          }
        }, 200);
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    };

    if (!recording) {
      startListening();
    }

    return () => {
      if (interval) clearInterval(interval);
      if (recording) {
        recording.stopAndUnloadAsync().catch((error) => console.error('Error stopping recording:', error));
      }
    };
  }, [recording]);

  const randomBrightColor = () => {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r},${g},${b})`;
  };

  const randomSoftColor = () => {
    const r = Math.floor(Math.random() * 100) + 50;
    const g = Math.floor(Math.random() * 100) + 50;
    const b = Math.floor(Math.random() * 100) + 50;
    return `rgb(${r},${g},${b})`;
  };

  const getSoundLevel = async (recording) => {
    try {
      const status = await recording.getStatusAsync();
      if (status.isRecording && typeof status.metering === 'number') {
        return (status.metering + 320) / 160; // Normalize to 0-1 range
      }
    } catch (error) {
      console.error('Error getting sound level:', error);
    }
    return 0;
  };

  return (
    <Animatable.View
      animation={animation}
      iterationCount="infinite"
      duration={500}
      style={[styles.container, { backgroundColor: color }]}
    >
      {/* The background color and animation sync dynamically with sound level */}
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