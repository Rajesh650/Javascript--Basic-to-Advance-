const button = document.getElementById("search-btn")
const input = document.getElementById("city-input")

const cityName = document.getElementById("cityName")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f9195ba4e55e4384a6225218241608&q=${cityName}&aqi=no`

    )
    return await promise.json()
}


button.addEventListener("click",async()=>{
    
    const value = input.value

    const result = await getData(value);
    
    cityName.innerText = `${result.location.name}, ${result.location.region} , ${result.location.country}`,
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
})