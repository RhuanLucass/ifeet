// Função para mostrar ou esconder as senhas
  const showPassword = () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const show_eye = document.querySelectorAll("#show_eye");
    const hide_eye = document.querySelectorAll("#hide_eye");

    hide_eye.forEach(eye => eye.classList.remove("d-none"));

    if (password.type === "password") {
      password.type = "text";
      if (confirmPassword) confirmPassword.type = "text";
      show_eye.forEach(eye => eye.style.display = "none");
      hide_eye.forEach(eye => eye.style.display = "block");

    } else {
      password.type = "password";
      if (confirmPassword) confirmPassword.type = "password";
      show_eye.forEach(eye => eye.style.display = "block");
      hide_eye.forEach(eye => eye.style.display = "none");
    }
  }