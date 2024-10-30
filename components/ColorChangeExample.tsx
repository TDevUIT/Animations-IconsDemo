import React, { useRef } from 'react';
import { View, Animated, Button, StyleSheet, Text } from 'react-native';

export default function ColorChangeExample() {
  const colorAnim = useRef(new Animated.Value(0)).current;

  const toggleColor = () => {
    Animated.timing(colorAnim, {
      toValue: colorAnim._value === 0 ? 1 : 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    backgroundColor: colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['skyblue', 'orange'],
    }),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>React Native Animated for a Fade-In Animation</Text>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Change Color" onPress={toggleColor} />
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
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
