import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Button,Text } from 'react-native';

export default function FadeInExample() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>React Native Animated for a Fade-In Animation</Text>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]} />
      <Button title="Fade In" onPress={fadeIn} />
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
    backgroundColor: 'tomato',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
