(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const textConfirm = document.getElementById('confirm');
  const textPassword = document.getElementById('passw');

  Array.from(forms).forEach(form => {
    const stop = (event) => {
      event.preventDefault();
      event.stopPropagation();
    }

    const validationLength = () => {
      if (password.value.length < 8) {
        textPassword.innerText = 'A senha deve ter pelo menos 8 dígitos!';
        form.checkValidity('A senha deve ter pelo menos 8 dígitos!');

        textPassword.style.display = 'block';
        password.classList.add('confirm-pass');
        // stop();
      }
      else {
        textPassword.style.display = 'none';
        password.classList.remove('confirm-pass');
      }

      // if (confirmPassword.value.length < 8) {
      //   confirmPassword.classList.add('confirm-pass');
      // }
      // else {
      //   textConfirm.style.display = 'none';
      //   confirmPassword.classList.remove('confirm-pass');
      // }
    }

    const validationConfirm = () => {
      if (password.value !== confirmPassword.value) {
        textConfirm.innerText = 'As senhas não conferem!';
        form.checkValidity('As senhas não conferem!');
        textConfirm.style.display = 'block';
        confirmPassword.classList.add('confirm-pass');
        password.classList.add('confirm-pass');
        // stop(form);
      }
      else {
        textConfirm.style.display = 'none';
        textPassword.style.display = 'none';
        confirmPassword.classList.remove('confirm-pass');
        password.classList.remove('confirm-pass');
      }
    }

    const validation = (event) => {
      console.log(password.value.length)
      if (password !== null) {
        password.addEventListener('input', () => {
          validationLength(event);
          // form.classList.add('was-validated')

        }, false)
      }

      if (confirmPassword !== null) {
        confirmPassword.addEventListener('input', () => {
          validationConfirm(event);


          // form.classList.add('was-validated')
        }, false)
      }
    }

    validation();
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        stop(event);
      }

      form.classList.add('was-validated');
    }, false)


    

  });

})()