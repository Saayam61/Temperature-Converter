document.addEventListener("DOMContentLoaded", function(){
    const form = documnet.getElementById('converter-form');

    const input = document.getElementById('input-temp')
    const inputValue = input.value.trim();
    const inputUnit = document.getElementById('input[name="unit"]:checked').value;
    const outputUnit = document.getElementById('input[name="output-unit"]:checked').value;

    fetch('converter.php', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue, inputUnit, outputUnit }),
    })
    .then(response => response.json())
    .then(data =>{
        document.getElementById('result').textContent = `Converted Temperature: ${data.convertedTemp}`;
    })
    .catch(error =>{
        console.error('Error: ',error)
    })
})
