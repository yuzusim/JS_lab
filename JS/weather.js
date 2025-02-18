const API_KEY = "e510a532fa9d8a366bf0f583dd9d1ed0"


// 이 함수는 유저의 위치를 줘 (Geolocation 지리적 위치)
// 그리고 화면에 날씨를 보여줄꺼임 --> 한번 해보고 싶었음

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in", lat, lon); 
    //  console.log(position); // 유저 위치 확인

    // 이 latitude를 geolocation에서 얻은 값으로 변경
    // url 백틱으로 감싸기 API_KEY로 변경
    // 이 세변수는 반드시 있어야 함 API_KEY, lon, lat
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}8&appid=${API_KEY}&units=metric`;
    // console.log(url);
    // fetch를 사용해서 url을 얻을거야
    // fetch는 promise다 당장 일어나지 않고 시간이 좀 걸린 뒤에 일어남
    // 응답을 기다려야 함 그래서 then 사용해야 함
    // url을 fetch하고 그 다음 Response를 받아야 함
    // 내용을 추출 했으면 data를 얻을거야
    fetch(url)
        .then(response => response.json())
        .then(data => { 
            // console.log(data.name, data.weather[0].main);
            // 변수 작성
            // const name = data.name;
            // const weather = data.weather[0].main;

            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

    

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
