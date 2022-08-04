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
waitForElement('.form-wrapper').then(form => {

  console.log('form', form)

  // Select the email field
  const email = form.querySelector('input[name="email"]');

  console.log(email)

  // Define the default redirect url
  const url = form.getAttribute('data-success-redirect');

  // Handle the email change
  email.addEventListener('input', () => {

    // Update the url
    form.setAttribute('data-success-redirect', url + '?email=' + email.value);
   });
});