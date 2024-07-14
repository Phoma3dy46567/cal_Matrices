
const btnG = document.getElementById("generaB");
btnG.onclick = ()=>{
    creatabla() & creatabla2() & newSumaMatriz();
}
/***********************************************************
 *!-------------creamos la funcion creando tabla de la SUMA Y RESTA------------ 
*************************************************************/
function creatabla(){
    let conG = 0;
    var d=document.getElementById("idCuerpo");
    var ele=document.createElement("table");
    var nf=document.getElementById("txt1").value;
    var nc=document.getElementById("txt1").value;
    idCuerpo.innerHTML="";
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    var text=document.createElement("input");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conG;
                    text.id ="txtEn1"+conG;
                    celda.appendChild(text);
                    conG ++ 
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);
    }
function creatabla2(){   
    let conG2 = 0;
    var d=document.getElementById("idCuerpo2");
    var ele=document.createElement("table");
    var nf=document.getElementById("txt1").value;
    var nc=document.getElementById("txt1").value;
    idCuerpo2.innerHTML="";
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    var text=document.createElement("input");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conG2;
                    text.id ="txtEn2"+conG2;
                    celda.appendChild(text);
                    conG2++  
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);
    }
function newSumaMatriz(){   
    let conRes = 0;
    var d=document.getElementById("idResSuma");
    var ele=document.createElement("table");
    var nf=document.getElementById("txt1").value;
    var nc=document.getElementById("txt1").value;
    idResSuma.innerHTML="";
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    var text=document.createElement("P");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conRes;
                    text.id ="resMat"+conRes;
                    celda.appendChild(text);
                    conRes++    
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);   
    }

    const btnRandomSR= document.getElementById("llenarRamdomSumRes");
    btnRandomSR.onclick = ()=>{
        llenarRanSumRes();
    }
function llenarRanSumRes(){
        var matz=document.getElementById('txt1').value;
        var TM=matz*matz;
        var matriz = new Array(TM);
        var matriz2 = new Array(TM);
        for (i = 0; i < TM ; i++){ 
            matriz[i]= Math.floor(Math.random()*(10)-5);
            document.getElementById('txtEn1'+i).value=matriz[i];
        } 
        for (j = 0; j < TM ; j++){ 
            matriz2[j]= Math.floor(Math.random()*(10)-4)
            document.getElementById('txtEn2'+j).value=matriz2[j];
        }  
        return matriz;
    }

const btnSum = document.getElementById("SumaMat");
btnSum.onclick = ()=>{
    respuestaSumar();
}
const btnRes = document.getElementById("restaMat");
btnRes.onclick = ()=>{
    respuestaRestar();
}
//*TODO: esta es para MUMAR matrices
    function respuestaSumar(){
        for(let i=0;i<(Math.pow(document.getElementById("txt1").value,2) );i++) {
            let a=parseInt(document.getElementById('txtEn1'+i).value );
            let b=parseInt(document.getElementById('txtEn2'+i).value);
            document.getElementById('resMat'+i).textContent =a+b;     
        }
    }
//*TODO: esta es para RESTAR matrices
    function respuestaRestar(){
        for(let i=0;i<(Math.pow(document.getElementById("txt1").value,2) );i++) {
            let a=parseInt(document.getElementById('txtEn1'+i).value );
            let b=parseInt(document.getElementById('txtEn2'+i).value);
            document.getElementById('resMat'+i).textContent =a-b;
        }  
    }

/*************************************
 *! ----creamos la funcion creando tabla para la MULTIPLICACION------------
  ***************************************/
 const btnM = document.getElementById("generarMulti");
 btnM.onclick = ()=>{
    creatablaMultiplicacion() & creatablaMultiplicacion2() & resultadoMultiplicacion();
 }
 function creatablaMultiplicacion(){
     let conM = 0;
     var d=document.getElementById("idMultiMatriz1");
     var ele=document.createElement("table");
     var nf=document.getElementById("fila").value;
     var nc=document.getElementById("filaColum").value;
     idMultiMatriz1.innerHTML="";
         for(f=0;f<=nf;f++)
         {
             var fila=ele.insertRow(f);
             for(c=0;c<nc;c++)
             {
                 var celda=fila.insertCell(c);
                 if(f<nf)
                 {
                     celda.fila=f;
                     celda.colu=c;
                     var text=document.createElement("input");
                     text.className="caja-2";
                     text.type="number";
                     text.name="txtEn"+conM;
                     text.id ="A"+f+""+c;
                     celda.appendChild(text);
                     conM ++    
                 }
                 else
                 {
                     celda.innerHTML=" ";
                 }    
             }
         }
         d.appendChild(ele);
     }
