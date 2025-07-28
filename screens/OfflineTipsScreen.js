import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const OfflineTipsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Offline Tips" />
      <View style={styles.content}>
        <Text>Offline Tips Screen</Text>
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

export default OfflineTipsScreen;
