describe('Thermostat', function(){
    var thermostat 
    beforeEach(function(){
        thermostat = new Thermostat()
    })
   
    it('has a default temperature of 20 degrees', function(){
        expect(thermostat.temperature).toEqual(20)
    })

    describe('tempUp', function(){
        it("should increase the temperature by given value", function(){
            thermostat.temperature = 20;
            thermostat.tempUp(5);
            expect(thermostat.temperature).toBe(25);
        })
    })

    describe('tempDown', function(){
        it("should decrease the temperature by given value", function(){
            thermostat.temperature = 20;
            thermostat.tempDown(5);
            expect(thermostat.temperature).toBe(15);
        })
    })
})