// AppBackground.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AppBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#ffffff', '#010836']}  
      start={{ x: 1, y: 0}}           
      end={{ x: 1, y: 1.1 }}             
      style={styles.background}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default AppBackground;
