<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['bday'])) die();

if ($_POST)
	{
	http_response_code(200);
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $bday = $_POST['bday'];
    $citizenship = $_POST['citizenship'];
    
	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{
	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>