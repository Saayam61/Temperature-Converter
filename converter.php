<?php
$inputTemp = $_POST['inputTemp'];
$inputUnit = $_POST['inputUnit'];
$outputUnit = $_POST['outputUnit'];

if ($inputUnit === 'fahrenheit' && $outputUnit === 'celsius') {
    $convertedTemp = ($inputTemp - 32) * (5/9);
} elseif ($inputUnit === 'celsius' && $outputUnit === 'fahrenheit') {
    $convertedTemp = ($inputTemp * 9/5) + 32;
} else {
    $convertedTemp = $inputTemp;
}

echo json_encode(array('convertedTemp' => $convertedTemp));
?>
