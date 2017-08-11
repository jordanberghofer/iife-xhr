console.log("predator.js");

var Predator = (function  () {
    var carnivores = [];
    var herbivores = [];

    return {
        
        loadCarnivores: function (callbackToInvoke) {
            var loadCarn = new XMLHttpRequest();

            loadCarn.addEventListener("load", function () {
                console.log("carnivores have loaded");
                // Set the value of the private array
                carnivores = JSON.parse(this.responseText);

                // Invoke the callback function so that the caller knows
                // that the process is complete. Make sure to pass the 
                // carnivore array as an argument.
            
                showCarnivores(carnivores)
            });

            loader.open("GET","carnivores.json");
            loader.send();
        },
        
        loadHerbivores: function (callbackToInvoke){
            var loadHerb = new XMLHttpRequest();

            loadHerb.addEventListener("load", function (){
                console.log("herbivores have loaded");

                herbivores = JSON.parse(this.responseText);
                
                showHerbivores(herbivores);
            });

            loader.open("GET","herbivores.json");
            loader.send();
        }
    }
})();