function creatablaMultiplicacion2(){   
     let conM2 = 0;
     var d=document.getElementById("idMultiMatriz2");
     var ele=document.createElement("table");
     var nf=document.getElementById("filaColum").value;
     var nc=document.getElementById("colum").value;
     idMultiMatriz2.innerHTML="";
    
         for(f=0;f<=nf;f++)
         {
             var fila=ele.insertRow(f);
             for(c=0;c<nc;c++)
             {
                 var celda=fila.insertCell(c);
                 if(f<nf)
                 {
                     celda.fila=f;
                     celda.colu=c;
                     var text=document.createElement("input");
                     text.className="caja-2";
                     text.type="number";
                     text.name="txtEn"+conM2;
                     text.id ="B"+f+""+c;
                     celda.appendChild(text);
                     
                     conM2++  
                 }
                 else
                 {
                     celda.innerHTML=" ";
                 }    
             }
         }
         d.appendChild(ele);
         conM2 = 0
     }
function resultadoMultiplicacion(){   
    let ResMult = 0;
    var d=document.getElementById("idResulMulti");
    var ele=document.createElement("table");
    var nf=document.getElementById("fila").value;
    var nc=document.getElementById("colum").value;
    idResulMulti.innerHTML="";
   
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    var text=document.createElement("p");
                    text.className="caja-2";
                    text.type="number";
                    text.name="multi"+ResMult;
                    text.id ="R"+ResMult;
                    celda.appendChild(text);
                    ResMult++    
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);  
}
const btnRandMultip= document.getElementById("llenarRamdomMulti");
btnRandMultip.onclick = ()=>{
        llenarRandMultip();
    }
    function llenarRandMultip(){
        var matzF=document.getElementById('fila').value;
        var matzFC=document.getElementById('filaColum').value;
        var matzC=document.getElementById('colum').value;
        
        var matriz = new Array(matzF*matzFC);
        var matriz2 = new Array(matzFC*matzC);
        
        for (i = 0; i < matzF ; i++){ 
            for (j = 0; j < matzFC ; j++){ 
                matriz[i]= Math.floor(Math.random()*(10)-4);
                document.getElementById('A'+i+''+j).value=matriz[i];
            }
        }
        for (i = 0; i < matzFC ; i++){ 
            for (j = 0; j < matzC ; j++){ 
                matriz2[j]= Math.floor(Math.random()*(10)-5);
                document.getElementById('B'+i+''+j).value=matriz2[j];
            }
        }  
        return matriz;
    }
const btnRM = document.getElementById("resMultiMat1");
 btnRM.onclick = ()=>{
       respuestaMultiplicar();  
 }
function respuestaMultiplicar(){
    let valor1 = 0;
    let prim=parseInt(document.getElementById('colum').value); //3
    let segun=parseInt(document.getElementById('fila').value); //2
    let terce=parseInt(document.getElementById('filaColum').value); //1
    for(let i=0; i<segun; i++){
        for(let k=0; k<prim; k++){
            let suMaR=0;
            for(let j=0; j<terce; j++){
                let x = parseInt(document.getElementById('A'+i+''+j).value); //*?gurada el valor que hay en la posision A00
                let y = parseInt(document.getElementById('B'+j+""+k).value); //*?gurada el valor que hay en la posision B00
                suMaR=suMaR+((x)*(y)); //*? A00 * B00 + R00 
            }
            document.getElementById('R'+valor1).textContent=suMaR;
            valor1++;
        }
    }  
}

//*!--------cremao las funciones para allar la matriz DETERMINANTE***********

const btnMDet = document.getElementById("generarDeterminate");
btnMDet.onclick = ()=>{
    creatablaDetermin() & matrizIncrementDet() & resultadoDetermin();
}
function creatablaDetermin(){
    let conDetMat = 0;
    var d=document.getElementById("creaMatrizDeterm");
    var ele=document.createElement("table");
    var nf=document.getElementById("inputDetermin").value;
    var nc=document.getElementById("inputDetermin").value;
    creaMatrizDeterm.innerHTML="";
    
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    /*----------- */
                    var text=document.createElement("input");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conDetMat;
                    text.id ="D"+f+""+c;
                    celda.appendChild(text);
                    conDetMat ++
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);
        conDetMat = 0;
    }  
function matrizIncrementDet(){
        let conDetMat = 0;
        var d=document.getElementById("matIncrementofilas");
        var ele=document.createElement("table");
        var nf=parseInt(document.getElementById("inputDetermin").value);
        nf=(nf+(nf-1))
        var nc=parseInt(document.getElementById("inputDetermin").value);
        matIncrementofilas.innerHTML="";
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                        /*----------- */
                    var text=document.createElement("p");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conDetMat;
                    text.id ="MA"+f+""+c;
                    celda.appendChild(text);
                    conDetMat ++
                }
                else
                {
                        celda.innerHTML=" ";
                }    
            }
        }
            d.appendChild(ele);
            conDetMat = 0;
        }
