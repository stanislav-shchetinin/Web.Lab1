<?php
require_once('Parameters.php');
require_once('HtmlTable.php');

$start = microtime(true); //для вычесления времени работы скрипта
$params = new Parameters($_GET['X'], $_GET['Y'], $_GET['R']);

//json:
//{
//  "isValidValue": true,
//  "isInArea": true,
//  "currentTime": 2023/09/10 23:07:02,
//  "scriptRunningTime": 5
//  "htmlTable": <table></table>
//}
$data = array();
$data["isValidValue"] = $params->checkParameters();
if ($data["isValidValue"]) {
    $data["isInArea"] = $params->checkInArea();
    $data["currentTime"] = date('Y/m/d H:i:s');
    $data["scriptRunningTime"] = round((microtime(true) - $start) * 1000, 3);
    $data["htmlTable"] = (string) new HtmlTable($params, $data["isInArea"], $data["scriptRunningTime"]);
} else {
    header('HTTP/1.1 400 BadRequest', true, 400);
    $data["reasonForTheError"] = $params->getError();
}
header('Content-type: application/json');
echo json_encode($data);



