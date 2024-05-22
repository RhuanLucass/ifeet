<?php

//conexao
include_once ('connection.php');



if (isset($_POST['submit'])) {

  //print_r($_POST['email']);
  //print_r($_POST['senha']);

  //salvando os dados em variaveis  
  $email = $_POST["email"];
  $password = $_POST["password"];
  //enviando para o BD
  $resultado = mysqli_query($conexao, "INSERT INTO usuarios(email,senha) VALUES ('$email','$password')");
}






?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" defer>
    </script>

  <title>IFeet</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>

<body class="d-flex bg-light">
  <div
    class="d-flex flex-column align-items-center justify-content-start m-auto my-0 div-container position-relative ">
    <header class="d-flex justify-content-center py-4">
      <img class="logo" src="../assets/images/logo.png" alt="Logo do IFeet">
    </header>
    <main class="d-flex w-100 h-100">
      <form action="testalogin.php" method="post" class="form-signin w-100 px-4 m-auto needs-validation" novalidate>

        <h1 class="mb-5 fw-normal text-center">Entrar</h1>

        <div class="form-floating">
          <input name="email" type="email" class="form-control" id="floatingInput" placeholder="nome@examplo.com"
            required>
          <label for="floatingInput">E-mail</label>
          <div class="invalid-feedback">
            Informe um e-mail válido!
          </div>
        </div>
        <div class="form-floating my-3">
          <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Senha" required>
          <label for="floatingPassword">Senha</label>
          <div class="invalid-feedback">
            Informe sua senha!
          </div>
        </div>

        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Lembre de mim
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" name="submit" type="submit">Entrar</button>
      </form>
    </main>
  </div>
  <script src="../assets/js/scripts.js"></script>
  <script src="../assets/js/validation.js"></script>
</body>

</html>