function resultadoDetermin(){    
let resDetMat= 0;
   var d=document.getElementById("ResultadomatrizDet");
   var ele=document.createElement("table");
   var nf=1;
   var nc=1;
   ResultadomatrizDet.innerHTML="";
       for(f=0;f<=nf;f++)
       {
           var fila=ele.insertRow(f);
           for(c=0;c<nc;c++)
           {
               var celda=fila.insertCell(c);
               if(f<nf)
               {
                   celda.fila=f;
                   celda.colu=c;
                   var text=document.createElement("p");
                   text.className="caja-2";
                   text.type="number";
                   text.name="multi"+resDetMat;
                   text.id ="Re"+resDetMat;
                   celda.appendChild(text);
                   resDetMat++   
               }
               else
               {
                   celda.innerHTML=" ";
               }    
           }
       }
       d.appendChild(ele); 
}
const btnRanDeter= document.getElementById("llenarRamdomDeter");
btnRanDeter.onclick = ()=>{
    createMatrizRandomDet();
}
function createMatrizRandomDet(){
   var matzF=document.getElementById('inputDetermin').value;
   var matzC=document.getElementById('inputDetermin').value;
   var matriz = new Array(matzF*matzC);
   var conta=0;
   for (i = 0; i < matzF ; i++){ 
       for (j = 0; j < matzC; j++){ 
           matriz[conta]= Math.floor(Math.random()*(10)-4)
           document.getElementById('D'+i+''+j).value=matriz[conta];
           conta++;
         }  
   } 
   return matriz;
}
const btnDetResult = document.getElementById("matDeterm");
btnDetResult.onclick = ()=>{
    resultadoDeterminante();
}
function resultadoDeterminante(){
    /* llenamos la matriz aumentando */

    let prim=parseInt(document.getElementById('inputDetermin').value); //3
    let i;
    for(i=0; i<prim; i++){
    
        for(let j=0; j<prim; j++){
            
            let x =(document.getElementById('D'+i+''+j).value); //*?gurada el valor que hay en la posision A00
            document.getElementById('MA'+i+''+j).textContent=x;
            
        }
    }
    let val1 = 0;
    for(i=i; i<prim+(prim-1); i++){
    
        for(let j=0; j<prim; j++){
                
            let x =(document.getElementById('D'+val1+''+j).value); //*?gurada el valor que hay en la posision A00
            document.getElementById('MA'+i+''+j).textContent=x;  
        }
        val1++;
    }

    /* creamos la operacion */
    let rest=0;
    
    var suma1=0
    let co=-1
    for(p=0;p<prim;p++){
        let multi=1;
        co++
        for(k=0;k<prim;k++){
            
               let A=parseInt(document.getElementById('MA'+co+''+k).textContent);
                multi=multi*A;
            if(co==(prim-1)){
                co=-1;
            }
            co++;  
        }
        suma1=suma1+multi;
    }
    let suma2=0
    let co2=-1;
    for(p=0;p<prim;p++){
        let multi2=1;
        co2++
        for(k=(prim-1);k>=0;k--){
            
               let A=parseInt(document.getElementById('MA'+co2+''+k).textContent);
                multi2=multi2*A;

            if(co2==(prim-1)){
                co2=-1;
            }
            co2++;  
        }
        suma2=suma2+multi2;
    }
    document.getElementById('Re0').textContent=(suma1-suma2)
    return rest;
}

//*!--------cremao las funciones para allar la matriz TRANSPUESTA***********

const btnMTans = document.getElementById("generarMatTrans");
btnMTans.onclick = ()=>{
    creatablaTranspuesta() & resultadotranspuesta();
}

function creatablaTranspuesta(){
    let conM = 0;
    var d=document.getElementById("idMatrizTrans");
    var ele=document.createElement("table");
    var nf=document.getElementById("filaTrans").value;
    var nc=document.getElementById("columTrans").value;
    idMatrizTrans.innerHTML="";
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    var text=document.createElement("input");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conM;
                    text.id ="Tr"+f+""+c;
                    celda.appendChild(text);
                    conM ++ 
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);
    }

