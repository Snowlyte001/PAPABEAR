import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TopicSelector from '../components/TopicSelector';
import { TOPICS } from '../constants/Topics';

const HomeScreen = ({ navigation }) => {
  const handleSelectTopic = (topic) => {
    navigation.navigate('Chat', { topic });
  };

  return (
    <View style={styles.container}>
      <Header title="ParentGPT" />
      <TopicSelector topics={TOPICS} onSelectTopic={handleSelectTopic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
