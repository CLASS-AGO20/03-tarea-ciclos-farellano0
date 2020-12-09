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
        let denominador = 1
        let i = 1/denominador;

        while(i >= 1/numero){
            suma = suma + i;
            denominador ++;

        }
        return suma;
    }


}

let app = new App();

console.log("Probando sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(15));

console.log("Probando sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(15));

