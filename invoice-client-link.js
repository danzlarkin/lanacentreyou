// Wait for the elements to load
function waitForElement(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

// Select the form
waitForElement('form[data-form-id="62ea3642ef789649e367e1cb"]').then(form => {
  
  // Hide the message
  document.querySelector('.fe-block.fe-block-946c7f8bb4d58bd02aea p').style.display = 'none';

  // Select the email field
  const email = form.querySelector('input[name="email"]');
  
  // Select the firstname field
  const first_name = form.querySelector('input[name="fname"]');
  
  // Select the lastname term field
  const last_name = form.querySelector('input[name="lname"]');

  // Define the data
  const payload = {
    email: email.value,
    first_name: first_name.value,
    last_name: last_name.value
  };

  // Define the booking link
  const url = 'https://calendly.com/centreyou/nlp-60/?' + new URLSearchParams(payload).toString();
  
  // Select the link field
  const link = document.querySelector('#booking-link');

  // Update the text
  link.innerText = url;
  
  // Copy the link to clipboard
  navigator.clipboard.writeText(url);
  
  console.log(url);

  // Handle the email change
//   email.addEventListener('input', () => {
    

    // Update the url
   // form.setAttribute('data-success-redirect', url + '?token=' + btoa(JSON.stringify(payload)));
  //});
});
