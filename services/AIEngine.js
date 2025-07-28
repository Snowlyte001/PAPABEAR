// A simple, rule-based AI engine for providing parenting tips.
const responses = {
  "greeting": [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "Welcome to ParentGPT! How can I assist you?"
  ],
  "health": [
    "A balanced diet is essential for a child's growth and development.",
    "Regular medical check-ups are important for monitoring your child's health.",
    "Ensure your child is up-to-date with recommended vaccinations."
  ],
  "education": [
    "Reading together is a great way to build language skills.",
    "Encourage your child's curiosity and support their interests.",
    "Play is a powerful tool for learning and development."
  ],
  "discipline": [
    "Positive reinforcement can be an effective way to encourage good behavior.",
    "Clear and consistent boundaries can help children feel secure.",
    "Helping children understand and manage their emotions is a key part of development."
  ],
  "default": [
    "I'm not sure how to respond to that. Can you please rephrase?",
    "That's a good question. Let me find some information on that for you.",
    "I'm still learning. Could you ask me something else about parenting?"
  ]
};

const getResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
    return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
  }

  if (lowerCaseMessage.includes("health") || lowerCaseMessage.includes("doctor") || lowerCaseMessage.includes("sick")) {
    return responses.health[Math.floor(Math.random() * responses.health.length)];
  }

  if (lowerCaseMessage.includes("school") || lowerCaseMessage.includes("learn") || lowerCaseMessage.includes("read")) {
    return responses.education[Math.floor(Math.random() * responses.education.length)];
  }

  if (lowerCaseMessage.includes("discipline") || lowerCaseMessage.includes("naughty") || lowerCaseMessage.includes("behave")) {
    return responses.discipline[Math.floor(Math.random() * responses.discipline.length)];
  }

  return responses.default[Math.floor(Math.random() * responses.default.length)];
};

export default {
  getResponse,
};
