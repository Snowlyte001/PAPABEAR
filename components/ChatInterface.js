import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import AIEngine from '../services/AIEngine';
import OfflineStorage from '../services/OfflineStorage';
import NetworkStatus from '../services/NetworkStatus';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      const storedMessages = await OfflineStorage.loadMessages();
      if (storedMessages.length > 0) {
        setMessages(storedMessages);
      } else {
        setMessages([
          {
            _id: 1,
            text: 'Hello! How can I help you today?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'ParentGPT',
            },
          },
        ]);
      }
    };

    loadMessages();

    const unsubscribe = NetworkStatus.subscribeToNetworkStatus(setIsOffline);

    return () => {
      unsubscribe();
    };
  }, []);

  const onSend = useCallback(
    (messages = []) => {
      if (isOffline) {
        // Handle offline message sending
        return;
      }

      const newMessages = GiftedChat.append(messages, []);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessages),
      );

      const message = messages[0].text;
      const response = AIEngine.getResponse(message);

      const responseMessage = {
        _id: Math.random().toString(36).substring(7),
        text: response,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'ParentGPT',
        },
      };

      const updatedMessages = GiftedChat.append(newMessages, [responseMessage]);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [responseMessage]),
      );

      OfflineStorage.saveMessages(updatedMessages);
    },
    [isOffline],
  );

  return (
    <View style={styles.container}>
      {isOffline && (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>You are currently offline.</Text>
        </View>
      )}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offlineContainer: {
    backgroundColor: '#f8d7da',
    padding: 10,
  },
  offlineText: {
    color: '#721c24',
    textAlign: 'center',
  },
});

export default ChatInterface;
