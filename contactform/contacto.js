const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7k78t1x';
   

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      alert('¡Mensaje enviado con éxito!');
      form.reset();
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
      
    });

    
    
});



