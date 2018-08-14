<?php


$files = [
    __DIR__.'/res-php.json',
    __DIR__.'/res-node.json',
];


$originPath = __DIR__.'/data.json';
$json = file_get_contents($originPath);
$_origin = json_decode($json, true);
$origin = [];

foreach($_origin as $item) {
    for($i=0; $i<3*7; ++$i) {
        $origin[] = $item;
    }
}


$data = [];

foreach ($files as $file) {
    $json = file_get_contents($file);
    $data[] = json_decode($json, true);
}

$n = count($data[0]);

$error = false;

for ($i=0; $i<$n; ++$i) {
    if ($data[0][$i] !== $data[1][$i]) {
        $error = true;
        echo $origin[$i];
        echo ' = ';
        echo $data[0][$i];
        echo ' <> ';
        echo $data[1][$i];
        echo PHP_EOL;
    }
}

if (!$error) {
    echo 'Test - success', PHP_EOL;
} else {
    exit(1);
}
