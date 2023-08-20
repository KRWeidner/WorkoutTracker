const { DATE } = require("sequelize");

const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new post form
    const title = document.querySelector('#title-new-post').value.trim();
    const content = document.querySelector('#content-new-post').value.trim();
  
    if (title && content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/workoutHistory', {
        method: 'POST',
        body: JSON.stringify({ routineId: content, date: DATE.now }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/workoutHistory');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#createPost')
    .addEventListener('click', newPostFormHandler);