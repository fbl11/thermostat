function Thermostat(){
    this.temperature = 20;
}

Thermostat.prototype = {
  tempUp: function(degrees){
    this.temperature += degrees;
  },

  tempDown: function(degrees){
      this.temperature -= degrees;
  }

};