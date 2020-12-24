<?php


require "./Models/Student.php";


header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api// 
header("Content-type: application/json"); //Indicação de arquivo JSON

$Students = Student::getAll();

print_r(json_encode($Students));




