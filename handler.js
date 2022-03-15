// 要素を取得
const umekomi = document.getElementById('umekomi');

// HTMLの読み込み(もっといい方法がありそう)
var req = new XMLHttpRequest();
req.open("GET", '/umekomi.html', true);
req.send(null)
req.onload = function(){
    // HTMLの埋め込み
    umekomi.innerHTML = req.responseText;
    console.log( req.responseText );

}

// HTML内で使用するJS関数はここで定義する
function OnButtonClick() {
    alert('埋め込みボタンを押せました');
  }
