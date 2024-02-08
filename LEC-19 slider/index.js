let flag=0;


function slide(num){
    let slides=document.getElementsByClassName('slide');

    if(num == slides.length){
        // === jayare img pati jase tayare 0 thay jase ===//
            flag=0;
            num=0;

        //  aapdi pase o ochho thay jay tayre tena mate==//
    }if(num < 0){
        flag= slides.length-1;
        num= slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="block";
}
slide(flag);
function controller(x){
    flag = flag + x;
    slide(flag);
};