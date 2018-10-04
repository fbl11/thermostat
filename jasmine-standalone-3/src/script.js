$(document).ready(function () {
    let thermo = new Thermostat()
    let energy = $('#energy')
    let updateDisplay = function () {
        $('#current-temp').text(thermo.getCurrentTemp())
        updateUsage()
    }
    let updatePS = function () {
        $('#psm').text(thermo.getPowerSaving())
    }

    let updateUsage = function () {
       let usage = thermo.currentUsage()
        energy.text(usage)
        if (usage === 'medium-usage') {
            energy.css('color', 'orange')
        } else if (usage === 'low-usage') {
            energy.css('color', 'green')
        } else {
            energy.css('color', 'red')
        }
    }
    updateDisplay()
    
    updatePS()
    // $('#current-temp').text(thermo.getCurrentTemp())

    // $('#psm').text(thermo.getPowerSaving())
    // energy.text(thermo.currentUsage())

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
