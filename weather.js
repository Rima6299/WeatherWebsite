var btun=document.querySelector('.btn');
var inputval=document.querySelector('.inputtext');
var city=document.querySelector('.city');
var temp=document.querySelector('.temp');
var desc=document.querySelector('.description');
var hum=document.querySelector('.humidity');
var wind=document.querySelector('.wind');
btun.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid=587293baa9c729c1b703b370209b362b&units=metric')
    .then(response=>response.json())
    .then(data=>{
        var cityval=data['name'];
        var tempval=data['main']['temp'];
        var descval=data['weather'][0]['main']
        var humval=data['main']['humidity'];
        var windval=data['wind']['speed'];
        city.innerHTML='Weather of '+cityval;
        temp.innerHTML='Temperature:'+tempval+'°C';
        desc.innerHTML='Description:'+descval;
        hum.innerHTML='Humidity:'+humval+'%';
        wind.innerHTML='Wind speed:'+windval+'km/h';
        if(descval=='Clear')
        {
            document.body.style.backgroundImage="url('clearsky.jpg')";
        }
        if(descval=='Haze')
        {
            document.body.style.backgroundImage="url('Haze.jpg')";
            
        }
        else if(descval=='Clouds')
        {
            document.body.style.backgroundImage="url('cloud1.jpg')";
        }
        else if(descval=='Rain'||descval=='Drizzle')
        {
            document.body.style.backgroundImage="url('Rain.jpg')";
        }
        else if(descval=='Thunder'||descval=='Strome')
        {
            document.body.style.backgroundImage="url('Rain.jpg')";
        }
    })
    
    .catch(erro=>alert("Wrong city name"))
})
