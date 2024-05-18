<?php

//conexao
include_once('conexao.php');



if (isset($_POST['submit']) && ($_POST['senha'] === $_POST['senhaconfirmada'])) {

  //salvando os dados em variaveis 
  $email = $_POST['email'];
  $senha = $_POST['senha'];
  $nome = $_POST['nome'];
  $sobrenome = $_POST['sobrenome'];
  $senhaconfirmada = $_POST['senhaconfirmada'];
  //enviando para o BD
  $resultado = mysqli_query($conexao, "INSERT INTO usuarios(email,senha,nome,sobrenome) VALUES ('$email','$senha','$nome','$sobrenome')");
  header('Location: telainicial.php');
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
    class="d-flex flex-md-column align-items-center justify-content-center m-auto my-0 div-container position-relative">
    <header class="d-flex justify-content-center position-absolute top-0 py-4">
      <img class="logo" src="../assets/images/logo.png" alt="Logo do IFeet">
    </header>
    <main class="d-flex w-100">

      <form method="post" class="form-signin w-100 px-4 m-auto needs-validation" novalidate>
        <h1 class="mb-5 fw-normal text-center">Registrar</h1>
        <div class="col-md-6 d-flex w-100 gap-3 my-3">
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingName" name="nome" placeholder="Nome" required>
            <label for="floatingName">Nome</label>
            <div class="invalid-feedback">
              Informe seu nome!
            </div>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingSurname" name="sobrenome" placeholder="Sobrenome"
              required>
            <label for="floatingSurname">Sobrenome</label>
            <div class="invalid-feedback">
              Informe seu sobrenome!
            </div>
          </div>
        </div>
        <div class="form-floating my-3">
          <input type="email" class="form-control" id="floatingEmail" name="email" placeholder="nome@examplo.com"
            required>
          <label for="floatingEmail">E-mail</label>
          <div class="invalid-feedback">
            Informe seu e-mail!
          </div>
        </div>
        <div class="form-floating my-3">
          <input type="password" class="form-control" id="floatingPassword" name="senha" placeholder="Senha"
            minlength="8" required>
          <label for="floatingPassword">Senha</label>
          <div class="invalid-feedback">
            Informe sua senha!
          </div>
        </div>
        <div class="form-floating my-3">
          <input type="password" class="form-control" id="floatingConfirmPassword" name="senhaconfirmada"
            placeholder="Confirmar senha" required>
          <label for="floatingConfirmPassword">Confirmar senha</label>
          <div class="invalid-feedback">
            Confirme sua senha!
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