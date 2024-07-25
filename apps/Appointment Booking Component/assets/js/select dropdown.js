document.querySelector('.selected').addEventListener('click', function() {
    document.querySelector('.options').style.display = 'block';
  });
  
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      const text = this.textContent;
      document.querySelector('.selected').textContent = text;
      document.querySelector('.options').style.display = 'none';
  
      // Update the hidden select element
      const selectElement = document.getElementById('service');
      selectElement.value = value;
      selectElement.dispatchEvent(new Event('change'));
    });
  });
  
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.selected')) {
      document.querySelector('.options').style.display = 'none';
    }
  });
  