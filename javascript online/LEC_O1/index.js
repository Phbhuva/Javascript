const product = {
     name:"sari",
     ratings :4.2,
     Deal: true,
     mrp:2500,
     offer: 850,
};

for(let h in product){
    document.write('<br>'+h+':-'+product[h]);
 
}
document.write('<br>'+product["name"]);

const profile ={
        username:'harsh bhuva',
        isfollow:true,
        followers:789,
        follwing:500,

};
for(let h in profile){
    document.write('<br>'+h+':-'+profile[h]);
 
}
document.write('username type is :'+typeof(profile.username));
