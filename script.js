var texts = [
  "I Love You Tarannum",
  "Hermann",
  "Tarannum",
  "I Love You",
  "Love",
  "Care",
  "Hermann Loves Tarannum",
  "Tarannum Loves Hermann",
  "Miss You Tarannum meri Jaan ",
  "Meri kaleja Tokda",
  "Meri Dhadkan Sansein"
];

document.addEventListener('click', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var text = document.createElement('div');
  text.classList.add('text');
  text.textContent = getRandomText();
  text.style.left = mouseX + 'px';
  text.style.top = mouseY + 'px';
  document.body.appendChild(text);

  moveText(text); // Start the floating animation for the text

  setTimeout(function() {
    text.remove();
  }, 5000);
});

function getRandomText() {
  var randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

function getRandomDirection() {
  return Math.random() > 0.5 ? 1 : -1;
}

function moveText(text) {
  var translateX = getRandomDirection();
  var translateY = getRandomDirection();

  var x = parseFloat(text.style.left);
  var y = parseFloat(text.style.top);
  var width = window.innerWidth;
  var height = window.innerHeight;

  var vx = translateX * (Math.random() * 2 + 1);
  var vy = translateY * (Math.random() * 2 + 1);

  function updatePosition() {
    x += vx;
    y += vy;

    if (x + text.clientWidth < 0) {
      x = width;
    } else if (x > width) {
      x = -text.clientWidth;
    }

    if (y + text.clientHeight < 0) {
      y = height;
    } else if (y > height) {
      y = -text.clientHeight;
    }

    text.style.left = x + 'px';
    text.style.top = y + 'px';

    requestAnimationFrame(updatePosition);
  }

  updatePosition();
}
