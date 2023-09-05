// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    
    form.addEventListener('change', function(event) {
      if (event.target.type === 'checkbox') {
        const checkboxId = event.target.id;
        const descriptionId = 'description' + checkboxId.charAt(checkboxId.length - 1);
        const description = document.getElementById(descriptionId);
        
        if (event.target.checked) {
          description.style.display = 'block';
        } else {
          description.style.display = 'none';
        }
      }
    });
  });
  