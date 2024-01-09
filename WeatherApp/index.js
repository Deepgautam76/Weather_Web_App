
//this api use for the fetch the data of the weather related
//https://api.openweathermap.org/data/2.5/weather?q=kannauj&appid=de305a87f02b131e06a058c52a8ecffd



const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="
const apiKey="de305a87f02b131e06a058c52a8ecffd"

const searchBox=document.querySelector("#search input")
const searchBtn=document.querySelector(".searchbar button")
const Weather_Icons=document.querySelector(".weather-icon")

async function CheckWeather(city){
     let CityName="Akbarpur";
     if(city){
         CityName=city;
     }else{
        CityName=CityName;
     }
    // console.log(city)
    const response= await fetch(`${apiUrl}+${CityName}&appid=${apiKey}&units=metric`)
    const Data= await response.json();
    // console.log(Data)
    // console.log(Data.main)
    const Weather=Data.weather[0].main;
    // console.log(Weather)

    let Temp=document.getElementById("temp");
    let City=document.getElementById("city");
    let Humidity=document.getElementById("humidity");
    let WindSpeed=document.getElementById("wind-speed");
    // let Weathers=document.getElementById("weather-icon");
     
    Temp.innerHTML=Math.round(Data.main.temp)+"°C";
    City.innerHTML=Data.name;
    Humidity.innerHTML=Data.main.humidity+"%";
    WindSpeed.innerHTML=Data.wind.speed +" Km/h";

    // console.log(Data.name)
    // console.log(Data.weather[0].main)
    // console.log(Data.main.humidity)
    let checkW=Data.weather[0].main;
    if(checkW=="Clouds"){
        Weather_Icons.src="assets/clouds.png";
    }else if(checkW=="Clear"){
        Weather_Icons.src="assets/clear.png";
    }
    else if(checkW=="Rain"){
        Weather_Icons.src="assets/rain.png";
    }
    else if(checkW=="Mist"){
        Weather_Icons.src="assets/mist.png";
    }
    else if(checkW=="Drizzle"){
        Weather_Icons.src="assets/drizzle.png"
    }
}
document.addEventListener("click",()=>{
    CheckWeather(searchBox.value);
})


CheckWeather();


