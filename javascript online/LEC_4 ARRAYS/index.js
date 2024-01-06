let student=[ 85,97,44,37,76,60];

let sum=0;
for(let val of student ){
    document.write('<br> student of mark : ' +val);
    sum=sum+val;
}
document.write('<br><br> total additons '+sum);

let avg= sum/ student.length;

document.write('<br> <br> student total avg : '+avg);

// ===== Q-2 ====== //

let item=[250,645,300,900,50]

let idx=0;
for(let _val of item ){
    document.write(`<br>value at index ${idx} = ${_val}  `);
    let offer=_val/10;
    item[idx]=item[idx]-offer
    document.write(`value after offer = ${item[idx]}`);   
    idx++;
}


// ==== q-3 ==========//

let companies=['bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

// for( let nam of companies){

//     document.write('<br> '+nam);   
// }
for(let i=0; i<companies.length; i++){

 document.write('<br> this is companies : '+companies[i]);      
}
companies.shift();
for(let i=0; i<companies.length; i++){
    
 document.write('<br><br> this is companies : '+companies[i]);      
}
companies.splice(2,1,'ola');
for(let i=0; i<companies.length; i++){
    
    document.write('<br><hr> this is companies : '+companies[i]);      
   }
companies.push('Amazon');
for(let i=0; i<companies.length; i++){
    
document.write('<br> this is companies : '+companies[i]);      
}
