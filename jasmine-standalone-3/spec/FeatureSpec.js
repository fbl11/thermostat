// Specification:
// (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
'use strict'

describe('Features', function(){
    var thermostat 
    
    beforeEach(function(){
        thermostat = new Thermostat()
    })

    describe('Thermostat', function(){
    // Thermostat starts at 20 degrees
        it('starts at a temperature 20 degrees', function(){
            expect(thermostat.temperature).toEqual(20)
        })

        // The minimum temperature is 10 degrees
        it('has a minimum temperature of 10 degrees', function () {
            expect(thermostat.MIN_TEMP).toBe(10)
        })

        // Power saving mode is on by default
        it('has a power saving mode that is on by default', function() {
            expect(thermostat.isSavingPower()).toEqual(true)
        })

        it('allows the user to toggle the power saving mode', function () {
            thermostat.toggleMode()
            expect(thermostat.isSavingPower()).toEqual(false)
            thermostat.toggleMode()
            expect(thermostat.isSavingPower()).toEqual(true)
        })

        // If power saving mode is on, the maximum temperature is 25 degrees
        it('if power saving mode is on maximum temperature is 25 degrees', function(){
            expect(thermostat.maxTemp).toEqual(25)
        })
        // If power saving mode is off, the maximum temperature is 32 degrees
        it('if power saving mode is off maximum temperature is 32 degrees', function(){
            thermostat.toggleMode()
            expect(thermostat.maxTemp).toEqual(32)
        })

        // You can increase the temperature with an up function
        it('can adjust the temperature up', function(){
            let initialTemp = thermostat.temperature
            thermostat.tempUp(5)
            expect(thermostat.temperature).toBe(initialTemp + 5)
        })

        // test at unit level
        // it('if power saving mode is on, maximum temperature cannot exceed 25 degrees', function(){
        //     thermostat.tempUp(thermostat.maxTemp + 1)
        //     expect(thermostat.temperature).not.toBeGreaterThan(thermostat.maxTemp)
        // })

        // You can decrease the temperature with a down function
        it('can adjust the temperature down', function(){
            let initialTemp = thermostat.temperature
            thermostat.tempDown(5)
            expect(thermostat.temperature).toBe(initialTemp - 5)
        })

        // You can reset the temperature to 20 with a reset function
        it('user can reset the temperature to 20', function(){
            thermostat.tempUp(5)
            thermostat.reset()
            expect(thermostat.temperature).toEqual(20)
        })

        // You can ask about the thermostat's current energy usage: < 18 is low-usage,
        // < 25 is medium-usage, anything else is high-usage.
        it('displays the current energy usage as high, medium or low', function(){
            let energyUsage = ['high-usage', 'medium-usage', 'low-usage']
            expect(energyUsage).toContain(thermostat.currentUsage())
        }) 

    })

});
