
let kaisu = document.querySelector('span#kaisu');
let container = document.querySelector('div#container');

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

let Count = Number(kaisu.textContent);
kaisu.textContent = Count + 1;

let w = document.createElement('div');
w.setAttribute('class', 'world-weather');

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

container.insertAdjacentElement('beforeend', w);


}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('button#kensaku');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  container.textContent = '';
  kaisu.textContent = 0;

    let checkedBoxes = document.querySelectorAll('input[name="city"]:checked');

    for (let box of checkedBoxes) {
      let cityId = box.value;
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + cityId + '.json';

      axios.get(url)
          .then(showResult)
          .catch(showError)
          .then(finish);
    }

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  console.log(data);

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}