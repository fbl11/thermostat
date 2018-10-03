function Thermostat(){
    this.temperature = 20;
    this.minTemp = 10;
    this.maxTemp = 25;
    this.powerSavingMode = true;
}

Thermostat.prototype = {
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
  }

};