<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{
	http_response_code(200);
	$name = $_POST['name'];
	$citizenship = $_POST['citizenship'];
    $email = $_POST['email'];
    $address = $_POST['address'];

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{
	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>