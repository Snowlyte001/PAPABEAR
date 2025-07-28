// A simple, rule-based AI engine for providing parenting tips.
const responses = {
  "greeting": [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "Welcome to ParentGPT! How can I assist you?"
  ],
  "health": [
    "Ensure your child gets vaccinated. It's crucial for their health.",
    "A balanced diet is key. Include fruits, vegetables, and proteins.",
    "Regular check-ups with a doctor are important for early detection of any issues."
  ],
  "education": [
    "Reading to your child every day can significantly boost their vocabulary.",
    "Encourage curiosity. Let them explore and ask questions.",
    "Play-based learning is very effective for young children."
  ],
  "discipline": [
    "Positive reinforcement is more effective than punishment.",
    "Be consistent with your rules and consequences.",
    "Talk to your child about their feelings and help them understand their emotions."
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
