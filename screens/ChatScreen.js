import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ChatInterface from '../components/ChatInterface';

const ChatScreen = ({ route }) => {
  const { topic } = route.params;

  return (
    <View style={styles.container}>
      <Header title={topic.name} />
      <ChatInterface />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
