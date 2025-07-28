import AsyncStorage from '@react-native-async-storage/async-storage';

const MESSAGES_KEY = 'chat_messages';

const saveMessages = async (messages) => {
  try {
    const jsonValue = JSON.stringify(messages);
    await AsyncStorage.setItem(MESSAGES_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving messages to offline storage:', e);
  }
};

const loadMessages = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(MESSAGES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error loading messages from offline storage:', e);
    return [];
  }
};

export default {
  saveMessages,
  loadMessages,
};
