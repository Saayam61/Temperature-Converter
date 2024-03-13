document.addEventListener("DOMContentLoaded", function(){
    const form = documnet.getElementById('converter-form');

    const input = document.getElementById('input-temp')
    const inputValue = input.value.trim();
    const inputUnit = document.getElementById('input[name="unit"]:checked').value;
    const outputUnit = document.getElementById('input[name="output-unit"]:checked').value;

    inputValue.addEventListener('input', validateInput);

    form.addEventListener('submit', function(event){
        if(!validateInput){
            event.preventDefault();
        }
    })

    function validateInput() {
        const inputRegex = /^-?\d*\.?\d*$/; // Regular expression to match decimal or integer
    
        if (!inputRegex.test(inputValue)) {
            alert('Invalid input')
            input.value = '';
        }
    }

    fetch('converter.php', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({ inputTemp, inputUnit, outputUnit }),
    })
    .then(response => response.json())
    .then(data =>{
        document.getElementById('result').textContent = `Converted Temperature: ${data.convertedTemp}`;
    })
    .catch(error =>{
        console.error('Error: ',error)
    })
})
