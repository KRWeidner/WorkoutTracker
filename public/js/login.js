const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#userLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);