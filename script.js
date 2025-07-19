// Select the form and output elements
const form = document.getElementById('userForm');
const output = document.getElementById('output');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Capture user inputs
  const name = document.getElementById('name').value;
  const birthMonth = document.getElementById('birthMonth').value;

  // Horoscope object
  const horoscope = {
    January: { sign: "Capricorn", symbol: "♑" },
    February: { sign: "Aquarius", symbol: "♒" },
    March: { sign: "Pisces", symbol: "♓" },
    April: { sign: "Aries", symbol: "♈" },
    May: { sign: "Taurus", symbol: "♉" },
    June: { sign: "Gemini", symbol: "♊" },
    July: { sign: "Cancer", symbol: "♋" },
    August: { sign: "Leo", symbol: "♌" },
    September: { sign: "Virgo", symbol: "♍" },
    October: { sign: "Libra", symbol: "♎" },
    November: { sign: "Scorpio", symbol: "♏" },
    December: { sign: "Sagittarius", symbol: "♐" },
  };

  // Oracle messages
  const oracle = [
    "Chosen by The Stars, your third eye will unvail wonders beyond your comprehension.",
    "Be wary of demons; they prey on your emotions.",
    "Not all angels are kind, and never look an angel in the eye, they can't be trusted.",
    "Child of the Sun, you fill the room with warmth and Radiance.",
    "Child of the Moon, your wisdom ever-changing as the tide and as deep as the Umbral Abyss.",
    "The Divine has taken interest in your presence, your future is in their favor.",
    "You've been heralded by The Hells, rejoice child for they praise your innate nature of Peculiarity and Oddity, an unorthodox being filled with kindness and wonder. You are truly the embodiment of The Anomoly.",
    "Freedom is what you embody as one of the children of the Sky, ever-changing with boundless creativity, only matched by the serene mystic that embodies a whimsical creature such as yourself.",
    "The Heavens have taken notice of you little one, for you are a beacon of the Heavenly Principles, holding order and harmony in the image of the Divine.",
    "You've been gifted a connection to the Arcane, you feel it surge through your being.",
  ];

  // Get a random oracle message
  const index = Math.floor(Math.random() * oracle.length);
  
  // Check if the user entered a valid month and display horoscope
  if (horoscope[birthMonth]) {
    const { sign, symbol } = horoscope[birthMonth]; // Destructure the sign and symbol
    output.innerHTML = `
      <p> <b><i>The Orcale sings a Hyme aloud: </b> </br> </br> ${name}, born to ${birthMonth}, soul marked with the sign of ${sign} ${symbol}.</p>
      <br></br>
      <p>  ${oracle[index]} </i> </p>
    `;
  } else {
    output.innerHTML = `<b><p>Share thy birth month or begone you haggerd runt!</p></b>`;
  }
});
