<?php

if (isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['senha'])) {
    include_once ('conexao.php');

    $email = $_POST['email'];
    $password = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE email = '$email' and senha = '$password'";
    $result = $conexao->query($sql);

    if (mysqli_num_rows($result) < 1) {
        //Nao existe
        header('Location: login.php');
    } else {
        //Existe
        header('Location: telainicial.php');
    }

} else {
    header('Location: index.php');
}
?>