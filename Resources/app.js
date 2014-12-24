/*

 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later'); 
} else {
	//
	Titanium.App.addEventListener("kaito", 
	  function(params){
	  //ここにコードを。
	  alert("answer="+params.param1);
	});

	//ページ表示処理
	var htmlfile = "index.html";

	//デフォルトページ表示処理
	var webView = Ti.UI.createWebView({
		//htmlファイル指定
        url : '/HTML/'+htmlfile
    });
    var window = Ti.UI.createWindow();
    window.add(webView);
    window.open();
}


