let temp=document.getElementById("temp");
let cityName=document.getElementById("Currentcity");
let realFeel=document.getElementById("realFeel");
let windSpeed=document.getElementById("windSpeed");
let humidity=document.getElementById("humidity");
let rainchance=document.getElementById('rainchance');
let heatindex=document.getElementById('heatindex');
let twevle_am=document.getElementById('twevle_am');
let ten_am=document.getElementById('ten_am');
let twevle_pm=document.getElementById('twevle_pm');
let four_pm=document.getElementById('four_pm');
let nine_pm=document.getElementById('nine_pm');
let elven_pm=document.getElementById('elven_pm');
let wed=document.getElementById('wed');
let mon=document.getElementById('mon');
let tue=document.getElementById('tue');
let Eachforecast=document.getElementById('Eachforecast');
let firstimg=document.getElementById('firstimg');
let secondimg=document.getElementById('secondimg');
let thirdimg=document.getElementById('thirdimg');
let fourthimg=document.getElementById('fourthimg');
let fifthimg=document.getElementById('fifthimg');
let siximg=document.getElementById('siximg');
let mainimg=document.getElementById('mainimg');
let dayNames=document.getElementsByClassName('dayName');
let sevens=document.getElementsByClassName('seven');
let infos=document.getElementsByClassName('info');
let sunrise=document.getElementById('sunrise');
let sunset=document.getElementById('sunset');




let date=new Date();
let day=date.getDay();
function getDay(num){
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[num];
}
let k=day;
for(let i=0;i<3;i++){
    if(k>6){
        k=0;
    }
    dayNames[i].innerText=getDay(k);
    k++;
}

let city='Udupi';
document.getElementById("Searchbutton").addEventListener("click",(e)=>{
    city=document.getElementById("search12").value;
    weatherApi()
})

function weatherApi(){
    let url=`https://api.weatherapi.com/v1/forecast.json?key=a0a567f8b9614c7eba934811240908&q=${city}&days=7`;
    axios.get(url)
            .then(response => {
                const data = response.data;
                temp.innerHTML = `${Math.round(data.current.temp_c)}<sup>o</sup>`;
                cityName.innerText = data.location.name;
                realFeel.innerHTML = `${Math.round(data.current.feelslike_c)}<sup>o</sup>`;
                windSpeed.innerHTML = `${data.current.wind_kph} Km/hrs`;
                humidity.innerHTML = `${data.current.humidity}`;
                rainchance.innerHTML=`Chance of rain:${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
                heatindex.innerHTML = `${(data.current.heatindex_c)}<sup>o</sup>`;
                twevle_am.innerHTML = `${(data.forecast.forecastday[0].hour[0].temp_c)}<sup>o</sup>`;
                ten_am.innerHTML = `${(data.forecast.forecastday[0].hour[10].temp_c)}<sup>o</sup>`;
                twevle_pm.innerHTML = `${(data.forecast.forecastday[0].hour[12].temp_c)}<sup>o</sup>`;
                four_pm.innerHTML = `${(data.forecast.forecastday[0].hour[16].temp_c)}<sup>o</sup>`;
                nine_pm.innerHTML = `${(data.forecast.forecastday[0].hour[21].temp_c)}<sup>o</sup>`;
                elven_pm.innerHTML = `${(data.forecast.forecastday[0].hour[23].temp_c)}<sup>o</sup>`;
                mon.innerHTML= `${(data.forecast.forecastday[0].day.avgtemp_c)}<sup>o</sup>`;
                tue.innerHTML= `${(data.forecast.forecastday[1].day.avgtemp_c)}<sup>o</sup>`;
                wed.innerHTML= `${(data.forecast.forecastday[2].day.avgtemp_c)}<sup>o</sup>`;
                sunrise.innerText=`${data.forecast.forecastday[0].astro.sunrise}`;
                sunset.innerText=`${data.forecast.forecastday[0].astro.sunset}`;
                function info(i,img){
                if(data.forecast.forecastday[0].hour[i].condition.text=="Light drizzle"){
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/266.png";
                }
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Light rain shower")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/353.png";
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Patchy rain nearby")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/176.png";
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Patchy light rain")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/293.png";
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Patchy light drizzle")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/263.png";
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Partly Cloudy")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/116.png";
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Clear")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/113.png";
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Sunny")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/113.png";
                else if(data.forecast.forecastday[0].hour[i].condition.text=="Moderate rain")
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/302.png"
                else
                    img.src="https://cdn.weatherapi.com/weather/64x64/day/113.png";
            }
info(10,secondimg)
info(12,thirdimg)
info(16,fourthimg)
function info2(i,img){
    if(data.forecast.forecastday[0].hour[i].condition.text=="Light drizzle"){
        img.src="https://cdn.weatherapi.com/weather/64x64/night/266.png";
    }
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Light rain shower")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/353.png";
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Patchy rain nearby")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/176.png";
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Patchy light rain")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/293.png";
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Patchy light drizzle")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/263.png";
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Partly Cloudy")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/116.png";
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Clear")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/113.png";
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Sunny")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/113.png";
    else if(data.forecast.forecastday[0].hour[i].condition.text=="Moderate rain")
        img.src="https://cdn.weatherapi.com/weather/64x64/night/302.png";
    else
        img.src="https://cdn.weatherapi.com/weather/64x64/night/113.png";
}
info2(21,fifthimg)
info2(23,siximg)
info2(0,firstimg)
        mainimg.src=data.current.condition.icon;
        function sevenforecast(i,img){
            img.src=data.forecast.forecastday[i].day.condition.icon;
        }
        
        let prath=day;
            for(let i=0;i<3;i++){
                if(prath>6){
                    prath=0;
                }
            sevenforecast(prath,sevens[i]);
            prath++;
        }    
        function information(i,info){
            info.innerText=data.forecast.forecastday[0].hour[i].condition.text;
        } 
        
        let utt=day;
            for(let i=0;i<3;i++){
                if(utt>6){
                    utt=0;
                }
            information(utt,infos[i]);
            utt++;
        }  
  })
            .catch(error => {
                     alert('Error fetching city details currently not available:');
            });
}
weatherApi()
