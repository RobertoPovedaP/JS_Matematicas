const PlatziMath={};
PlatziMath.calcularPromedio= function calcularPromedio(lista){
    let sumaLista=0;
    for(let i=0; i<lista.length; i++){
        sumaLista=sumaLista+lista[i];
    }
    const promedio=sumaLista/lista.length;
    return promedio;
}
PlatziMath.calcularPromedio2= function calcularPromedio2(lista){
    
    function sumarTodosElementos(valorAcumulado, newValor){
        return valorAcumulado + newValor;
    }
    
    const sumatoriaList=lista.reduce(sumarTodosElementos);
    const prom2=sumatoriaList/lista.length;
    console.log(prom2);
    return prom2;
}
PlatziMath.calcularPromedio3=function calcularPromedio3(lista){
    const sumaList2=lista.reduce((acum,valItem)=>acum+valItem);
    const prom3=sumaList2/lista.length;
    console.log(prom3);
    return prom3;
}
PlatziMath.isPair=function isPair(lista){
    //10%2= 0 esto equivale a false
    return !(lista.length%2);
}
PlatziMath.esImpar=function esImpar(lista){
    //10%2= 0 esto equivale a false
    return lista.length%2;
}
PlatziMath.calcularMediana=function calcularMediana(listaDesordenada){
    //ordenar el array de menor a mayor mediante función sort
    const lista=ordenarLista(listaDesordenada);
    
    let mediana;
    if(isPair(lista)){
        let num=[];
        num.push(lista[Math.floor(lista.length/2)]);
        num.push(lista[Math.floor(lista.length/2)-1]);
        mediana=calcularPromedio3(num);
    }else{
        //flor elimina los decimales
        mediana = lista[Math.floor(lista.length/2)];
    }
    return mediana;
}
PlatziMath.ordenarLista=function ordenarLista(lista){
    function ordenSort(valorAcumulado, nuevoValor){
        /*
        if(valorAcumulado>nuevoValor){
            return 1;
        }else if(valorAcumulado==nuevoValor){
            return 0;
        } else if(valorAcumulado<nuevoValor){
            return -1;
        }
        */
    return valorAcumulado-nuevoValor;
    // return 5-10 -> -5 (negativo)
    // return 5-5 -> 0 (cero)
    // return 10-5 -> +5 (positivo)

    }

    let ordenada= lista.sort(ordenSort);
    // con arrow function
    // let ordenada= lista.sort((valAcum,nuevoValor)=>valAcum-nuevoValor);
    return ordenada;
}
PlatziMath.calcularModa=function calcularModa(lista){
    const listaCount = {};
    
    for (let i=0; i<lista.length; i++){
        const elemento=lista[i];

        if(listaCount[elemento]){
            listaCount[elemento]+=1;
        }else{
            listaCount[elemento]=1;
        }
    }
    const listaArray=Object.entries(listaCount);
    const listaBiOrdenada = ordenarListaBidemensional(listaArray,1);

    const moda=listaBiOrdenada[(listaBiOrdenada.length)-1][0];
    console.log("la moda es: "+moda);
    return moda;
}
PlatziMath.ordenarListaBidemensional=function ordenarListaBidemensional(listaBiDesordenada, i){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista=listaBiDesordenada.sort(ordenarListaSort);
    return lista;
}