function resultadotranspuesta(){   
    let ResMult = 0;
   var d=document.getElementById("idResultTrans");
   var ele=document.createElement("table");
   var nf=document.getElementById("columTrans").value;
   var nc=document.getElementById("filaTrans").value;
   idResultTrans.innerHTML="";
       for(f=0;f<=nf;f++)
       {
           var fila=ele.insertRow(f);
           for(c=0;c<nc;c++)
           {
               var celda=fila.insertCell(c);
               if(f<nf)
               {
                   celda.fila=f;
                   celda.colu=c;
                   var text=document.createElement("p");
                   text.className="caja-2";
                   text.type="number";
                   text.name="multi"+ResMult;
                   text.id ="Rtsp"+f+''+c;
                   celda.appendChild(text);
                   ResMult++
               }
               else
               {
                   celda.innerHTML=" ";
               }    
           }
       }
       d.appendChild(ele); 
}
const btnTrnspuesta= document.getElementById("llenarRamdomtransp");
btnTrnspuesta.onclick = ()=>{
   createMatrizRandom();
}
function createMatrizRandom(){
   var matzF=document.getElementById('filaTrans').value;
   var matzC=document.getElementById('columTrans').value;
   var matriz = new Array(matzF*matzC);
   var conta=0;
   for (i = 0; i < matzF ; i++){ 
       for (j = 0; j < matzC; j++){ 
           matriz[conta]= Math.floor(Math.random()*(10)-5);
           document.getElementById('Tr'+i+''+j).value=matriz[conta];
           conta++;
         }  
   } 
   return matriz;
}
const btntransResul = document.getElementById("generMatzTrans");
btntransResul.onclick = ()=>{
    respuestatranspuesta();
}
function respuestatranspuesta(){
   let valor = 0;
   let prim=parseInt(document.getElementById('filaTrans').value); //3
   let segun=parseInt(document.getElementById('columTrans').value); //2

   for(let i=0; i<prim; i++){
          
           for(let j=0; j<segun; j++){
               let x = parseInt(document.getElementById('Tr'+i+''+j).value);
               (document.getElementById('Rtsp'+j+""+valor).textContent)=x; 
           }  
           valor++;
   }  
}

//*!--------cremao las funciones para allar la matriz INVERSA***********

const btnMInversa = document.getElementById("generarinversa");
btnMInversa.onclick = ()=>{
    creatablaInversa() & crearMIdentidadInversa() & crearMatrizIdentidad() &crearMatrzResult2()& crearMatzRes1();
}

function creatablaInversa(){
    let conG = 0;
    var d=document.getElementById("creaMatrizinversa");
    var ele=document.createElement("table");
    var nf=document.getElementById("inputInversa").value;
    var nc=document.getElementById("inputInversa").value;
    creaMatrizinversa.innerHTML="";
    
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    var text=document.createElement("input");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conG;
                    text.id ="In"+f+''+c;
                    celda.appendChild(text);
                    conG ++
                    
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);
        
    }
function crearMIdentidadInversa(){   
    let conG2 = 0;
    var d=document.getElementById("creaMatrizinversaIdent");
    var ele=document.createElement("table");
    var nf=document.getElementById("inputInversa").value;
    var nc=document.getElementById("inputInversa").value;
    creaMatrizinversaIdent.innerHTML="";
   
        for(f=0;f<=nf;f++)
        {
            var fila=ele.insertRow(f);
            for(c=0;c<nc;c++)
            {
                var celda=fila.insertCell(c);
                if(f<nf)
                {
                    celda.fila=f;
                    celda.colu=c;
                    // celda.onmouseover=function(){pintar(this,this.fila,this.colu)}
                    // celda.onmouseout=function(){despintar(this,this.fila,this.colu)}
                    // celda.onclick=function(){suma(ele,this.fila,this.colu)};
                    //celda.innerHTML=f;
                    var text=document.createElement("p");
                    text.className="caja-2";
                    text.type="number";
                    text.name="txtEn"+conG2;
                    text.id ="InID"+f+''+c;
                    celda.appendChild(text);
                    
                    conG2++  
                }
                else
                {
                    celda.innerHTML=" ";
                }    
            }
        }
        d.appendChild(ele);
    }
function crearMatrizIdentidad(){
        let valor = 0;
        let prim=parseInt(document.getElementById('inputInversa').value); //3
        
        for(let i=0; i<prim; i++){
               
                for(let j=0; j<prim; j++){

                    if(i==j){
                       (document.getElementById('InID'+i+''+j).textContent)=1;   
                    }else{
                        (document.getElementById('InID'+i+''+j).textContent)=0;
                    }   
                }  
        }  
    }


function crearMatzRes1(){   
        let conG2 = 0;
        var d=document.getElementById("preResult1");
        var ele=document.createElement("table");
        var nf=document.getElementById("inputInversa").value;
        var nc=document.getElementById("inputInversa").value;
        nc=nc*2
        preResult1.innerHTML="";
       
            for(f=0;f<=nf;f++)
            {
                var fila=ele.insertRow(f);
                for(c=0;c<nc;c++)
                {
                    var celda=fila.insertCell(c);
                    if(f<nf)
                    {
                        celda.fila=f;
                        celda.colu=c;
                        var text=document.createElement("p");
                        text.className="caja-2";
                        text.type="number";
                        text.name="txtEn"+conG2;
                        text.id ="ResID"+f+''+c;
                        celda.appendChild(text);
                        
                        conG2++  
                    }
                    else
                    {
                        celda.innerHTML=" ";
                    }    
                }
            }
            d.appendChild(ele);
    }
