//Ejercicios con exctruturas respectivas anidada


//punto 8*
/* while
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

//for 8*

/*
var altura= parseInt(prompt("digite un numero"))
for(x=1; x <= altura; x++){
    document.write("<br>");
    for(y=1; x >= y; y++){
        document.write("*")
    }
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

//while 9*
/*
var altura = parseInt(prompt("digite un numero"));
var x = 1;
while (x <= altura){
    var y = altura;
    while (y >= x){
        document.write("*");
        y--;
    }
    document.write("<br>");
    x++;
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
/*
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
*/

//punto 11 while


/*var calificaciones = prompt("¿deseas calificar estudiante?");
var estudiante = 1
while (calificaciones == "si"){
    var nombreEstudiante = prompt("Digite el nombre del estudiante: "+estudiante)
    var nombreMateria = prompt("Digite el nombre de la materia: ");
    var Nnotas = parseInt(prompt("Cuantas notas desea calificar"));
    document.write("<h2>El nombre del estudiante es:"+nombreEstudiante+"</h2>");
    document.write("<h2>Asignatura:"+nombreMateria+"</h2>");
    var nota = 1;
    var sumaNotas = 0;
    
    while( nota <= Nnotas){
        var calificacion = parseFloat(prompt("Digite nota"+nota));
        sumaNotas = sumaNotas + calificacion;

        document.write("la nota"+nota+"es:"+calificacion+"<br>");
        nota++;
    }
    var promedioNotas = sumaNotas/Nnotas;
    document.write("<h2>El promedio es:"+promedioNotas+"</h2>");
    calificaciones = prompt("¿deseas calificar estudiante?");
    estudiante++;
}
document.write("numero de estudiantes calicados:"+estudiante);         
*/

//for 11
/*
var calificaciones = prompt("¿deseas calificar estudiantes?");
for(var estudiante=0; calificaciones!="no";estudiante++){
      var nombreEstudiante=prompt("Digite el nombre del estudiante");
      var nombreMateria = prompt("Digite nombre de la materia");
      var Nnotas = parseInt(prompt("Cuantas notas desea calificar "));
      document.write("<h2> El nombre del estudiante: " +nombreEstudiante+ "</h2>");
      document.write("<h3> Asignatura: " +nombreMateria+ "</h3>");
      var sumaNotas =0;
    for(var nota =1; nota <= Nnotas;){
        var calificacion = parseFloat(prompt("Digite nota " +nota));
        sumaNotas = sumaNotas+calificacion;
        document.write("la nota  "+ nota+ " es: " +calificacion+ " <br>")
        nota++;
    }
    var promedioNota= sumaNotas/Nnotas;
    document.write(" <h2> el promedio es " +promedioNota+ "</h2>");
    var calificaciones = prompt("¿Deseas calificar estudiantes?");
    
}
document.write("numero de estudiantes calificados"+estudiante);
*/

//punto 12
/* while
var filas = parseInt(prompt("Digite el numero de filas"));
var columnas = parseInt(prompt("Digite el numero de columnas"));
document.write("<table border='1'>");
var x= 1;
var numero =1;
while(x <= filas){
    document.write("<tr>");
    var y = 1;
    while(y <=columnas){
        document.write("<td>");
        document.write(numero++)
        document.write("</td>");
        y++;
    }
    document.write("<t/r>");
    x++;
}
document.write("</table>");
*/

//for 12
/*
var filas = parseInt(prompt("Digite el numero de filas"));
var columnas = parseInt(prompt("Digite el numero de columnas"));
document.write("<table border='1'>");
var numero =1;
for(var x=1; x<=filas; x++){
    document.write("<tr>");
    for(var y=1; y<=columnas;y++){
        document.write("<td>");
        document.write(numero++);
        document.write("</td>");
    }
    document.write("</tr>")
}
    
*/
//punto 13
/*
var numeroEstudiantes =parseInt(prompt("Digite numero de estudiantes"));
var mayores = 0;
var edadesMayores = "";
var menores = 0;
var edadesMenores = "";
for (x= 1; x<=numeroEstudiantes; x++){
    var edades = parseInt(prompt("Digite la edad de los estudiantes"+x));
    if(edades >= 18){
        mayores++;
        edadesMayores = edadesMayores + edades + " ";
    }else{
            menores++
            edadesMenores = edadesMenores + edades +" ";
        }
    }
document.write("Estudiantes mayores: "+mayores+"<br>");
document.write("Edades: "+edadesMayores+"<br>");
document.write("Estudiantes menores "+menores+"<br>");
document.write("Edades "+edadesMenores+"<br>");

*/

//while
var numeroEstudiantes =parseInt(prompt("Digite numero de estudiantes"));
var mayores = 0;
var edadesMayores = "";
var menores = 0;
var edadesMenores = "";
var x= 1;
while( x<=numeroEstudiantes){
    var edades = parseInt(prompt("Digite la edad de los estudiantes"+x));
    if(edades >= 18){
        mayores++;
        edadesMayores = edadesMayores + edades + " ";
    }else{
            menores++
            edadesMenores = edadesMenores + edades +" ";
        }
     x++;
    }

document.write("Estudiantes mayores: "+mayores+"<br>");
document.write("Edades: "+edadesMayores+"<br>");
document.write("Estudiantes menores "+menores+"<br>");
document.write("Edades "+edadesMenores+"<br>");