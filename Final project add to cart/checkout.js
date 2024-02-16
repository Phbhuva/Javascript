const GST_RATE = 0.18; // Assuming GST rate is 18%

const checkout = () => {
    let tr = "";
    let data = JSON.parse(localStorage.getItem("cartDetail"));
    let subtotal = 0;
    let totalGST = 0;

    if (data != null) {
        data.forEach((p, index) => {
            tr += `
                <tr>
                    <th scope="row">
                        <div class="d-flex align-items-center">
                            <img src="${p.image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
                        </div>
                    </th>
                    <td>
                        <p class="mb-0 mt-4 ca-text3">${p.name}</p>
                    </td>
                    <td>
                        <p class="mb-0 mt-4 ca-text4">${p.price}</p>
                    </td>
                    <td>
                        <div class="input-group quantity mt-4" style="width: 100px;">
                            <div class="input-group-btn">
                                <button class="btn btn-sm btn-minus rounded-circle bg-light border" onclick="decrement(${index})">
                                    <i class="fa fa-minus"></i>
                                </button>
                            </div>
                            <input id="quantity-${index}" type="text" class="form-control form-control-sm text-center border-0" value="${p.qty}">
                            <div class="input-group-btn">
                                <button class="btn btn-sm btn-plus rounded-circle bg-light border" onclick="increment(${index})">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p id="total-${index}" class="mb-0 mt-4 ca-text4">${p.qty * p.price}</p>
                    </td>
                    <td>
                        <button class="btn btn-md rounded-circle bg-light border mt-4" onclick="removeItem(${index})">
                            <i class="fa fa-times text-danger"></i>
                        </button>
                    </td>
                </tr>`;
            subtotal += p.qty * p.price;
        });

        totalGST = subtotal * GST_RATE;
        let totalAmount = subtotal + totalGST;

        tr += `
            <tr>
                <td colspan="5" class="text-end">Subtotal:</td>
                <td id="subtotal">${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="5" class="text-end">GST (18%):</td>
                <td id="totalGST">${totalGST.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="5" class="text-end">Total:</td>
                <td id="totalAmount">${totalAmount.toFixed(2)}</td>
            </tr>`;
    }

    document.getElementById("checkout").innerHTML = tr;
};

function increment(index) {
    let quantityElement = document.getElementById(`quantity-${index}`);
    let quantity = parseInt(quantityElement.value);
    quantity++;
    quantityElement.value = quantity;
    updateTotal(index, quantity);
}

function decrement(index) {
    let quantityElement = document.getElementById(`quantity-${index}`);
    let quantity = parseInt(quantityElement.value);
    if (quantity > 1) {
        quantity--;
        quantityElement.value = quantity;
        updateTotal(index, quantity);
    }
}

function updateTotal(index, quantity) {
    let data = JSON.parse(localStorage.getItem("cartDetail"));
    let totalPrice = quantity * data[index].price;
    document.getElementById(`total-${index}`).innerText = totalPrice;

    // Update the quantity in the localStorage
    data[index].qty = quantity;
    localStorage.setItem("cartDetail", JSON.stringify(data));

    // Recalculate subtotal and update it
    let subtotal = data.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
    let totalGST = subtotal * GST_RATE;
    let totalAmount = subtotal + totalGST;
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("totalGST").innerText = totalGST.toFixed(2);
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}

function removeItem(index) {
    let data = JSON.parse(localStorage.getItem("cartDetail"));
    data.splice(index, 1);
    localStorage.setItem("cartDetail", JSON.stringify(data));
    checkout();
}

checkout(); // Call the checkout function to initially populate the cart
