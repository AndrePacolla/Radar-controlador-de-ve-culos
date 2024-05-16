// Velocidade máxima de até 70;
// A cada 5km a cima do limite permitido ,condutor irá receber 1 ponto na CNH;
// Math.floor();
// Caso os pontos excedem 12 -> 'Carteira Suspendida';


function verificarVelocidade(){

    let car = 140;

    if(car <= 70){
        console.log('velocidade permitida')
    }
    else{
       let points = Math.floor((car - 70) / 5)

       if(points >= 12){
           console.log(`${points} (pontos) Carteira Suspensa !`)
       }else{
        console.log(`${points} Pontos`)
       }
    }
};


verificarVelocidade();
