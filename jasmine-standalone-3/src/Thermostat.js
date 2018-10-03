function Thermostat(){
    this.temperature = 20;
    this.minTemp = 10;
    this.maxTemp = 25;
    this.powerSavingMode = true;
}

Thermostat.prototype = {

    getCurrentTemp: function () {
        return this.temperature
    },

    tempUp: function(degrees){  
        let newtemp = this.temperature + degrees;
        newtemp > this.maxTemp ? this.temperature = this.maxTemp : this.temperature = newtemp;
    },

    tempDown: function(degrees){
        let newtemp = this.temperature - degrees;
        newtemp < this.minTemp ? this.temperature = this.minTemp : this.temperature = newtemp;
    },

    toggleMode: function(){
        if (this.powerSavingMode === true){
            this.powerSavingMode = false;
            this.maxTemp = 32;
        } else {
            this.powerSavingMode = true;
            this.maxTemp = 25;
        }
    },

    reset: function(){
        this.temperature = 20;
    },

    currentUsage: function(){
        if (this.temperature < 18) {
            return "low-usage";
        } else if (this.temperature > 25) {
            return "high-usage";
        } else {
            return "medium-usage";
        }
    }

};