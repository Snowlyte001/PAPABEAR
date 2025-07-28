import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import NetworkStatus from '../services/NetworkStatus';

const ChatInterface = ({ messages, onSend }) => {
  const [isOffline, setIsOffline] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = NetworkStatus.subscribeToNetworkStatus(setIsOffline);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {isOffline && (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>You are currently offline.</Text>
        </View>
      )}
      <GiftedChat
        messages={messages}
        onSend={onSend}
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
