import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, StyleSheet, Button } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

const IconDemo = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [iconSize, setIconSize] = useState(40);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const icons = [
    { name: 'home', type: FontAwesome, color: '#4F8EF7' },
    { name: 'user', type: FontAwesome, color: '#FFD700' },
    { name: 'camera', type: FontAwesome, color: '#FF6347' },
    { name: 'bell', type: FontAwesome, color: '#8A2BE2' },
    { name: 'settings', type: MaterialIcons, color: '#28A745' },
    { name: 'favorite', type: MaterialIcons, color: '#FF69B4' },
    { name: 'email', type: MaterialIcons, color: '#1E90FF' },
    { name: 'person', type: Ionicons, color: '#FF4500' },
    { name: 'heart', type: Ionicons, color: '#FF1493' },
    { name: 'chatbubble', type: Ionicons, color: '#48D1CC' },
    { name: 'star', type: Ionicons, color: '#FFD700' },
  ];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.iconContainer, { opacity: fadeAnim }]}>
        {icons.map((icon, index) => {
          const IconComponent = icon.type;
          return (
            <IconComponent
              key={index}
              name={icon.name as any}
              size={iconSize}
              color={icon.color}
              style={styles.icon}
            />
          );
        })}
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Button title="Increase Size" onPress={() => setIconSize(prev => prev + 5)} />
        <Button title="Decrease Size" onPress={() => setIconSize(prev => Math.max(prev - 5, 10))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});

export default IconDemo;