function crearMatrzResult2(){   
            let conG2 = 0;
            var d=document.getElementById("preResult2");
            var ele=document.createElement("table");
            var nf=document.getElementById("inputInversa").value;
            var nc=document.getElementById("inputInversa").value;
            nc=nc*2
            preResult2.innerHTML="";
                for(f=0;f<=nf;f++)
                {
                    var fila=ele.insertRow(f);
                    for(c=0;c<nc;c++)
                    {
                        var celda=fila.insertCell(c);
                        if(f<nf)
                        {
                            celda.fila=f;
                            celda.colu=c;
                            var text=document.createElement("p");
                            text.className="caja-2";
                            text.type="number";
                            text.name="txtEn"+conG2;
                            text.id ="resSig"+f+''+c;
                            celda.appendChild(text);
                            conG2++  
                        }
                        else
                        {
                            celda.innerHTML=" ";
                        }    
                    }
                }
                d.appendChild(ele);
     }


const btnRandInversa= document.getElementById("llenarRamdomInversa");
btnRandInversa.onclick = ()=>{
    llenarRandInversa();
   }
function llenarRandInversa(){
       
       var matzFC=document.getElementById('inputInversa').value;
       
       var matriz = new Array(matzFC*matzFC);
       
       for (i = 0; i < matzFC ; i++){ 
           for (j = 0; j < matzFC ; j++){ 
               matriz[i]= Math.floor(Math.random()*(10));
               document.getElementById('In'+i+''+j).value=matriz[i];
           }
       }
        
       return matriz;
   }

/* operaciones */

const btnMInver = document.getElementById("matrzInversa");
btnMInver.onclick = ()=>{
    generarMatrizInversa();   
}
/* 
function resultadoDeterminDif0(){
    /* llenamos la matriz aumentando *

    let prim=parseInt(document.getElementById('inputInversa').value); //3
    let i;
    let gValor;
    for(i=0; i<prim; i++){
    
        for(let j=0; j<prim; j++){
            
           ('gValor'+''+i+''+j) =(document.getElementById('In'+i+''+j).value); 
            
            
        }
    }
    let val1 = 0;
    for(i=i; i<prim+(prim-1); i++){
    
        for(let j=0; j<prim; j++){
                
            let x =(document.getElementById('D'+val1+''+j).value); //*?gurada el valor que hay en la posision A00
            document.getElementById('MA'+i+''+j).textContent=x;  
        }
        val1++;
    }

    /* creamos la operacion *
    let rest=0;
    var suma1=0
    let co=-1
    for(p=0;p<prim;p++){
        let multi=1;
        co++
        for(k=0;k<prim;k++){
            
               let A=parseInt(document.getElementById('MA'+co+''+k).textContent);
                multi=multi*A;
            if(co==(prim-1)){
                co=-1;
            }
            co++;  
        }
        suma1=suma1+multi;
    }
    let suma2=0
    let co2=-1;
    for(p=0;p<prim;p++){
        let multi2=1;
        co2++
        for(k=(prim-1);k>=0;k--){
            
               let A=parseInt(document.getElementById('MA'+co2+''+k).textContent);
                multi2=multi2*A;

            if(co2==(prim-1)){
                co2=-1;
            }
            co2++;  
        }
        suma2=suma2+multi2;
    }
    document.getElementById('Re0').textContent=(suma1-suma2)
    return rest;
} */
function generarMatrizInversa(){
    /* llenamos la matriz aumentando */

    let prim=parseInt(document.getElementById('inputInversa').value); //3
    let i;
    for(i=0; i<prim; i++){
    
        for(let j=0; j<prim; j++){
            
            let x=(document.getElementById('In'+i+''+j).value);
            (document.getElementById('ResID'+i+''+j).textContent)=x;
        }
    }
    for(k=0; k<prim; k++){
        let val1 = i;
        
        for(let j=0; j<prim; j++){
            
            let x=(document.getElementById('InID'+k+''+j).textContent);
            (document.getElementById('ResID'+k+''+val1).textContent)=x;
            
            val1++;
        }
    }
}
/* EL PASO 1 CONVERTIR EN CERO  */
const btnSig = document.getElementById("sigResultInversa");
btnSig.onclick = ()=>{
    completarMatz(parseInt(document.getElementById('inputInversa').value)) & genSiguenteRes() ; 
}
function completarMatz(prim){
    for(let f=0;f<=0;f++){
        for(let c=0;c<(prim*2);c++){
            (document.getElementById('resSig'+f+''+c).textContent)=(document.getElementById('ResID'+f+''+c).textContent);
        } 
    }
}
    

