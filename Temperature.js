var temperature = {
    toFahrenheit: function(i) {
        return (i * (9/5)) + 32;
    },    
    toCelsius: function(i) {
        return ((i - 32) * (5/9));
    }
};

var tempToday = 82;

var tempInCelsius = Math.round(temperature.toFahrenheit(tempToday));

console.log("Today's temperature is " + tempToday + "F, which is " + tempInCelsius + "C.");
