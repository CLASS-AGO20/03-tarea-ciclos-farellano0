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

}

let app = new App();

console.log("Probando sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(15));

console.log("Probando sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(4));

console.log("Probando esPrimo");
console.log(app.esPrimo(97));

