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
waitForElement('form[data-form-id="62eb459e90cabb2256fb4656"]').then(form => {

  // Select the email field
  const email = form.querySelector('input[name="email"]');
  
  // Select the price field
  const price = form.querySelector('input[name="SQF_PRICE"]');
  
  // Select the payment term field
  const paymentTerm = form.querySelector('input[name="SQF_PAYMENT_TERM"]');

  // Define the default redirect url
  const url = form.getAttribute('data-success-redirect');

  // Handle the email change
  email.addEventListener('input', () => {
    
    // Define the data
    const payload = {
      email: email.value,
      price: form.querySelector('input[name="SQF_PRICE"]').value,
      payment_term: form.querySelector('input[name="SQF_PAYMENT_TERM"]').value
    });

    // Update the url
    form.setAttribute('data-success-redirect', url + '?token=' + btoa(JSON.stringify(payload)));
  });
});
