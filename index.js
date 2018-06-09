var querystring = require('querystring');
var shajs = require('sha.js')
var request = require('request');
var request = request.defaults({jar: true})
//Debug用
//require('request').debug = true

var postData = {
    userid: "rex721209",
    passwd: shajs('sha256').update('haha').digest('hex'),
    autologin : "y",
    is_ajax: 1 
}

var formData = querystring.stringify(postData);
var contentLength = formData.length;

var options = {
    method: 'POST',
    url: 'https://www.sinsangmarket.kr/api/requestLogin.php',
    headers: {
        'Accept': '*/*',
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Host': 'www.sinsangmarket.kr',
        'User-Agent': ''
    },
    body: formData
};

function callback(error, response, body) {
    if (!error) {
        console.log(body);
        //轉成JSON用的
        //var info = JSON.parse(JSON.stringify(body));
        //console.log(info);
    }
    else {
        console.log('Error happened: '+ error);
    }
}

request(options, callback);

request('http://www.sinsangmarket.kr/v2/goodsDetail?gid=15451250', function (error, response, body) {
  console.log(body);
});