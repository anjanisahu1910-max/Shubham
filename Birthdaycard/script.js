const messages = [
  "✨ It's Your Special Day Yeyey!",
  "I Made Something Special For You! 💖",
  "Do You Wanna See What I made ! 🥳",
];

let currentMessage = 0;
const messageText = document.getElementById("messageText");
const messageCard = document.getElementById("messageCard");

// Function to update message
function showMessage(index) {
  if (index === 2) {
    messageText.innerHTML = `
      ${messages[index]}<br><br>
      <button id="yesBtn" class="btn yes">Yes</button>
      <button id="noBtn" class="btn no">No</button>
    `;

    document.getElementById("yesBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      currentMessage++;
      messageText.textContent = "🎉 Have a Look at It, 💖";
    });

    document.getElementById("noBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      messageText.textContent = "Oops try again 🤡";
    });
  } else {
    messageText.textContent = messages[index];
  }
}

// Click event on card
messageCard.addEventListener("click", () => {
  // if last message = "Have a Look at It"
  if (messageText.textContent.includes("Have a Look at It")) {
    window.location.href = "second.html"; // go to new page
    return;
  }

  currentMessage = (currentMessage + 1) % messages.length;
  showMessage(currentMessage);
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// Button & heart styles
const style = document.createElement("style");
style.innerHTML = `
.heart {
  position: fixed;
  bottom: 0;
  width: 20px;
  height: 20px;
  background: pink;
  transform: rotate(45deg);
  animation: floatUp linear forwards;
  z-index: 1;
}
.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: pink;
  border-radius: 50%;
}
.heart::before { top: -10px; left: 0; }
.heart::after { left: -10px; top: 0; }
@keyframes floatUp {
  to {
    transform: translateY(-100vh) rotate(45deg);
    opacity: 0;
  }
}

/* Button Styling */
.btn {
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}
.btn.yes { background-color: #4CAF50; color: white; }
.btn.no { background-color: #f44336; color: white; }
.btn:hover { transform: scale(1.1); }
`;
document.head.appendChild(style);
