<?php

$arr = [];

$n = 1234567;

for($i=0; $i<5000; $i++) {
	$h = rand(0, 1234567890);
	$l = rand(0, 1234567890);
	$d = (double)($h.'.'.$l);

	$arr[] = $h;
	$arr[] = $h*-1;
	
	$arr[] = $d;
	$arr[] = $d*-1;
}

$filePath = __DIR__.'/data.json';
$data = json_encode($arr);

file_put_contents($filePath, $data, LOCK_EX);