describe('Thermostat', function(){
    var thermostat 
    beforeEach(function(){
        thermostat = new Thermostat()
    });
   
    it('has a default temperature of 20 degrees', function(){
        expect(thermostat.temperature).toEqual(20)
    })

    it('has a power saving mode that is on by default', function(){
        expect(thermostat.powerSavingMode).toEqual(true)
    })

    it('if power saving mode is on maximum temperature is 25 degrees', function(){
        expect(thermostat.maxTemp).toEqual(25)
    })

    it('if power saving mode is off maximum temperature is 32 degrees', function(){
        thermostat.toggleMode()
        expect(thermostat.maxTemp).toEqual(32)
    })

    it('has a minimum temperature of 10 degrees', function(){
        expect(thermostat.minTemp).toBe(10)
    })

    describe('tempUp', function(){
        it("should increase the temperature by given value", function(){
            thermostat.temperature = 20;
            thermostat.tempUp(5);
            expect(thermostat.temperature).toBe(25);
        })
        it('if power saving mode is on, maximum temperature can not exceed 25 degrees', function(){
            thermostat.tempUp(thermostat.maxTemp + 1);
            expect(thermostat.temperature).not.toBeGreaterThan(thermostat.maxTemp)
        })
    })

    describe('tempDown', function(){
        it("should decrease the temperature by given value", function(){
            thermostat.temperature = 20;
            thermostat.tempDown(5);
            expect(thermostat.temperature).toBe(15);
        })
        it("should not decrease the temperature below minimum temperature", function(){
            thermostat.temperature = 20;
            thermostat.tempDown(15);
            expect(thermostat.temperature).not.toBeLessThan(thermostat.minTemp);
        })
    })

    describe('toggleMode', function(){
        it('allows the user to toggle the power saving mode', function(){          
            thermostat.toggleMode()
            expect(thermostat.powerSavingMode).toEqual(false)
            thermostat.toggleMode()
            expect(thermostat.powerSavingMode).toEqual(true)
        })
    })

    
})