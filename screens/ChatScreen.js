import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ChatInterface from '../components/ChatInterface';
import OfflineStorage from '../services/OfflineStorage';
import AIEngine from '../services/AIEngine';

const ChatScreen = ({ route }) => {
  const { topic } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      const loadedMessages = await OfflineStorage.loadMessages();
      setMessages(loadedMessages);
    };
    loadMessages();
  }, []);

  const handleSend = (newMessages = []) => {
    const updatedMessages = [...newMessages, ...messages];
    setMessages(updatedMessages);
    OfflineStorage.saveMessages(updatedMessages);

    const userMessage = newMessages[0].text;
    const aiResponse = AIEngine.getResponse(userMessage);

    const aiMessage = {
      _id: Math.random().toString(36).substring(7),
      text: aiResponse,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'ParentGPT',
      },
    };

    const messagesWithAIResponse = [aiMessage, ...updatedMessages];
    setMessages(messagesWithAIResponse);
    OfflineStorage.saveMessages(messagesWithAIResponse);
  };

  return (
    <View style={styles.container}>
      <Header title={topic.name} />
      <ChatInterface
        messages={messages}
        onSend={handleSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
