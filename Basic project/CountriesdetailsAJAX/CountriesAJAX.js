// Make Ajax call

function makeAJaxCll(country){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://restcountries.com.v3.1/name/${country}`,true)
    xhr.send();
    return xhr;
}












function dispalyCountry(data){
    {
       

        
        
        let HTMLCode=`<div class="col-md-3">
                <div class="card">
                    <div class="card-header">
                        <img src="${data.flag.png}" alt="" class="img-fluid">
                    </div>
                    <div class="card-body text-center">
                        <h2>${data.name}</h2>
                        <h4>${data.capital} &#8377;</h4>
                        
                    </div>
                </div>
            </div>`
        }
        //console.log(eachProduct);
        document.getElementById('').innerHTML=eachProduct;
    }








function getData(country){

   let req_1 = makeAJaxCll('bharat');
   req_1.addEventListner('load',function()
   {
        let getCountry =JSON.parse(req_1.responseText);
        let [data] =getCountry;
        dispalyCountry(data);

        let req_2 = makeAJaxCll('bharat');
        req_2.addEventListner('load',function()
        {
            let getCountry =JSON.parse(req_2.responseText);
            let [data] =getCountry;
            dispalyCountry(data);
        }
   }
}
getData('bharat')
getData('poland')
getData('bhutan')
getData('russia') 