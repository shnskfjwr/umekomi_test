// 要素を取得
const umekomi = document.getElementById('umekomi');

// HTMLの読み込み(もっといい方法がありそう)
var req = new XMLHttpRequest();
req.open("GET", 'https://shnskfjwr.github.io/umekomi_test//umekomi.html', true);
req.send(null)
req.onload = function(){
    // HTMLの埋め込み
    umekomi.innerHTML = req.responseText;
    console.log( req.responseText );

}

// HTML内で使用するJS関数はここで定義しないと動かない
// umekomi.html内でJSファイルを読み込んでも関数とみなされないため？
function OnButtonClick() {
    alert('埋め込みボタンを押せました');
  }
