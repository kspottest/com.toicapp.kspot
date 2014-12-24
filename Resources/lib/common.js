//共通関数
exports.getView=function(file){
	var webView = Ti.UI.createWebView({
		//htmlファイル指定
        url : '/HTML/'+file
    });
    return webView;
};


exports.getParam=function() {
    var url   = location.href;
    parameters    = url.split("?");
    params   = parameters[1].split("&");
    var paramsArray = [];
    for ( i = 0; i < params.length; i++ ) {
        neet = params[i].split("=");
        paramsArray.push(neet[0]);
        paramsArray[neet[0]] = neet[1];
    }
    var categoryKey = paramsArray["key"];
        return categoryKey;
   };