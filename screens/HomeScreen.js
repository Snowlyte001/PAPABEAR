import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TopicSelector from '../components/TopicSelector';
import OfflineStorage from '../services/OfflineStorage';

const HomeScreen = ({ navigation }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await OfflineStorage.syncData();
      const cachedTopics = await OfflineStorage.loadTopics();
      setTopics(cachedTopics);
    };
    loadData();
  }, []);

  const handleSelectTopic = (topic) => {
    navigation.navigate('Chat', { topic });
  };

  return (
    <View style={styles.container}>
      <Header title="ParentGPT" />
      <TopicSelector topics={topics} onSelectTopic={handleSelectTopic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
