(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const textConfirm = document.getElementById('confirm');
  const textPassword = document.getElementById('passw');

  // Realizando validação dos inputs
  Array.from(forms).forEach(form => {
    // Função para parar o evento padrão realizado pelos campos
    const stop = (event) => {
      event.preventDefault();
      event.stopPropagation();
    }

    // Validando tamanho da senha
    const validationLength = () => {
      if (password.value.length < 8) {
        textPassword.innerText = 'A senha deve ter pelo menos 8 dígitos!';
        textPassword.style.display = 'block';
        password.classList.add('confirm-pass');
        return false;
      } else {
        textPassword.style.display = 'none';
        password.classList.remove('confirm-pass');
        return true;
      }
    }

    // Validando se a senha e confirmação de senha são iguais
    const validationConfirm = () => {
      if (confirmPassword.value.length > 0 && password.value !== confirmPassword.value) {
        textConfirm.innerText = 'As senhas não conferem!';
        textConfirm.style.display = 'block';
        confirmPassword.classList.add('confirm-pass');
        password.classList.add('confirm-pass');
        return false;
      } else {
        textConfirm.style.display = 'none';
        confirmPassword.classList.remove('confirm-pass');
        password.classList.remove('confirm-pass');
        return true;
      }
    }

    const validation = () => {
      if (password) {
        password.addEventListener('input', () => {
          const validLength = validationLength();
          const validConfirm = validationConfirm();
          form.classList.toggle('was-validated', validLength && validConfirm);
        }, false);
      }

      if (confirmPassword) {
        confirmPassword.addEventListener('input', () => {
          const validConfirm = validationConfirm();
          form.classList.toggle('was-validated', validConfirm);
        }, false);
      }
    }

    validation();

    form.addEventListener('submit', event => {
      const validLength = validationLength();
      const validConfirm = validationConfirm();
      
      if (!form.checkValidity() || !validLength || !validConfirm) {
        stop(event);
        form.classList.add('was-validated');
      } else {
        form.classList.remove('was-validated');
      }
    }, false);
  });

})();
