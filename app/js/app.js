var myApp = angular.module('myApp', ['ngMap'])
  .controller('MyController', function(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
    this.types = providers;
    this.address = "22182 Virginia";
    this.milles = mil;
    this.getRadius = function(num) {
      return Math.sqrt(num) * 100;
    }
    this.getMille = function(mille) {

    }
  })

 myApp.controller('CircleSimpleCtrl', function() {
    var vm = this;
    vm.cities = {
      chicago: {population:2714856, position: [41.878113, -87.629798]},
      newyork: {population:8405837, position: [40.714352, -74.005973]},
      losangeles: {population:3857799, position: [34.052234, -118.243684]},
      vancouver: {population:603502, position: [49.25, -123.1]},
    }
    vm.getRadius = function(num) {
      return Math.sqrt(num) * 100;
    }
  });
 /*arreglo providers*/
    var providers = [
      {
        id: 1,
        name: "juan perez",
        phone: 123456,
        location: "8221 Old Courthouse Rd #102 Vienna, VA 22182",
        specialist: "Odontologia",
        sex: "M"
      },
      {
        id: 2,
        name: "armando lios",
        phone: 653421,
        location: "7263E Arlington Blvd Falls Church, VA 22042",
        specialist: "Pediatria",
        sex: "M"
      },
      {
        id: 3,
        name: "maria perez",
        phone: 987456,
        location: "3299 Woodburn Rd #350 Annandale, VA 22003",
        specialist: "Psicologia",
        sex: "F"
      },
      {
        id: 4,
        name: "jose perez",
        phone: 456123,
        location: "8100 Boone Blvd #300 Vienna, VA 22182",
        specialist: "Psicologia",
        sex: "F"
      }
    ];
    /*Arreglo millas*/
    var mil = {
    availableOptions: [
      {id: '1609.34', name: '1 Milles'},
      {id: '4828.03', name: '3 Milles'},
      {id: '16093.4', name: '10 Milles'},
      {id: '32186.9', name: '20 Milles'},
      {id: '48280.3', name: '30 Milles'}
    ],
    selectedOption: {id: '1609.34', name: '1 Milles'} //This sets the default value of the select in the ui
    };