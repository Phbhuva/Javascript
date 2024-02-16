const dispcat = () =>{
    let tr = "";
    let pr= "";
    let data = JSON.parse(localStorage.getItem("catInfo"));
    let productData = JSON.parse(localStorage.getItem("prodInfo"));

    if(data != null){
        data.map((i)=>{
            tr +=`
            <li class="nav-item">
                <a class="d-flex m-2 py-2 bg-light rounded-pill ${i.id==1?'active':''}" data-bs-toggle="pill" href="#tab-${i.id}">
                    <span class="text-dark ne-text-all" style="width: 130px;">${i.catname}</span>
                </a>
            </li>`;

            pr+=`<div id="tab-${i.id}" class="tab-pane fade show p-0 ${i.id==1?'active':''}">
            <div class="row g-4">
                <div class="col-lg-12">
                    <div class="row g-4">`
            productData.map((p)=>{
                    if(p.cid == i.id){
                        pr +=`
                        <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                            <img src="${p.image}" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div class="new d-flex justify-content-between">
                                    <p class="ne-text2">${p.name}</p>
                                    <div class="star">
                                        <i class="fa-solid fa-star st" style="color: #000000;"></i>
                                        <i class="fa-solid fa-star st" style="color: #000000;"></i>
                                        <i class="fa-solid fa-star st" style="color: #000000;"></i>
                                        <i class="fa-solid fa-star st" style="color: #868686;"></i>
                                        <i class="fa-solid fa-star st" style="color: #868686;"></i>
                                    </div>
                                </div>
                                <div class="cart d-flex justify-content-between align-items-besline mt-2">
                                    <p class="ne-text3">${p.price}</p>
                                        <button class="cart1 d-flex justify-content-center align-items-center" onclick='addToCart(${p.id})'>
                                                <i class="fa-solid fa-cart-shopping"></i>
                                        </button>
                                </div>
                        </div>`
     
                    };
            });
            pr+=`</div>
                    </div>
                </div>
            </div>` 
        });
    };
    document.getElementById('allcat').innerHTML = tr;  
    document.getElementById("productlist").innerHTML= pr;
};
let cartData = [];
const addToCart = (id) => {
    let productData = JSON.parse(localStorage.getItem("prodInfo"));
    let cart = JSON.parse(localStorage.getItem("cartDetail"));
    let len = cart != null ? cart.length + 1 : 1;
    let info = {}
    let qty = 1;

    productData.forEach(i => {
        if (i.id == id) {
            info.id = len;
            info.name = i.name;
            info.price = i.price;
            info.cid = i.cid;
            info.pid = id;
            info.image = i.image;
            info.qty = qty;
        }
    });
    if (cart != null) {
        let dt = cart.filter((i) => {
            return i.pid == id
        });
        if(dt.length>0){
            cart.forEach((i)=>{
                if(i.pid==id){
                    i.qty=i.qty+1;
                }
            });
        } else{
            cart.push(info);
        }
        localStorage.setItem( "cartDetail", JSON.stringify(cart));
    } else {
        cartData.push(info);
        localStorage.setItem( "cartDetail", JSON.stringify(cartData));

    }
}
dispcat();