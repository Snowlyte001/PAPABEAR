import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TopicSelector = ({ topics, onSelectTopic }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a topic to get started:</Text>
      {topics.map(topic => (
        <TouchableOpacity
          key={topic.id}
          style={styles.topicButton}
          onPress={() => onSelectTopic(topic)}
        >
          <Text style={styles.topicText}>{topic.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topicButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  topicText: {
    fontSize: 16,
  },
});

export default TopicSelector;
