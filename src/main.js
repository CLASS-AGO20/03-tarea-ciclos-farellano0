export default class App {

    sumatoriaSerieUno(numero){
        let suma = 0;
        let denominador = 2;

        for(let i = 1; i >= 1/numero; i = 1/denominador ++) {
            suma = suma + i;
        }
        return suma;
    }
    sumatoriaSerieDos(numero){
        let suma = 0;
        let denominador = 2;
        let i = 1;

        while(i >= 1 / numero){
            
            if(denominador % 2 != 0 || i == 1){
                suma = suma + i;
            } else {
                suma = suma - i;
            }
            i = 1 / denominador++;
        }
        return suma;
    }
    esPrimo(numero){
        let i = numero;
        let prim = 0;
        let a = numero;

        do{
            if(a % i == 0){
                prim ++;
            }
            i--;
        } while (i >= 1);
        if(prim == 2){
            return true;
        } else {
            return false;
        }
    }
    obtenerMultiplos(inicio, fin){
        let i = inicio;
        let str = 0;

        do{
            if (i % 3 == 0){
                str = str + i;
                str = str.toString();
            }
            i++

        } while(i <= fin);
        return str;
    }
    obtenerImpares(numero1, numero2){
        let t;
        let imp = 0;
        if(numero2 > numero1){
            t = numero1;
            numero1 = numero2;
            numero2 = t;
        }
        for(let i = numero1; i >= numero2; i--){
            if(i % 2 != 0){
                imp = imp + i + ",";
                imp = imp.toString();
            }
        }
        return imp;
    }

}

let app = new App();

console.log("Probando sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(15));

console.log("Probando sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(4));

console.log("Probando esPrimo");
console.log(app.esPrimo(97));

console.log("Probando obtenerMultiplos()");
console.log(app.obtenerMultiplos(10,25));

console.log("Probando obtenerImpares");
console.log(app.obtenerImpares(10, 5));

