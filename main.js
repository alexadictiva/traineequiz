class auto {
            constructor(marca, model, puerta, precio) {
                this.marca = marca,
                this.model = model,
                this.puerta = puerta,
                this.precio = precio
            }
        };

        var modelos = [
            ["Peugot", 206, 4, 200000],
            ["Honda", "Titan", "125cc", 60000],
            ["Peugot", 208, 5, 250000],
            ["Yamaha", "YBR", '160cc', 80500.50] 
        ];

        function printLine() {
            console.log("========================================");
        }
function printModels() {
            var modelo;
            for (i = 0; i < modelos.length; i++) {
                modelo = new auto(modelos[i][0], modelos[i][1], modelos[i][2], modelos[i][3]);
                console.log("Marca: " + modelo.marca + " // Modelo: " + modelo.model + " // Puertas: " + modelo.puerta + " // Precio $" + modelo.precio);
            }
        }

        function printOrderedModels(models) {
            var model;
            for (i = 0; i < models.length; i++) {
                model = new auto(models[i][0], models[i][1], models[i][2], models[i][3]);
                console.log(model.marca + " " + model.model);
            }
        }

        printModels(); 

        
        var vehiculoMasCaroIndice;
        var montoMasCaro = modelos[0][3]; 
        for (i = 0; i < modelos.length; i++) {
        
            if (modelos[i][3] > montoMasCaro) {
                vehiculoMasCaroIndice = i;
                montoMasCaro = modelos[i][3];
            }
        }

        printLine();
console.log("Vehiculo más caro: " + modelos[vehiculoMasCaroIndice][0] + " " + modelos[vehiculoMasCaroIndice][1]);

        
        var vehiculoMasBaratoIndice;
        var montoMasBarato = modelos[0][3];
        for (i = 0; i < modelos.length; i++) {
            if (modelos[i][3] < montoMasBarato) {
                montoMasBarato = modelos[i][3];
                vehiculoMasBaratoIndice = i;
            }
        }
        console.log("Vehiculo mas barato: " + modelos[vehiculoMasBaratoIndice][0] + " " + modelos[vehiculoMasBaratoIndice][1]);

 var indiceVehiculoConY;
        for (i = 0; i < modelos.length; i++) {
            var estracto = Array.from(modelos[i][0])
            
            if (estracto.includes("Y")) { 
                indiceVehiculoConY = i;
            }
        }
        console.log("Vehículo que contiene en el modelo la letra 'Y': " + modelos[indiceVehiculoConY][0] + " " + modelos[indiceVehiculoConY][1] + " " + modelos[indiceVehiculoConY][3]);

        
        printSpecificModelsData();

        printLine();
        console.log("Vehículos ordenados por precios de mayor a menor:");
        var modelosDeMayorAMenorPrecio = modelos.sort(function (a, b) {
           
            return b[3] - a[3]; 
        });
        printOrderedModels(modelosDeMayorAMenorPrecio);

        
        function printSpecificModelsData() {
            var vehiculoMasCaroIndice;
            var vehiculoMasBaratoIndice;
            var montoMasCaro = modelos[0][3];
            var montoMasBarato = modelos[0][3];
            var indiceVehiculoConY;
            var estracto;

            for (i = 0; i < modelos.length; i++) {
               
                if (modelos[i][3] > montoMasCaro) {
                    vehiculoMasCaroIndice = i;
                    montoMasCaro = modelos[i][3];
                }

                
                if (modelos[i][3] < montoMasBarato) {
                    montoMasBarato = modelos[i][3];
                    vehiculoMasBaratoIndice = i;
                }

               
                estracto = Array.from(modelos[i][0])
                if (estracto.includes("Y")) {
                    indiceVehiculoConY = i;
                }
            }

            printLine();
 	    console.log("Vehiculo más caro: " + modelos[vehiculoMasCaroIndice][0] + " " + modelos[vehiculoMasCaroIndice][1]);
            console.log("Vehiculo mas barato: " + modelos[vehiculoMasBaratoIndice][0] + " " + modelos[vehiculoMasBaratoIndice][1]);
            console.log("Vehículo que contiene en el modelo la letra 'Y': " + modelos[indiceVehiculoConY][0] + " " + modelos[indiceVehiculoConY][1] + " " + modelos[indiceVehiculoConY][3]);
        }