// Specification:

// You can decrease the temperature with a down function
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
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
    // You can increase the temperature with an up function
        it('can adjust the temperature up', function(){
            thermostat.temperature = 20;
            thermostat.tempUp(5);
            expect(thermostat.temperature).toBe(25)
        })

        // You can decrease the temperature with a down function

        it('can adjust the temperature down', function(){
            thermostat.temperature = 20;
            thermostat.tempDown(5);
            expect(thermostat.temperature).toBe(15)
        })
    
    })
});


