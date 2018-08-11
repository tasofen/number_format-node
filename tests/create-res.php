<?php

$filePath = __DIR__.'/data.json';
$filePathRes = __DIR__.'/res-php.json';
$json = file_get_contents($filePath);
$arr = json_decode($json);

$res = [];


foreach ($arr as $item) {
	for ($i=0; $i<6; $i++) {
		$res[] = number_format($item);
		$res[] = number_format($item, $i);
		$res[] = number_format($item, $i, ',', ' ');
	}
}

$json = json_encode($res);
file_put_contents($filePathRes, $json, LOCK_EX);