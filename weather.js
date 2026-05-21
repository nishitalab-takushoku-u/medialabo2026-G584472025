
// 課題3-1 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("世界の天気（検索結果は1件）");
  console.log("都市名：" + data.name); //北京市
  console.log("経度：" + data.coord.lon); //116.3972
  console.log("緯度：" + data.coord.lat); //39.9075
  console.log("天気：" + data.weather[0].description); //曇りがち
  console.log("最低気温：" + data.main.temp_min + "℃"); //9.94
  console.log("最高気温：" + data.main.temp_max + "℃"); //9.94
  console.log("湿度：" + data.main.humidity + "%"); //14
  console.log("風速：" + data.wind.speed); //2.65
  console.log("風向：" + data.wind.deg); //197
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
let c = document.createElement('div');
c.setAttribute('class', 'category');
let h2 = document.querySelector('h2#kaisu');
h2.insertAdjacentElement('beforeend', c);


let r = document.createElement('div');
r.setAttribute('id', 'result');
c.insertAdjacentElement('beforeend', r);

let w = document.createElement('div');
w.setAttribute('class', 'world-weather');
r.insertAdjacentElement('beforeend', w);

let dl = document.createElement('dl');
w.insertAdjacentElement('beforeend', dl); 
let dt = document.createElement('dt');
dl.insertAdjacentElement('beforeend', dt);
dt.textContent = '都市名：';
let dd = document.createElement('dd');
dt.insertAdjacentElement('afterend', dd);
dd.textContent = data.name;

dt = document.createElement('dt');
dd.insertAdjacentElement('afterend', dt);
dt.textContent = '座標：';
dd = document.createElement('dd');
dt.insertAdjacentElement('afterend', dd);
dd.textContent = '経度: ' + data.coord.lon + ' / 緯度: ' + data.coord.lat;

dt = document.createElement('dt');
dd.insertAdjacentElement('afterend', dt);
dt.textContent = '天気：';
dd = document.createElement('dd');
dt.insertAdjacentElement('afterend', dd);
dd.textContent = data.weather[0].description;

dt = document.createElement('dt');
dd.insertAdjacentElement('afterend', dt);
dt.textContent = '気温：';
dd = document.createElement('dd');
dt.insertAdjacentElement('afterend', dd);
dd.textContent = '最低: ' + data.main.temp_min + ' / 最高: ' + data.main.temp_max;

dt = document.createElement('dt');
dd.insertAdjacentElement('afterend', dt);
dt.textContent = '湿度：';
dd = document.createElement('dd');
dt.insertAdjacentElement('afterend', dd);
dd.textContent = data.main.humidity + '%';

dt = document.createElement('dt');
dd.insertAdjacentElement('afterend', dt);
dt.textContent = '風：';
dd = document.createElement('dd');
dt.insertAdjacentElement('afterend', dd);
dd.textContent = '風速: ' + data.wind.speed + ' / 風向: ' + data.wind.deg;
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

