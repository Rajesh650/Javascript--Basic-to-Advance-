let item_1={id:101,img:"https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-492654-sm-s921bzycins-thumb-539572832?$264_264_PNG",name:"Samsung Mobile",price:60000,qty:1};

let item_2={id:102,img:"https://www.cnet.com/a/img/resize/acf94e6aea50ddd21a02628ed7735123adbc7dd4/hub/2012/11/30/733a4ce7-6797-11e3-846b-14feb5ca9861/ipod-classic-5262.jpg?auto=webp&width=768",name:"Ipod",price:20000,qty:1};


let item_3={id:103,img:"https://skinsy.in/wp-content/uploads/2022/03/Apple-iWatch-Series-3.png",name:"Apple Watch",price:40000,qty:1};


let items=[item_1,item_2,item_3];

//display products
function displayProducts(products)
{
    if(products.length!=0)
    {
        let eachProduct='';

        for(let item of products)
        {
            eachProduct+=`<div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <img src="${item.img}" alt="" class="img-fluid">
                    </div>
                    <div class="card-body text-center">
                        <h2>${item.name}</h2>
                        <h4>${item.price} &#8377;</h4>
                        <h5>
                            <i class="bi bi-dash-circle" onclick="decQty(${item.id})" )></i>
                            <span>${item.qty}</span>
                            <i class="bi bi-plus-circle" onclick="incQty(${item.id})"></i>
                        </h5>
                    </div>
                </div>
            </div>`
        }
        //console.log(eachProduct);
        document.getElementById('display-products').innerHTML=eachProduct;
    }
}
displayProducts(items);


//Increment Functionality
function incQty(id)
{
    let filteredArr=items.map(function(item)
    {
        if(item.id===id)
        {
            let obj={...item,qty:++item.qty,
            price:item.price * item.qty};
            return obj;
        }
        else 
        {
            return item;
        }
    });



    displayProducts(filteredArr);
}

// decrement functionality
function decQty(id)
{
    let filteredArr=items.map(function(item)
    {
        if(item.id===id)
        {
            let obj={...item,qty:--item.qty,
                price : item.price * item.qty
            };return obj;
        }

        else 
        {   
            return item;
        }
    });

    displayProducts(filteredArr);
}

