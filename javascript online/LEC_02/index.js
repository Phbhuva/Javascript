let num =parseInt(prompt('enter is number'));

if(num%2 == 0){
    document.write( '5 number is a multiple of  ' +num);
    
}else{
    document.write(  '5 number is a not  multiple of  '+num);
}

let result=parseInt(prompt('Enter is Number(0-100)'));
let grades;

if(result >=90 && result<=100){
    grades='A';
}else if(result >=80 && result<=89){
    grades='B';
}else if(result >=70 && result<=79){
    grades='C';
}else if(result >=60 && result<=69){
    grades='D';
}else if(result >=50 && result<=59){
    grades='E';
}else if(result >=40 && result<=49){
    grades='F';
} 

document.write('<br>accroding to your result ,your grades was :  '+ grades);
