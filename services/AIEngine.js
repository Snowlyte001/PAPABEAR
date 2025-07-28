const getResponse = (message) => {
  const responses = [
    "That's a great question! Let me think about that.",
    "I'm still learning, but I'll do my best to help.",
    "Could you tell me a little more about that?",
    "I'm not sure I understand. Could you rephrase that?",
  ];

  return responses[Math.floor(Math.random() * responses.length)];
};

export default {
  getResponse,
};
