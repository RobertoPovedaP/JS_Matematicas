
const btn=document.querySelector('#calcular');

btn.addEventListener('click',calcularPrecioConDescuento);

const objCupones={
    'rapp001': 5,
    'rapp2023': 10,
    'goku666': 15,
    'rich09': 20,
    'uhm69': 25,
};

const ArrayCupones=[];
ArrayCupones.push({
    name: 'goku',
    discount: 5,
    limit: 500
});

ArrayCupones.push({
    name: 'vegeta',
    discount: 10,
    limit: 600
});


const pResult= document.querySelector('#result');

function calcularPrecioConDescuento(){
    const inputPrecio= document.querySelector('#price');
    const inputCoup=document.querySelector('#coupon');
    

    price=Number(inputPrecio.value);
    coupon=inputCoup.value;

    if(!price || !coupon){ 
        pResult.innerHTML='No se puede obtener precio final poque no ha ingresado ni el precio ni el código del cupón';
    } else{
        //validarCupon(price, coupon);

        //función para el caso de un objeti llave: valor
        //aplicarCupon(price, coupon);
        
        const cuponValidado= ArrayCupones.find(isCuponInArray); //devuelve el objeto
        if (cuponValidado){
            let descNew= cuponValidado.discount;
            let precioFinal= (price)*((100-(descNew))/100);
            pResult.innerText = 'El precio final con descuento es de: $'+ precioFinal;
        }
        else{
            pResult.innerHTML='Cupón no válido';

        }
    }

   
}

 function isCuponInArray(itemArray){
            //itemArray es cada uno de los elementos del ArrayCupones
            //Recordar que los elementos de ArrayCupones son objetos {name, dicount, limit}
            const inputCoup=document.querySelector('#coupon');
            coupon=inputCoup.value;
            return itemArray.name == coupon;

        }
   

/*
   function aplicarCupon(precio, codigo){
    if(objCupones[codigo]){
        let descuento = objCupones[codigo];
        let precioFinal= (precio)*((100-(descuento))/100);
        pResult.innerText = 'El precio final con descuento es de: $'+ precioFinal;
    } else{
        pResult.innerHTML='Cupón no válido';
    }
   }
*/
    /*
    function validarCupon(pri, coup){
        for (key in listaCupones) {
            if(coup === key){
                    const descuento = listaCupones[key];
                    const precioFinal= (pri)*((100-(descuento))/100);
                    pResult.innerText = 'El precio final con descuento es de: $'+ precioFinal;                 
                }else{
                    pResult.innerHTML='Cupón no válido';
                }
        }                
    }
    */



    


        


