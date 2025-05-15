const contactpage = document.getElementById('form'); 
const successpage = document.getElementById('success_page'); 

successpage.style.display = 'none';

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const responseBox = document.getElementById('responseBox');
  const responseTitle = document.getElementById('responseTitle');
  const responseDesc = document.getElementById('responseDesc');

  // Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  responseBox.style.display = 'none';
  responseBox.className = 'response-box'; // reset styles

  let hasError = false;

  if (!name) {
    nameError.textContent = 'Name is required.';
    hasError = true;
  }

  if (!email) {
    emailError.textContent = 'Email is required.';
    hasError = true;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      hasError = true;
    }
  }

  if (!message) {
    messageError.textContent = 'Message is required.';
    hasError = true;
  }

  if (!hasError) {
    const formData = new FormData(this);

    fetch(this.action, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        form.style.display = 'none';
successpage.style.display = 'flex';

        responseBox.classList.add('response-success');
        responseTitle.textContent = "Message Sent!";
        responseDesc.textContent = "Thanks for reaching out. We'll get back to you shortly.";
        document.getElementById('form').reset();
      } else {
        responseBox.classList.add('response-error');
        responseTitle.textContent = "Something went wrong.";
        responseDesc.textContent = "Your message could not be sent. Please try again.";
      }
      responseBox.style.display = 'flex';
    })
    .catch(() => {
      responseBox.classList.add('response-error');
      responseTitle.textContent = "Network Error";
      responseDesc.textContent = "There was a problem connecting to the server.";
    });
  }
});


function closeSuccess() {
  document.getElementById('form').reset();
  contactpage.style.display = 'flex';
  successpage.style.display = 'none';
}