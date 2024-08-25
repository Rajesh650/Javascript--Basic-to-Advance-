let btnTag = document.getElementById('product-btn')

function getProductsData(){

    // 1. create xmlHttp Request object

    let xhr = new XMLHttpRequest();

    // 2. create the request
    xhr.open('GET','products.json',true);

    // 3. send the request to server

    xhr.send();

    // In between sending request and getting response it may take some time

    xhr.onprogress = function()
    {
        let massageTag = document.getElementById('message');
        massageTag.innertext ="Data Loading...."
    }
    // once data is loaded sucessfully
    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText);
        let {productsArray}= data;
        console.log(productsArray);
    }
}
getProductsData();

function displayProducts(products) {
    if (products.length != 0) {
        let eachProduct = '';

        for (let item of products) {
            eachProduct += `<div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <img src="${item.img}" alt="" class="img-fluid">
            </div>
            <div class="card-body text-center">
                <h2>${item.name}</h2>
                <h4>${item.price} &#8377;</h4>
                <h5>
                    <i class="bi bi-dash-circle" onclick='decQty(${item.id})'></i>
                    <span>${item.qty}</span>
                    <i class='bi bi-plus-circle' onclick="incQty(${item.id})"></i>
                </h5>
            </div>
        </div>
    </div>`
        }
        //console.log(eachProduct);
        document.getElementById('display-products').innerHTML = eachProduct;
    }
}
displayProducts(items);