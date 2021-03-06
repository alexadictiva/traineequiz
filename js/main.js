 class auto {
        constructor(marca, model, puerta, precio) {
          (this.marca = marca),
            (this.model = model),
            (this.puerta = puerta),
            (this.precio = precio);
        }
      }

      var modelos = [
        ["Peugot", 206, 4, 200000],
        ["Honda", "Titan", "125cc", 60000],
        ["Peugot", 208, 5, 250000],
        ["Yamaha", "YBR", "160cc", 80500.5],
      ];

      function printLine() {
        console.log("========================================");
      }
      function printModels() {
        var modelo;
        for (i = 0; i < modelos.length; i++) {
          modelo = new auto(
            modelos[i][0],
            modelos[i][1],
            modelos[i][2],
            modelos[i][3]
          );
          if (typeof modelos[i][2] === "number") {
            console.log(
              "Marca: " +
                modelo.marca +
                " // Modelo: " +
                modelo.model +
                " // Puertas: " +
                modelo.puerta +
                " // Precio $" +
                modelo.precio
            );
          } else {
            console.log(
              "Marca: " +
                modelo.marca +
                " // Modelo: " +
                modelo.model +
                " // Cilindrada: " +
                modelo.puerta +
                " // Precio $" +
                modelo.precio
            );
          }
        }
      }

      printModels();
      printLine();

      var vehiculoMasCaroIndice;
      var montoMasCaro = modelos[0][3];
      for (i = 0; i < modelos.length; i++) {
        if (modelos[i][3] > montoMasCaro) {
          vehiculoMasCaroIndice = i;
          montoMasCaro = modelos[i][3];
        }
      }
      console.log(
        "Vehiculo más caro: " +
          modelos[vehiculoMasCaroIndice][0] +
          " " +
          modelos[vehiculoMasCaroIndice][1]
      );

      var vehiculoMasBaratoIndice;
      var montoMasBarato = modelos[0][3];
      for (i = 0; i < modelos.length; i++) {
        if (modelos[i][3] < montoMasBarato) {
          montoMasBarato = modelos[i][3];
          vehiculoMasBaratoIndice = i;
        }
      }
      console.log(
        "Vehiculo mas barato: " +
          modelos[vehiculoMasBaratoIndice][0] +
          " " +
          modelos[vehiculoMasBaratoIndice][1]
      );

      function modeloY() {
        for (i = 0; i < modelos.length; i++) {
          var estracto = Array.from(modelos[i][0]);
          //console.log(estracto.includes("Y"))
          if (estracto.includes("Y") === true) {
            console.log(
              "Vehiculo que contiene en el modelo la letra 'Y': " +
                modelos[i][0] +
                " " +
                modelos[i][1] +
                " " +
                modelos[i][3]
            );
          }
        }
      }
      modeloY();

      printLine();

      console.log("Vehículos ordenados por precios de mayor a menor:");

      var modelosDeMayorAMenorPrecio = modelos.sort(function (a, b) {
        return b[3] - a[3];
      });
      function printOrderedModels() {
        for (i = 0; i < modelos.length; i++) {
          console.log(modelos[i][0] + " " + modelos[i][1]);
        }
      }

      printOrderedModels();