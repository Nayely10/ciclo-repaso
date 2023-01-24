//Ejercicios con exctruturas respectivas anidada


//punto 8*
/*
var altura = parseInt(prompt("Digite un numero"));
var x = 1;
while (x <= altura){
    var y = 1
    while (x >= y){
        document.write("*");
        y++
    }
    document.write("<br>");
    x++;
}
 */

//punto 9*
/*
var altura = parseInt(prompt("Digiteun numero"));
for (x=1; x< altura; x++){
    for(y=1; y <= x; y++){
        document.write("*");
    }
    document.write("<br>");
}
*/

//punto 10* while
/*
var compra = prompt("¿cuantos productos desea comprar?");
var con = 1;
var npro = 0;
var totalcompra = 0;
while( compra != "no"){
    document.write("<p> Cliente" +con+ "<p/>");
    document.write("<p> Numero de productos" +compra+ "<p/>");
    var con2 = 1;
    var totalpro = 0;
    while(con2 <= parseInt (compra )){
        var valorPro =parseInt(prompt("Digite el valor del producto" +con2))
        document.write("<p> el valor del producto" +con2+ ":"+valorPro+"</p>")
        totalpro = totalpro + valorPro;
        con2++;
        npro++
    }
    totalcompra = totalcompra + totalpro;
    document.write("<p> Total de la compra :"+totalpro+"</p>");
    compra = prompt("¿cuantos productos desea comprar?");
    con++
    
} 
document.write("<p> Numero de compras en el dia:"+npro+"</p>");
document.write("<p> Numero de compras en el dia:"+totalcompra +"</p>");
*/



//for
var compra = prompt("¿cuantos productos desea comprar?");
var totalcompra = 0;
var npro = 0;
for(var con= 1; compra != "no"; con++){
    document.write("<p> Cliente" +con+ "<p/>");
    document.write("<p> Numero de productos" +compra+ "<p/>");

    var totalpro = 0;
    for(var con2 = 1; con2 <= parseInt(compra ); con2++){
        var valorPro =parseInt(prompt("Digite el valor del producto" +con2))
        document.write("<p> el valor del producto" +con2+ ":"+valorPro+"</p>")
        totalpro = totalpro + valorPro;
        npro++
    }
    totalcompra = totalcompra + totalpro;
    document.write("<p> Total de la compra :"+totalpro+"</p>");
    compra = prompt("¿cuantos productos desea comprar?");
}
document.write("<p> Numero de productos en el dia:"+npro+"</p>");
document.write("<p> Total de compras en el dia:"+totalcompra +"</p>");
