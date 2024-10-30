import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Button, Text } from 'react-native';

export default function SlideInExample() {
  const slideAnim = useRef(new Animated.Value(-200)).current; 

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideIn();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Slide-In Animation with React Native Animated</Text>

      <Animated.View style={[styles.box, { transform: [{ translateX: slideAnim }] }]} />
      <Button title="Slide In" onPress={slideIn} />
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
    backgroundColor: 'coral',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
