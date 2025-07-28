import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <View style={styles.content}>
        <Text>Settings Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
