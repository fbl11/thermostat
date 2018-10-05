$(document).ready(function () {
    let thermo = new Thermostat()
    // assigns 'energy' ID to a variable for convenience 
    let energy = $('#energy')

    // selects 'current temp' ID and sets the text to the current temperature of the thermos
    // calls 'upateUsage' to assign the right text and color to the current 'energy' usage ID
    let updateDisplay = function () {
        $('#current-temp').text(thermo.getCurrentTemp())
        updateUsage()
    }
    // no longer needed - done by 'updateDisplay'
    // $('#current-temp').text(thermo.getCurrentTemp())

    let updatePS = function () {
        $('#psm').text(thermo.getPowerSaving())
    }
    // no longer needed - done by 'updatePS'
    // $('#psm').text(thermo.getPowerSaving())

    // gets current energy usage and assigns it to a variable
    // takes current usage and passes it as parameter to the text of 'energy' ID
    // depending on the text, it changes the text's colour
    let updateUsage = function () {
       let _usage = thermo.currentUsage()
        energy.text(_usage)
        if (_usage === 'medium-usage') {
            energy.css('color', 'orange')
        } else if (_usage === 'low-usage') {
            energy.css('color', 'green')
        } else {
            energy.css('color', 'red')
        }
    }
    // no longer needed - done by 'updateUsage'
    // $('#energy').text(thermo.currentUsage())
   
    updatePS()

    updateDisplay()

    // sends a request to get weather information - using FCC authentication
    // callback
    $('#weather').on('click', function () {
        $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139', function ( data ) {
            console.log(data)
        })
    })

    $('#temp-up').on('click', function () {
        thermo.tempUp()
        updateDisplay()
    })

    $('#temp-down').on('click', function () {
        thermo.tempDown()
        updateDisplay()
    })

    $('#reset-temp').on('click', function() {
        thermo.reset()
        updateDisplay()
    })

    $('#powersaving-on').on('click', function() {
        thermo.switchOnSaving()
        updatePS()
    })

    $('#powersaving-off').on('click', function () {
        thermo.switchOffSaving()
        updatePS()
    })

})
