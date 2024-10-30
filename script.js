function changeText() 
{
    const dynamicText = document.getElementById("dynamicText");
    dynamicText.textContent = "You clicked the button!";
}

// Color-changing button
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let currentColorIndex = 0;

const colorButton = document.getElementById('colorButton');
const resetButton = document.getElementById('resetButton');

colorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex
 + 1) % colors.length;
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});

// Simple animation (fading in and out a paragraph)
const paragraph = document.getElementById('animatedParagraph');

function toggleVisibility() {
  paragraph.classList.toggle('hidden');
}

setTimeout(toggleVisibility, 2000); // Fades in after 2 seconds

// Timer (changing text every 5 seconds)
const timerElement = document.getElementById('timerText');

setInterval(() => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  timerElement.textContent = `The time is ${new Date().toLocaleTimeString()} and the random color is #${randomColor}`;
}, 5000);

// Fetching data from an API (example: fetching a random joke)
const jokeButton = document.getElementById('jokeButton');
const jokeElement = document.getElementById('joke');

async function fetchJoke() {
  try {
    // const response = await fetch('https://api.icndb.com/jokes/random', {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any', {
      cache: 'no-cache'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    jokeElement.textContent = data.joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeElement.textContent = 'Failed to fetch joke. Please try again later.';
  }
}

jokeButton.addEventListener('click', () => {
  fetchJoke();
  // Add a delay to avoid rate limiting
  setTimeout(() => {
    jokeButton.disabled = false;
  }, 2000);
  jokeButton.disabled = true;
});

// JavaScript can be used to trigger animations, change CSS properties dynamically, or create more complex animations.
// For example, you could use JavaScript to start or stop the animation on button click.
const animatedBox = document.querySelector('.animated-box');

function startAnimation() {
  animatedBox.style.animationPlayState = 'running';
}

function stopAnimation() {
  animatedBox.style.animationPlayState = 'paused';
}

/*
const chatInput = document.getElementById('chat-input');
const chatMessages = document.querySelector('.chat-messages');

chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const userMessage = chatInput.value;
    
    // Display the user's message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('user-message');
    userMessageDiv.textContent = userMessage;
    chatMessages.appendChild(userMessageDiv);

    // Simulate a bot response (replace this with a real AI integration)
    const botMessage = "Hello! How can I help you today?";
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('bot-message');
    botMessageDiv.textContent = botMessage;
    chatMessages.appendChild(botMessageDiv);

    chatInput.value = '';
  }
});
*/

const chatInput = document.getElementById('chat-input');
const chatMessages = document.querySelector('.chat-messages');

const randomWords = ['hello', 'world', 'how', 'are', 'you', 'today', 'good', 'bad'];

chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const userMessage = chatInput.value;

    // Display the user's message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('user-message');
    userMessageDiv.textContent = userMessage;
    chatMessages.appendChild(userMessageDiv);

    // Generate a random bot response
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    const botMessage = randomWords[randomIndex];

    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('bot-message');
    botMessageDiv.textContent = botMessage;
    chatMessages.appendChild(botMessageDiv);

    chatInput.value = '';
  }
});

function generateCypherHash() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 32;
    let result = '';
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    const formattedResult = result.match(/.{1,5}/g).join('-');
  
    document.getElementById('result').textContent = formattedResult;
  }

  function generateToken() {
    const token = Math.floor(Math.random() * 1000000).toString().padStart(6, '0').match(/.{3}/g).join(' ');
    document.getElementById('token').textContent = token;
  }
  
  // Initial token generation
  generateToken();
  
  // Set up an interval to update the token every 5 seconds
  setInterval(generateToken, 5000);