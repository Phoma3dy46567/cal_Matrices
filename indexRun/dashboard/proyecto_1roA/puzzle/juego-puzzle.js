

let matrix=shuffleMatrix();

/* let matrix = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','','8'],
] */


let board= document.querySelector('.board');
let counterMove = 0;
let countLevel=1;
drawTokens();
addEventListeners();
searchPosition();

const btnReiniciar= document.getElementById("btnreiniciar");
btnReiniciar.onclick = ()=>{
    counterMove = 0
    document.getElementById('valorMove').textContent = counterMove
    countLevel= 1
    document.getElementById('nivel').textContent = countLevel;
    matrix=shuffleMatrix();
    drawTokens();
    addEventListeners();
    searchPosition();
    
}
document.getElementById('nivel').textContent = countLevel;
function drawTokens(){
    board.innerHTML='';
    matrix.forEach(row => row.forEach(element=> {

        if(element== ''){
            board.innerHTML+= ` <div class='empty'>${element}</div>`
        }else{
            board.innerHTML += ` <div       class='token'>${element}</div>`
        }
    }))
}

function addEventListeners(){
    let tokens =document.querySelectorAll('.token')
    tokens.forEach(token => token.addEventListener('click', ()=>{  
        let actualPosition = searchPosition(token.innerText);

        let emtyPosition = searchPosition('')
        let movement = canItMove(actualPosition, emtyPosition)
        
        if(movement !== false){
            upDateMatrix(token.innerText, actualPosition, emtyPosition)

            let result= compareMatrix();
            if(result === true){
                confetti({
                    particleCount: 400,
                    spread: 150
                    
                  });
                
                  //SIGUENTE NIVEL
                setTimeout(()=>{
                    countLevel++
                    document.getElementById('nivel').textContent = countLevel;
                    counterMove=0
                    matrix=shuffleMatrix();
                    drawTokens();
                    addEventListeners();
                    searchPosition();
                },3000)
                
            }
            drawTokens();
            addEventListeners();
            
        }

    }))
}

function searchPosition(element){
    let rowIndex=0;
    let columIndex=0;
    matrix.forEach((row, index) => {
        let rowElement = row.findIndex(item => item == element)
        if(rowElement!==-1){
            rowIndex = index;
            columIndex = rowElement;
        }
    } )
    return [rowIndex, columIndex];
} 

function canItMove(actualPosition, emtyPosition){
    if(actualPosition[1]==emtyPosition[1]){
        if(actualPosition[0]- emtyPosition[0] > 1 || actualPosition[0]- emtyPosition[0] < -1){
            return false
         }
    }else if(actualPosition[0]== emtyPosition[0]){
        if(actualPosition[1]- emtyPosition[1]> 1 || actualPosition[1]- emtyPosition[1] < -1){
            return false
         }
    }  
    else {
        return false
     }
}
function upDateMatrix(element, actualPosition, emtyPosition){
    matrix[actualPosition[0]][actualPosition[1]]='';
    matrix[emtyPosition[0]][emtyPosition[1]]=element;
  
}
function shuffleMatrix(){
    let shuffleMatrix=  [
        [],
        [],
        []
    ]
    let array = ['1','2','3','4','5','6','7','8','']
    array.sort(()=>Math.random()*10-5)
    let colum
    let row
    let indexArray=0
    for(row=0;row<3;row++){
        for(colum=0;colum<3;colum++){
            shuffleMatrix[row][colum]= array[indexArray]
            indexArray++;
        }
    } 
    return shuffleMatrix;
}

function compareMatrix(){
    counterMove++
    document.getElementById('valorMove').textContent = counterMove
    let counter=0;
    let finalMatrix = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8',''],
    ]
    matrix.forEach((row, indexRow) => {
        row.forEach((element, indexColum) => {
            if(element == finalMatrix[indexRow][indexColum]){
                counter++
            }
        })
    })
    console.log(counter)
    if(counter == 9){
        return true;
    }else{
        return false;
    }
    
}



