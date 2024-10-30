import React from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function ScaleExample() {
  const scale = useSharedValue(1);

  const toggleScale = () => {
    scale.value = scale.value === 1 ? 1.5 : 1; 
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 500 }) }],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scaling Animation with React Native Reanimated</Text>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Scale" onPress={toggleScale} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightseagreen',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
