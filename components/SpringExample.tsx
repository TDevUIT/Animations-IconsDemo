import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function SpringExample() {
  const translateX = useSharedValue(0);

  const bounce = () => {
    translateX.value = withSpring(Math.random() * 200 - 100);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>React Native Reanimated for a Spring Animation</Text>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Bounce" onPress={bounce} />
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
    backgroundColor: 'skyblue',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
