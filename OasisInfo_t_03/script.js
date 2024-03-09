function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultContainer = document.getElementById("result");

    // Validate input
    if (!temperatureInput || isNaN(temperatureInput)) {
        resultContainer.innerText = "Please enter a valid temperature!";
        return;
    }

    const temperature = parseFloat(temperatureInput);

    // Perform conversion
    let convertedTemperature;

    if (fromUnit === "celsius") {
        convertedTemperature = convertFromCelsius(temperature, toUnit);
    } else if (fromUnit === "fahrenheit") {
        convertedTemperature = convertFromFahrenheit(temperature, toUnit);
    } else {
        convertedTemperature = convertFromKelvin(temperature, toUnit);
    }

    // Display result
    resultContainer.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}

function convertFromCelsius(temperature, toUnit) {
    if (toUnit === "fahrenheit") {
        return (temperature * 9/5) + 32;
    } else if (toUnit === "kelvin") {
        return temperature + 273.15;
    } else {
        return temperature;
    }
}

function convertFromFahrenheit(temperature, toUnit) {
    if (toUnit === "celsius") {
        return (temperature - 32) * 5/9;
    } else if (toUnit === "kelvin") {
        return (temperature - 32) * 5/9 + 273.15;
    } else {
        return temperature;
    }
}

function convertFromKelvin(temperature, toUnit) {
    if (toUnit === "celsius") {
        return temperature - 273.15;
    } else if (toUnit === "fahrenheit") {
        return (temperature - 273.15) * 9/5 + 32;
    } else {
        return temperature;
    }
}