function genSiguenteRes(){
   let valor1 = 0;
   let prim=parseInt(document.getElementById('inputInversa').value); //3

   for(co=0;co<prim*2;co++){

        for(let i=0; i<prim-1; i++){
            let g=i+1;
            if(i==co){
                
                var kr=0;
                var x = parseInt(document.getElementById('ResID'+i+''+kr).textContent); 
            }
            let div,div2,res;
            let y = parseInt(document.getElementById('ResID'+g+''+kr).textContent); 
        
            
            for(k=0; k<(prim*2); k++){
                let ah=0;
                let m = parseInt(document.getElementById('ResID'+(ah)+''+k).textContent); 
                let n = parseInt(document.getElementById('ResID'+(g)+''+k).textContent); 
                
                div=m*(y);
                let r2=x*(-1);
                div2=n*(r2);
                res=div+div2;

            console.log(div);
            console.log(div2);
            console.log('r '+res);
            (document.getElementById('resSig'+g+''+k).textContent)=(res);  
            
            }
            
            /* let valg=0
            for(j=k; j<prim; j++){
                let y = parseInt(document.getElementById('InID'+i+''+j).value); 
                console.log(y)
                div=y*x;
                document.getElementById('ResID'+g+''+j).textContent =div;  
                console.log(div);
                valg++;
            } */

    /*    }
    for(let i=1; i<2; i++){
        let x = parseInt(document.getElementById('In'+i+''+k).value); 
        for(let k=0; k<prim; k++){
            let y = parseInt(document.getElementById('In'+i+''+k).value); 
            let divEnsi=y/x;
            
        } */
        }

   }
   
}

/**
             * crea una matrizzzzz cuadrada
             * @param {integer} size dimension de la matriz
             * */
/*  const btnRandom= document.getElementById("matDeterm");
 btnDetM.onclick = ()=>{
    leerCreateMatriz();
 } */
/* ** *copiar la matriz de de los imput */ 
 function leerCreateMatriz(){
    var matz=document.getElementById('inputInversa').value;
    var matriz = new Array(Math.pow(matz,2));
    var conta=0;
    for (i = 0; i < matz ; i++){ 
        let j;
        for (j = 0; j < matz ; j++){ 
            matriz[conta]=document.getElementById('In'+i+''+j).value; 
            conta++;
        }
        let conz=0;
        for (k = 0; k < matz ; k++){ 
            matriz[conta]=document.getElementById('In'+i+''+k).value; 
            conta++;
        }
    } 
    return matriz;
}
/* 
const btnDetM = document.getElementById("matDetegrm");
btnDetM.onclick = ()=>{
    createMatriz();
} 
function crearMatIdentidad(){
    var matz=document.getElementById('inputDetermin').value;
    var matriz = new Array(Math.pow(matz,2));
    var conta=0;
    for (i = 0; i < matz ; i++){ 
        for (j = 0; j < matz ; j++){ 
            if(i==j){
                matriz[conta]=1;
            }
            conta++;
          }  
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
}

function printMatriz(matriz){
    for(var i=0; i<matriz.length; i++){
        document.write("[ ");
        for(var j=0; j<matriz.length; j++){
            document.write(matriz[i][j].toPrecision(precision) + " ");
        }   
        document.write(" ]<br/>");            
    }
}
 */
/* ---------------------------------- */            
var precision = 5;
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

//calculamos y mostramos en pantalla
document.write("Matriz <br/>");
printMatriz(m);
var d = determinante(m);
document.write("determinante = " + d.toPrecision(precision) + "<br/>");

 */

/**
 * esta es la segunda seccion
 */
    /*const btnR = document.getElementById("resSumaMat");
    btnR.onclick = ()=>{
        resultadoSuma();
    }

        
        const sumaRes = document.getElementById("resSumaMat");
        sumaRes.onclick = ()=>{
            let total = 0;
            for (let index = 0; index < conG; index++) {
                

                total = parseInt(total) + parseInt(document.getElementById("txtEn"+index).value)
                  
            }
            alert(total)
        } */
/**cremos la funcion para sumar elementos de una matriz */
/*
const sumaBM = document.getElementById("sumaM");
sumaBM.onclick = ()=>{
    let total = 0;
    for (let index = 0; index < conG; index++) {
        
        total = parseInt(total) + parseInt(document.getElementById("txtEn"+index).value)
          
    }
    alert(total)
} 
*/
const sumarMatriz=document.getElementById

function pintar(obj,fi,co)
{
    obj.style.cursor="pointer";
    obj.style.background="#f00";
}

