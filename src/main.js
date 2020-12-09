export default class App {

    sumatoriaSerieUno(numero){
        let suma = 0;
        let denominador = 2;

        for(let i = 1; i >= 1/numero; i = 1/denominador ++) {
            suma = suma + i
            console.log(suma)
        }
        return suma;
    }

}

let app = new App();

console.log(app.sumatoriaSerieUno(15));
