function onGeoOk(position) {
    console.log(position);
}

function onGeoError() {
    alert("위치를 참조할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);