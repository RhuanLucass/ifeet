<?php
$hostname = "localhost";
$bancodedados = "ifeet";
$usuario = "root";
$senha = "";

// Criando conexao
$conexao = mysqli_connect($hostname, $usuario, $senha, $bancodedados);

// Checagem de conexao

/*
if (!$conexao) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Conexao realizada com sucesso";
*/

//fechando conexao

/*
mysqli_close($conn);
*/


?>