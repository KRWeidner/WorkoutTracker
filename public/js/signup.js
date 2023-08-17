const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#userSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signupForm')
  .addEventListener('submit', signupFormHandler);