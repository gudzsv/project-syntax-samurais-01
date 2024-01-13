const signupForm = document.querySelector('.signup-form');

function formInfo(event) {
  event.preventDefault();
  const signData = {
    name: event.target.elements.name.value,
    email: event.target.elements.email.value,
    message: event.target.elements.message.value,
  };
  const sentMessage = `
	Hello ${signData.name} we have got your data:
	-Your Name: ${signData.name}
	-Your Email: ${signData.email}
	-Your Message: ${signData.message}
	Thanks for your Sign Up, we'll get back to you shortly
	`;

  alert(sentMessage);

  event.target.reset();
}

signupForm.addEventListener('submit', formInfo);
