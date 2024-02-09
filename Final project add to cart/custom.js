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
                                        <div class="cart1 d-flex justify-content-center align-items-center">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                        </div>
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
dispcat();