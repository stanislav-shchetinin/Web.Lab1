<?php
require_once('parameters.php');
$params = new Parameters($_GET['X'], $_GET['Y'], $_GET['R']);
if ($params->checkParameters()){
    echo "All good!";
} else {
    echo "Not all good";
}