function despintar(obj,fi,co)
{
    obj.style.background="#fff";
}

function suma(obj,fila,colu)
{
    var suma=0;
    for(f=0;f<obj.rows.length-1;f++)
    {
       
        if(obj.rows[f].cells[colu].firstChild.checked==true)
        {
            suma=suma*1+1;
        }   
    }
    obj.rows[obj.rows.length-1].cells[colu].innerHTML=suma;  
}
/**
 * let sumar=a+b
 * 
 * 
 * FUNCION DE MOSTARR MATRIZZZZ
 */
function mostarMatriz(M,F,C){

    for(i=0;i<F; i++){
        for(j=0; j<C;j++){
            M[i][j] = (int)(Math.random()*10);
        }
    }
}

function gaussJordan(matrix) {
    // Obtiene el número de filas y columnas de la matriz
    var rows = matrix.length;
    var cols = matrix[0].length;
  
    // Verifica si la matriz es cuadrada
    if (rows !== cols) {
      throw new Error('La matriz debe ser cuadrada para tener inversa');
    }
  
    // Crea la matriz identidad del mismo tamaño que la matriz original
    var identity = createIdentityMatrix(rows);
  
    // Agrega la matriz identidad a la derecha de la matriz original para formar una matriz ampliada
    var augmented = matrix.map(function (row, i) {
      return row.concat(identity[i]);
    });
  
    // Aplica el algoritmo de eliminación de Gauss para convertir la matriz ampliada en una matriz diagonal
    var diagonal = gaussElimination(augmented);
  
    // Verifica si el determinante de la matriz original es diferente de cero
    if (determinant(matrix) === 0) {
      throw new Error('La matriz no tiene inversa');
    }
  
    // La matriz inversa es la parte derecha de la matriz diagonal resultante
    var inverse = diagonal.map(function (row) {
      return row.slice(cols);
    });
  
    return inverse;
  }
  
  function gaussElimination(matrix) {
    // Obtiene el número de filas y columnas de la matriz
    var rows
  

//*?este es otro codigo

function gaussJordan(matrix) {
    // Obtener el tamaño de la matriz
    const n = matrix.length;
    // Crear una copia de la matriz original para no modificarla
    const a = matrix.map(row => row.slice());
    // Crear la matriz identidad para el resultado final
    const result = createIdentityMatrix(n);
    // Realizar eliminación gaussiana
    for (let i = 0; i < n; i++) {
      // Encontrar el elemento pivot y hacer intercambios si es necesario
      let pivot = i;
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(a[j][i]) > Math.abs(a[pivot][i])) {
          pivot = j;
        }
      }
      if (pivot !== i) {
        [a[i], a[pivot]] = [a[pivot], a[i]];
        [result[i], result[pivot]] = [result[pivot], result[i]];
      }
      // Hacer ceros en la columna i
      for (let j = i + 1; j < n; j++) {
        const factor = a[j][i] / a[i][i];
        for (let k = i; k < n; k++) {
          a[j][k] -= factor * a[i][k];
        }
        for (let k = 0; k < n; k++) {
          result[j][k] -= factor * result[i][k];
        }
      }
    }
    // Realizar eliminación gauss-jordan
    for (let i = n - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        const factor = a[j][i] / a[i][i];
        for (let k = i; k < n; k++) {
          a[j][k] -= factor * a[i][k];
        }
        for (let k = 0; k < n; k++) {
          result[j][k] -= factor * result[i][k];
        }
      }
    }
    // Dividir cada fila por su elemento pivot
    for (let i = 0; i < n; i++) {
      const pivot = a[i][i];
      for (let j = 0; j < n; j++) {
        result[i][j] /= pivot;
      }
    }
    return result;
  }
  
  // Función para crear la matriz identidad de tamaño n
  function createIdentityMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push([]);
      for (let j = 0; j < n; j++) {
       /*  matrix[i][j] = (i === */


        }
    }
}
}


//*?esta es otro codigo




