function Thermostat(){
    this.temperature = 20;
    this.minTemp = 10;
}

Thermostat.prototype = {
  tempUp: function(degrees){
    this.temperature += degrees;
  },

  tempDown: function(degrees){

    let newtemp = this.temperature - degrees;
    newtemp < this.minTemp ? this.temperature = this.minTemp : this.temperature = newtemp;
    
  }

};