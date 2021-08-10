import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my new status';
  sw = true;

  constructor() {
    //Opera y recorre todo el arreglo, luego devuelve el array resultado
    const testMap = [1, 2, 3, 4, 5, 6].map(number => number * 2);
    console.log(testMap);

    //Opera sobre el array, mas no devuelve un arreglo
    const testForEach = [1, 2, 3, 4, 5, 6].forEach(number => number);
    console.log(testForEach);

    //Find a partir de un arreglo, se le pasa una funcion, devuelve el elemento que cumple la condicion de la funcion
    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 1);
    console.log(testFind);

    //Filter, sirve para filtrar, siempre devuelve el array
    const testFilter = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
    console.log(testFilter);

    //FindIndex, devuelve la posicion que estas buscando a partir de la busqueda del objeto. Devuelve la posicion del primer objeto que encuentre
    const testFindIndex = [1, 2, 3, 4, 5, 6].findIndex(item => item === 3);
    console.log(testFindIndex);

    //Parecido a FindIndex, solo que Tambien Trabaja con cadenas. Ademas, no buscas por funcion, sino simplemente pasando el valor
    const testIndexOf = [1, 2, 3, 4, 5, 6].indexOf(3);
    console.log(testIndexOf);

    //Join, une todo el array como una cadena
    const testJoin = [1, 2, 3, 4, 5, 6].join('/');
    console.log(testJoin);

    //Split, a partir de una cadena lo separa en un array indicando el parametro de separacion
    const testSplit = '1, 2, 3, 4, 5, 6'.split(', ');
    console.log(testSplit);

    //Splice, a partir de una posicion x, te quedas con y elementos
    const testSplice = [1, 2, 3, 4, 5, 6].splice(1, 3);
    console.log(testSplice);

    //reduce, recibe por defecto 4 parametros (previousValue, currentValue, currentIndex, Array), en este caso usaran 2 (previousValue, currentValue), recorre el array, opera los elementos y lo almacena en un acumulador. Luego de la funcion flecha, se puede dar el valor inicial del acumulador
    const testReduce = [1, 2, 3, 4, 5, 6].reduce(
      (acc, value) => acc * value,
      1
    );
    console.log(testReduce);

    //entries, trabaja con json, busca convertir el objeto json a un array (o matrices)
    const testEntries = {
      value: 'ricardo',
      key: 'RPC'
    };
    //console.log(Object.entries(testEntries));

    //keys, parecido a entries, pero solo trabaja con los keys
    const testKeys = {
      value: 'ricardo',
      key: 'RPC'
    };
    console.log(Object.keys(testKeys));

    //values, igual parecido a entries, solo trabaja con los values
    const testValues = {
      value: 'ricardo',
      key: 'RPC'
    };
    //console.log(Object.values(testValues));

    //Variable let, es una variable que solo se ejecuta dentro del entorno o contexto en el que se encuentra declarado o definido
    let testLet;

    //Spread operator (...ArrayName), nos permite copiar los elementos de un array a otro. Tambien funciona con json's
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1];
    console.log(array2);

    //Desectructuracion, saca partes de un objeto json (o de un arreglo) que se necesiten.
    const per3 = {
      name: 'a',
      age: 12,
      phone: 123,
      extra: 123,
      response: 200
    };

    const { name: miVariable, age } = per3;
    console.log(miVariable, ',', age);

    //Ejercicios
    //Ejercicio 1, convertir a un array y sumar los numeros pares

    const ej1 = Object.keys({ 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a' })
      .map(Number)
      .filter(item => item % 2 === 0)
      .reduce((acc, value) => acc + value);
    console.log('Ejercicio 1: ', ej1);

    //Ejercicio 2, filtrar los numeros impares y mostrarlos como cadena
    const ej2 = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 1).join(', ');
    console.log('Ejercicio 2:', ej2);
  }

  printDataRobertoComp(event: any) {
    console.log('Roberto Comp: ', event);
  }

  printFullName(event) {
    console.log('Full text: ', event);
  }
}
