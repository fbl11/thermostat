// Specification:

// If power saving mode is off, the maximum temperature is 32 degrees
// You can reset the temperature to 20 with a reset function
// You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
// (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

// Thermostat starts at 20 degrees

describe("Features", function(){
    var thermostat 
    beforeEach(function(){
        thermostat = new Thermostat()
    })

    describe("Thermostat", function(){
        it("starts at a temperature 20 degrees", function(){
            expect(thermostat.temperature).toEqual(20)
        })
        // If power saving mode is on, the maximum temperature is 25 degrees
        // Power saving mode is on by default
        it('has a power saving mode', function(){
            expect(thermostat.powerSavingMode).toEqual(true)
        })

        it('if power saving mode is on maximum temperature is 25 degrees', function(){
            expect(thermostat.maxTemp).toEqual(25)
        })

        it('if power saving mode is off maximum temperature is 32 degrees', function(){
            thermostat.toggleMode()
            expect(thermostat.maxTemp).toEqual(32)
        })

        it('allows the user to toggle the power saving mode', function(){
            let testThermostat = new Thermostat()
            testThermostat.toggleMode()
            expect(testThermostat.powerSavingMode).toEqual(false)
            testThermostat.toggleMode()
            expect(testThermostat.powerSavingMode).toEqual(true)
        })

    // The minimum temperature is 10 degrees
        it("has a minimum temperature of 10 degrees", function(){
            expect(thermostat.minTemp).toBe(10)
        })

    // You can increase the temperature with an up function
        it('can adjust the temperature up', function(){
            initial_temp = thermostat.temperature;
            thermostat.tempUp(5);
            expect(thermostat.temperature).toBe(initial_temp + 5)
        })

        it('if power saving mode is on, maximum temperature can not exceed 25 degrees', function(){
            thermostat.tempUp(thermostat.maxTemp + 1);
            expect(thermostat.temperature).not.toBeGreaterThan(thermostat.maxTemp)
        })

        // You can decrease the temperature with a down function

        it('can adjust the temperature down', function(){
            thermostat.temperature = 20;
            thermostat.tempDown(5);
            expect(thermostat.temperature).toBe(15)
        })

    
    
    })
});


