const celciusE1 = document.getElementById("Celcius");
const fahrenheitE1 = document.getElementById("Fahrenheit");
const kelvinE1 = document.getElementById("Kelvin");

// Add an event listener for input changes
celciusE1.addEventListener("input", computeTemp);
fahrenheitE1.addEventListener("input", computeTemp);
kelvinE1.addEventListener("input", computeTemp);

function computeTemp(event) {
    // Check which input element triggered the event
    const sourceElement = event.target;

    // Convert the input value to a number
    const currentValue = parseFloat(sourceElement.value);

    // Check the id of the source element to determine the temperature scale
    switch (sourceElement.id) {
        case "Celcius":
            kelvinE1.value = (currentValue + 273.15).toFixed(2);
            fahrenheitE1.value = ((currentValue * 9/5) + 32).toFixed(2);
            break;

        case "Fahrenheit":
            celciusE1.value = ((currentValue - 32) * 5/9).toFixed(2);
            kelvinE1.value = (((currentValue - 32) * 5/9) + 273.15).toFixed(2);
            break;

        case "Kelvin":
            celciusE1.value = (currentValue - 273.15).toFixed(2);
            fahrenheitE1.value = (((currentValue - 273.15) * 9/5) + 32).toFixed(2);
            break;

        default:
            break;
    }
}
