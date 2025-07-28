import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';
import Header from '../components/Header';
import OfflineStorage from '../services/OfflineStorage';

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(previousState => !previousState);
    // In a real app, you would save this to AsyncStorage and apply the theme
  };

  const clearChatHistory = () => {
    OfflineStorage.saveMessages([]);
    alert('Chat history cleared!');
  };

  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <View style={styles.content}>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Dark Theme</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleTheme}
            value={isDarkTheme}
          />
        </View>
        <Button title="Clear Chat History" onPress={clearChatHistory} />
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
    padding: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
