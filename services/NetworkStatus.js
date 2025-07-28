import NetInfo from '@react-native-community/netinfo';

const getNetworkStatus = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};

const subscribeToNetworkStatus = (callback) => {
  return NetInfo.addEventListener(state => {
    callback(state.isConnected);
  });
};

export default {
  getNetworkStatus,
  subscribeToNetworkStatus,
};
