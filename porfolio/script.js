// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    alert(`Thank you ${name}, your message has been sent!`);
    // Here you can add functionality to send the message via email or server
  }
});

// Disable right-click on the profile picture
document.getElementById('profile-pic').addEventListener('contextmenu', function(event) {
  event.preventDefault();
  alert('Right-click is disabled on this image!');
});

// Detect and prevent screenshot using a keyboard shortcut (like Print Screen)
document.addEventListener('keydown', function(event) {
  if (event.key === 'PrintScreen') {
    alert('Screenshots are disabled for this image!');
    event.preventDefault();
  }
});
