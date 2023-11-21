const API_KEY = "8f8cf9b56f79370a2ef66368305aa4fd"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((data) => {
        const city = document.querySelector('#weather')
        const weather = document.querySelector('#city')
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; 
    });
}
function onGeoError() {
    alert("위치를 참조할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);