'use strict'

describe('Thermostat', function(){
    var thermostat 

    beforeEach(function(){
        thermostat = new Thermostat()
    });
   
    it('has a default temperature of 20 degrees', function(){
        expect(thermostat.temperature).toEqual(20)
    })

    it('gets the current temperature', function () {
        expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('has a minimum temperature of 10 degrees', function () {
        expect(thermostat.MIN_TEMP).toBe(10)
    })

    it('has a power saving mode that is on by default', function(){
        expect(thermostat.isSavingPower()).toEqual(true)
    })

    describe('toggleMode', function () {
        it('allows the user to toggle the power saving mode', function () {
            thermostat.toggleMode()
            expect(thermostat.isSavingPower()).toEqual(false)
            thermostat.toggleMode()
            expect(thermostat.isSavingPower()).toEqual(true)
        })
    })

    it('if power saving mode is on maximum temperature is 25 degrees', function(){
        expect(thermostat.maxTemp).toEqual(25)
    })

    it('if power saving mode is off maximum temperature is 32 degrees', function(){
        thermostat.toggleMode()
        expect(thermostat.maxTemp).toEqual(32)
    })

    describe('tempUp', function(){
        it('increases the temperature by a given value', function(){
            let initialTemp = thermostat.getCurrentTemp()
            thermostat.tempUp(5)
            expect(thermostat.getCurrentTemp()).toBe(initialTemp + 5)
        })
        it('temperature cannot be increased beyond maximum temperature', function(){
            thermostat.tempUp(thermostat.maxTemp + 1)
            expect(thermostat.getCurrentTemp()).not.toBeGreaterThan(thermostat.maxTemp)
        })
        // above tests both scenarios
        // it('if power saving mode is on, maximum temperature cannot exceed 32 degrees', function () {
        //     thermostat.toggleMode()
        //     thermostat.tempUp(thermostat.maxTemp + 1)
        //     expect(thermostat.temperature).not.toBeGreaterThan(thermostat.maxTemp)
        // })
    })

    describe('tempDown', function(){
        it('decreases the temperature by given value', function(){
            let initialTemp = thermostat.getCurrentTemp()
            thermostat.tempDown(5)
            expect(thermostat.getCurrentTemp()).toBe(initialTemp - 5);
        })
        it('temperature cannot be decrease below minimum temperature', function(){
            let initialTemp = thermostat.getCurrentTemp()
            thermostat.tempDown(initialTemp - thermostat.maxTemp)
            expect(thermostat.getCurrentTemp()).not.toBeLessThan(thermostat.MIN_TEMP);
        })
    })

    describe('reset', function(){
        it('user can reset the temperature to 20', function(){
            let initialTemp = thermostat.maxTemp
            thermostat.reset()
            expect(thermostat.getCurrentTemp()).not.toEqual(initialTemp)
            expect(thermostat.getCurrentTemp()).toEqual(20)
        })
    })

    describe('currentUsage', function(){
        it('displays the current energy usage as high, if temp is above 25', function(){
            thermostat.temperature = 26
            expect(thermostat.currentUsage()).toEqual('high-usage')
        })
        it('displays the current energy usage as medium, if temp is between 19 and 24 inclusive', function(){
            thermostat.temperature = 19
            expect(thermostat.currentUsage()).toEqual('medium-usage')
            thermostat.temperature = 24
            expect(thermostat.currentUsage()).toEqual('medium-usage')
        })
        it('displays the current energy usage as low, if temp is below 18', function(){
            thermostat.temperature = 17
            expect(thermostat.currentUsage()).toEqual('low-usage')
        })
    })
    
})
