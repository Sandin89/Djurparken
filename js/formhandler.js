document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const email = formData.get('email');
    if (!email.includes('@')) {
      alert('Vänligen ange en giltig mejladress.');
      return;
    }
  
    const jsonData = Object.fromEntries(formData.entries());
  
    fetch('https://http-echo-server.azurewebsites.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
    alert('Formuläret har skickats.');
  });
  