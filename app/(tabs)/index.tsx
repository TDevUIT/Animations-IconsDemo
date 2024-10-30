import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FadeInExample from '@/components/FadeInExample';
import SpringExample from '@/components/SpringExample';
import SlideInExample from '@/components/SlideInExample';
import ScaleExample from '@/components/ScaleExample';
import ColorChangeExample from '@/components/ColorChangeExample';
import IconDemo from '@/components/IconDemo';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <FadeInExample /> */}
      {/* <SpringExample /> */}
      {/* <SlideInExample /> */}
      {/* <ScaleExample />       */}
      {/* <ColorChangeExample /> */}
      <IconDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
