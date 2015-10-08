var query = 'http://www.nbim.no/LiveNavHandler/Current.ashx';
var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22' + encodeURIComponent(query) + '%22&format=json&callback=?';


$.getJSON(url, function (res) {
    $("#money").text(res['query']['results']['json']['Value']);
    print(res['query']['results']['json']['d']['liveNavList']['values'], res['query']['results']['json']['d']['liveNavList']['startSecond']);
})

function print(res, index) {
    $("#money").text(res[index]['Value']);
    if (index < 60) {
        setTimeout(function () {
            print(res, ++index);
        }, 1000);
    } else {
        $.getJSON(url, function (res) {
            $("#money").text(res['query']['results']['json']['Value']);
            print(res['query']['results']['json']['d']['liveNavList']['values'], res['query']['results']['json']['d']['liveNavList']['startSecond']);
        })
    }
}