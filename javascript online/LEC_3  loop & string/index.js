 //Q-1 //
for(let i=0; i<=100; i++){

    if(i%2 === 0){
            document.write('<br> Even number '+i);
            
    }
}
// Q-2 //
let gamNub=30;
let UserNum=(prompt('guess the game number : '))

while(gamNub != UserNum ){
    UserNum=(prompt('You entered wrong number. guess again : '))
}
document.write('congratulations, you enterd  the  right  number ');

// == Q-3 ==  //

let name =(prompt('Enter your name without space :'));

document.write(`@${name}${name.length}`);
