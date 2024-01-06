function dispdata(){
    const el = newevent('myfevent')
    document.addEventListener(myfevent = () =>{
        let a=document.getElementById('name').value;
        document.write('---'+a);
        
    })
    document.dispatchEvent(el)
}

const displaydata =()=>{
    const e2 = new customevent (displaydata ; {
            detail:{
                name:'harsh bhuva';
                roll_no:1;
                age:23;
            }
    })
}