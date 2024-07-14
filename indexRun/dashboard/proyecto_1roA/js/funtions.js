
/*const btnCMat = document.getElementById("resMultiMat2");
btnCMat.onclick = ()=>{
    crearMatriz(document.getElementById('fila').value),document.getElementById('filaColum');
}
const matA= ['gracias','genial','numeros'];

 */   

/*let x=23,y=10;
function genial(y,x){
    let c=x+y;
    return(c);
}
;*/

 /*
 * section para generar la matriz  */

 /* var matz=Document.getElementById('inputDetermin').value; 


   function llenarMatrizRandom(F){
    let M=[];
		for(let i=0;i<F; i++){
			
				M[i] = 12+i;
                
        }
        return(M[5])
	}
;
 */

function mostrarMat(){
    var M=[];
        /* var k=document.getElementById('matrizRes').value; */
		for(let i=0;i<15; i++){
			
			for(let j=0;j<15; j++){
			
				/*M[i] = Math.floor(Math.random()*10);*/
			    M[i] = document.getElementById("A"+i+j).value;
                
            }
        }
        
        return(M);
	}

/* 
function crearMatriz(priFil,priCol){
    var d=document.getElementById("matrizRes");
    var ele=document.createElement("div");

    matrizRes.innerHTML="";
    for(let i=0; i<priFil; i++){
            
            for(let j=0; j<priCol; j++){

                matA[i][j]= parseInt(document.getElementById('A'+i+""+j).value); //*?gurada el valor que hay en la posision A00

            }
        var elem=document.createElement('br'); 
        elem.className='ln';
    }
    d.appendChild(ele);
    return(matA)
} */
/**
             * crea una matriz cuadrada
             * @param {integer} size dimension de la matriz
             * */
 /* function createMatriz(size){
    var matriz = new Array(size);
    for (i = 0; i < size ; i++){ 
      matriz[i]=new Array(size); 
    } 
    return matriz;
} */

/**
 * calcula el determinante de una matriz NxN
 * @param {array} matriz matriz a calcular
 * */
/* function determinante(matriz){                                
    if(matriz.length==2){
        var det=(matriz[0][0]*matriz[1][1])-(matriz[1][0]*matriz[0][1]);
        return det;
    }               
    var suma = 0;
    for(var i = 0; i<matriz.length; i++){
        var nm = createMatriz(matriz.length-1);
        for(var j=0; j<matriz.length; j++){
            if(j!=i){
                for(var k=1; k<matriz.length; k++){
                    var indice=-1;
                    if(j<i)
                        indice=j;
                    else if(j>i)
                        indice=j-1;
                    nm[indice][k-1] = matriz[j][k];
                }
            }
        }
        if(i%2==0){                            
            suma += matriz[i][0] * determinante(nm);                            
        }                            
        else{                            
            suma -= matriz[i][0] * determinante(nm);
        }                        
    }
    return suma;
} */

/* function printMatriz(matriz){
    for(var i=0; i<matriz.length; i++){
        document.write("[ ");
        for(var j=0; j<matriz.length; j++){
            document.write(matriz[i][j].toPrecision(precision) + " ");
        }   
        document.write(" ]<br/>");            
    }
} */

/* ---------------------------------- */            
/* var precision = 5; */
/*
var m = createMatriz(3);            
m[0][0]=1;m[0][1]=0.3;m[0][2]=0.5;
m[1][0]=0;m[1][1]=1;m[1][2]=0.5;
m[2][0]=-0.1;m[2][1]=0.7;m[2][2]=1;
*/

//definimos matriz y datos
/* var m = createMatriz(4);            
m[0][0]=0.3;m[0][1]=2.3;m[0][2]=3.3;m[0][3]=2;
m[1][0]=4;m[1][1]=5.4;m[1][2]=6;m[1][3]=3;
m[2][0]=9;m[2][1]=8;m[2][2]=2;m[2][3]=0.01;
m[3][0]=1;m[3][1]=0.1;m[3][2]=0.2;m[3][3]=3;
 */
//calculamos y mostramos en pantalla

/* document.write("Matriz <br/>");
printMatriz(m);
var d = determinante(m);
document.write("determinante = " + d.toPrecision(precision) + "<br/>");
 */
document.getElementById("rad-check1").addEventListener("click", iniciarSesion);
document.getElementById("rad-check2").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);
//declaracion de VARIABLES

var contenedor_login_register = document.querySelector(".contenedor__login-register");

var formulario__login= document.querySelector("#cuerpo");
var formulario__register = document.querySelector(".formulario__register");

/* var caja__trasera_login= document.querySelector(".caja__trasera-login");
var caja__trasera_register= document.querySelector(".caja__trasera-register");
 */
function anchoPagina(){
    if(window.innerWidth > 850){
        caja__trasera_login.style.display="block"
        caja__trasera_register.style.display="block"
    }else{
        caja__trasera_register.style.display="block"
        caja__trasera_register.style.opacity="1"
        caja__trasera_login.style.display="none"
        formulario__login.styele.display="block"
        formulario__register.style.display="none"
        contenedor_login_register.style.left="0px"
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth> 850){
        formulario__register.style.display= "none";
        contenedor_login_register.style.left="10px";
        formulario__login.style.display= "block";
        /* caja__trasera_register.style.opacity = "1";
        caja__trasera_login.style.opacity = "0";   */
    }
    else{
        formulario__register.style.display= "none";
        contenedor_login_register.style.left="0px";
        formulario__login.style.display= "block";
        /* caja__trasera_register.style.display = "block";
        caja__trasera_login.style.display = "none"; */
    }

    
}

function register(){

    if(window.innerWidth > 850){
        formulario__register.style.display= "block";
        contenedor_login_register.style.left="410px";
        formulario__login.style.display= "none";
        caja__trasera_register.style.opacity = "0";
        caja__trasera_login.style.opacity = "1"; 
    }
    else{
        formulario__register.style.display= "block";
        contenedor_login_register.style.left="0px";
        formulario__login.style.display= "none";
        caja__trasera_register.style.display = "none";
        caja__trasera_login.style.display = "block";
        caja__trasera_login.style.opacity = "1";
    }
    
}
/*
?emfdjv
!frhttf8gtyughyuogitft  borrar eduardo entonces a partir de esto trabajamos
!
!esto es parar comentarios

*/