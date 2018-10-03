'use strict'

function Thermostat(){
    this.temperature = 20;
    this.MIN_TEMP = 10;
    this.maxTemp = 25;
    this.powerSavingMode = true;
}

Thermostat.prototype = {

    // getter functions for constructor properties
    getCurrentTemp: function () {
        return this.temperature
    },

    isMinTemp: function () {
        return this.temperature === this.MIN_TEMP
    },

    isSavingPower: function () {
        return this.powerSavingMode
    },
    // prototype functions
    tempUp: function (degrees = 1) {  
        let newtemp = this.temperature + degrees;
        newtemp > this.maxTemp ? this.temperature = this.maxTemp : this.temperature = newtemp;
    },

    tempDown: function (degrees = 1) {
        if (this.isMinTemp()) {
            return
        }
        this.temperature -= degrees
        // let newtemp = this.temperature - degrees;
        // newtemp < this.MIN_TEMP ? this.temperature = this.MIN_TEMP : this.temperature = newtemp;
    },

    toggleMode: function () {
        if (this.isSavingPower() === true) {
            this.powerSavingMode = false
            this.maxTemp = 32
        } else {
            this.powerSavingMode = true
            this.maxTemp = 25
        }
        // if (this.powerSavingMode === true){
        //     this.powerSavingMode = false;
        //     this.maxTemp = 32;
        // } else {
        //     this.powerSavingMode = true;
        //     this.maxTemp = 25;
        // }
    },

    reset: function () {
        this.temperature = 20;
    },

    currentUsage: function () {
        if (this.temperature < 18) {
            return 'low-usage';
        } else if (this.temperature > 25) {
            return 'high-usage';
        } else {
            return 'medium-usage';
        }
    }

};