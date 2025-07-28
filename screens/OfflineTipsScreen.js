import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';
import OfflineStorage from '../services/OfflineStorage';

const OfflineTipsScreen = () => {
  const [tip, setTip] = useState('');

  const getRandomTip = async () => {
    const responses = await OfflineStorage.loadAIResponses();
    if (responses) {
      const allTips = Object.values(responses).flat();
      const randomTip = allTips[Math.floor(Math.random() * allTips.length)];
      setTip(randomTip);
    }
  };

  useEffect(() => {
    getRandomTip();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Offline Tips" />
      <View style={styles.content}>
        <Text style={styles.tipText}>{tip}</Text>
        <Button title="Get Another Tip" onPress={getRandomTip} />
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
    padding: 20,
  },
  tipText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default OfflineTipsScreen;
