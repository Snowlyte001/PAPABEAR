import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { TOPICS } from '../constants/Topics';
import AIEngine from './AIEngine';

const MESSAGES_KEY = 'chat_messages';
const TOPICS_KEY = 'parenting_topics';
const AI_RESPONSES_KEY = 'ai_responses';
const LAST_SYNC_KEY = 'last_sync_timestamp';

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

const cacheTopics = async () => {
  try {
    const jsonValue = JSON.stringify(TOPICS);
    await AsyncStorage.setItem(TOPICS_KEY, jsonValue);
  } catch (e) {
    console.error('Error caching topics:', e);
  }
};

const loadTopics = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TOPICS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : TOPICS;
  } catch (e) {
    console.error('Error loading topics from offline storage:', e);
    return TOPICS;
  }
};

const cacheAIResponses = async () => {
  try {
    const responses = {
      ...AIEngine.responses,
    };
    const jsonValue = JSON.stringify(responses);
    await AsyncStorage.setItem(AI_RESPONSES_KEY, jsonValue);
  } catch (e) {
    console.error('Error caching AI responses:', e);
  }
};

const loadAIResponses = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(AI_RESPONSES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error loading AI responses from offline storage:', e);
    return null;
  }
};

const syncData = async () => {
  const netInfo = await NetInfo.fetch();
  if (netInfo.isConnected) {
    const lastSync = await AsyncStorage.getItem(LAST_SYNC_KEY);
    const now = new Date().getTime();
    // Sync every 24 hours
    if (!lastSync || now - parseInt(lastSync, 10) > 24 * 60 * 60 * 1000) {
      await cacheTopics();
      await cacheAIResponses();
      await AsyncStorage.setItem(LAST_SYNC_KEY, now.toString());
    }
  }
};

export default {
  saveMessages,
  loadMessages,
  loadTopics,
  syncData,
  cacheTopics,
  cacheAIResponses,
  loadAIResponses,
};
