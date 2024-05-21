<?php

if (isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['password'])) {
    include_once ('connection.php');

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE email = '$email' and senha = '$password'";
    $result = $conexao->query($sql);

    if (mysqli_num_rows($result) < 1) {
        //Nao existe
        header('Location: login.php');
    } else {
        //Existe
        header('Location: home.php');
    }

} else {
    header('Location: index.php');
}
?>