function inverse(matrix) {
    let matriz =[]
    for(let h=0;h<matrix;h++){
        for(let f=0;f<matrix;f++){
            
            matriz [h][f]= Math.random()*10;
            
        }
        
    }
    
    
    const n = matrix.length;
    const augmented = matrix.map(row => [...row, ...Array(n).fill(0)]);
    
    for (let i = 0; i < n; i++) {
        augmented[i][i + n] = 1;
    }
    
    for (let i = 0; i < n; i++) {
        let pivot = augmented[i][i];
        for (let j = 0; j < 2 * n; j++) {
            augmented[i][j] /= pivot;
        }
        
        for (let k = 0; k < n; k++) {
            if (k === i) continue;
            let factor = augmented[k][i];
            for (let j = 0; j < 2 * n; j++) {
                augmented[k][j] -= factor * augmented[i][j];
            }
        }
    }
    
    return augmented.map(row => row.slice(n));
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(matrix);


















function mostrarInicio(){
    document.getElementById('inicioPrincipal').style.display= '';
    document.getElementById('cuerpo').style.display='none';
    document.getElementById('cuerpoMul').style.display='none';
    document.getElementById('selecMenu1').style.background="rgba(137, 212, 244, 0.191)";
    document.getElementById('selecMenu2').style.background="";
    document.getElementById('selecMenu3').style.background="";
    document.getElementById('selecMenu4').style.background="";
    document.getElementById('selecMenu5').style.background="";
    document.getElementById('selecMenu6').style.background="";

    document.getElementById('cuerpoDeterminant').style.display='none';
    document.getElementById('cuerpoTranspuesta').style.display='none';
    document.getElementById('matzz_inversa').style.display='none';
}

function sumaresta(){
    document.getElementById('sumaResta')
    sumaResta.innerHeight='';
    document.getElementById('inicioPrincipal').style.display='none';
    document.getElementById('cuerpo').style.display='';
    document.getElementById('selecMenu1').style.background="";
    document.getElementById('selecMenu2').style.background="rgba(137, 212, 244, 0.191)";
    document.getElementById('selecMenu3').style.background="";
    document.getElementById('selecMenu4').style.background="";
    document.getElementById('selecMenu5').style.background="";
    document.getElementById('selecMenu6').style.background="";

    document.getElementById('cuerpoMul').style.display='none';
    document.getElementById('cuerpoDeterminant').style.display='none';
    document.getElementById('cuerpoTranspuesta').style.display='none';
    document.getElementById('matzz_inversa').style.display='none';
}
function mostrarMultiplicacion(){
    document.getElementById('inicioPrincipal').style.display= 'none';
    document.getElementById('selecMenu1').style.background="";
    document.getElementById('selecMenu2').style.background="";
    document.getElementById('selecMenu3').style.background="rgba(137, 212, 244, 0.191)";
    document.getElementById('selecMenu4').style.background="";
    document.getElementById('selecMenu5').style.background="";
    document.getElementById('selecMenu6').style.background="";

    document.getElementById('cuerpo').style.display='none';
    document.getElementById('cuerpoMul').style.display='';
    document.getElementById('cuerpoDeterminant').style.display='none';
    document.getElementById('cuerpoTranspuesta').style.display='none';
    document.getElementById('matzz_inversa').style.display='none';
}
function mostrarDeterminante(){
    document.getElementById('inicioPrincipal').style.display= 'none';
    document.getElementById('cuerpo').style.display='none';
    document.getElementById('selecMenu1').style.background="";
    document.getElementById('selecMenu2').style.background="";
    document.getElementById('selecMenu3').style.background="";
    document.getElementById('selecMenu4').style.background="rgba(137, 212, 244, 0.191)";
    document.getElementById('selecMenu5').style.background="";
    document.getElementById('selecMenu6').style.background="";

    document.getElementById('cuerpoMul').style.display='none';
    document.getElementById('cuerpoDeterminant').style.display='';
    document.getElementById('cuerpoTranspuesta').style.display='none';
    document.getElementById('matzz_inversa').style.display='none';
}
function mostrarTranspuesta(){
    document.getElementById('inicioPrincipal').style.display= 'none';
    document.getElementById('cuerpo').style.display='none';
    document.getElementById('cuerpoMul').style.display='none';
    document.getElementById('selecMenu1').style.background="";
    document.getElementById('selecMenu2').style.background="";
    document.getElementById('selecMenu3').style.background="";
    document.getElementById('selecMenu4').style.background="";
    document.getElementById('selecMenu5').style.background="rgba(137, 212, 244, 0.191)";
    document.getElementById('selecMenu6').style.background="";

    document.getElementById('cuerpoDeterminant').style.display='none';
    document.getElementById('cuerpoTranspuesta').style.display='';
    document.getElementById('matzz_inversa').style.display='none';
}
function mostrarInversa(){
    document.getElementById('inicioPrincipal').style.display= 'none';
    document.getElementById('cuerpo').style.display='none';
    document.getElementById('cuerpoMul').style.display='none';
   document.getElementById('selecMenu1').style.background="";
    document.getElementById('selecMenu2').style.background="";
    document.getElementById('selecMenu3').style.background="";
    document.getElementById('selecMenu4').style.background="";
    document.getElementById('selecMenu5').style.background="";
    document.getElementById('selecMenu6').style.background="rgba(137, 212, 244, 0.191)";

    document.getElementById('cuerpoDeterminant').style.display='none';
    document.getElementById('cuerpoTranspuesta').style.display='none';
    document.getElementById('matzz_inversa').style.display='';
}
