// 이 함수는 유저의 위치를 줘 (Geolocation 지리적 위치)
// 그리고 화면에 날씨를 보여줄꺼임 --> 한번 해보고 싶었음


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng); 
    //  console.log(position); // 유저 위치 확인
}
function onGeoErrer(){
    alert("Can't find you. No weather for you.")
}

// navigator와 geolocation 사용함
// 이걸 부르면 브라우저에서 위치 좌표를 줄꺼야
// getCurrentPosition는 아규먼트가 2개 필요
// 1. 모든게 잘 됐을때 실행될 함수
// 2. 에러가 발생 했을때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErrer);
// onGeoOk({sexyObj});
