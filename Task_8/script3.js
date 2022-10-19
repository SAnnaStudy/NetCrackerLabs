function start(){  
const AVAILABLE_CITIES = ["Samara", "Moscow", "London", "Paris", "Berlin", "New York", "Saint Petersburg"];
let cityName = document.getElementById('townName').value;
if(cityName && AVAILABLE_CITIES.includes(cityName))
{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=577b3bd2eec54e5a84a1ae825e746783';
    
   fetch(url)
           .then(function(resp) {return resp.json() })
           .then (function (data){
           console.log(data);
           data.name = cityName;
           document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
           document.querySelector('.description').innerHTML = data.weather[0]['description'];
           document.querySelector('.icon').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
}else{
          alert('Error: Такого города не существует');
}
}