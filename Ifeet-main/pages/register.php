<?php

//conexao
include_once ('connection.php');



if (isset($_POST['submit']) && ($_POST['password'] === $_POST['confirm-password'])) {

  //salvando os dados em variaveis 
  $email = $_POST['email'];
  $password = $_POST['password'];
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $confirmPassword = $_POST['confirm-password'];
  //enviando para o BD
  $resultado = mysqli_query($conexao, "INSERT INTO usuarios(email,senha,nome,sobrenome) VALUES ('$email','$password','$name','$surname')");
  header('Location: home.php');
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IFeet</title>
  <link rel="stylesheet" href="../assets/css/style.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

  <!-- font awesome  -->
  <script src="https://kit.fontawesome.com/dc951fd168.js" crossorigin="anonymous"></script>

  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"
    defer></script>

</head>

<body class="d-flex bg-light">
  <div class="d-flex flex-column align-items-center justify-content-start m-auto my-0 div-container position-relative ">
    <header class="d-flex justify-content-center py-4">
      <img class="logo" src="../assets/images/logo.png" alt="Logo do IFeet">
    </header>
    <main class="d-flex w-100 h-100">
      <form method="post" class="form-signin w-100 px-4 m-auto needs-validation" novalidate>
        <h1 class="mb-5 fw-normal text-center">Registrar</h1>
        <div class="col-md-6 d-flex w-100 gap-3 my-3">
          <div class="form-floating">
            <input type="text" class="form-control" id="name" name="name" placeholder="Nome" required>
            <label for="name">Nome</label>
            <div class="invalid-feedback">
              Informe seu nome!
            </div>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="surname" name="surname" placeholder="Sobrenome" required>
            <label for="surname">Sobrenome</label>
            <div class="invalid-feedback">
              Informe seu sobrenome!
            </div>
          </div>
        </div>
        <div class="form-floating my-3">
          <input type="email" class="form-control" id="email" name="email" placeholder="nome@examplo.com" required>
          <label for="email">E-mail</label>
          <div class="invalid-feedback">
            Informe seu e-mail!
          </div>
        </div>

        <div class="input-group my-3">
          <div class="form-floating d-flex flex-wrap">
            <input type="password" class="form-control input-pass" name="password" id="password" placeholder="Senha"
              required>
            <label for="password">Senha</label>

            <div class="input-group input-icon">
              <span class="input-group-text" onclick="showPassword()">
                <i class="fas fa-eye" id="show_eye"></i>
                <i class="fas fa-eye-slash d-none" id="hide_eye"></i>
              </span>
            </div>

            <div id="passw" class="invalid-feedback input-feedback">
              Confirme sua senha!
            </div>
          </div>
        </div>

        <div class="input-group my-3">
          <div class="form-floating d-flex flex-wrap">
            <input type="password" class="form-control input-pass" name="confirm-password" id="confirm-password"
              placeholder="Confirmar senha" required>
            <label for="confirm-password">Confirmar senha</label>

            <div class="input-group input-icon">
              <span class="input-group-text" onclick="showPassword()">
                <i class="fas fa-eye" id="show_eye"></i>
                <i class="fas fa-eye-slash d-none" id="hide_eye"></i>
              </span>
            </div>

            <div id="confirm" class="invalid-feedback input-feedback">
              Confirme sua senha!
            </div>
          </div>
        </div>

        <button class="btn btn-primary w-100 py-2" type="submit" name="submit">Registrar</button>
      </form>
    </main>
  </div>
  <script src="../assets/js/scripts.js"></script>
  <script src="../assets/js/validation.js"></script>
  
</body>

</html>