var query = 'http://www.nbim.no/LiveNavHandler/Current.ashx';
var url = "https://cors-anywhere.herokuapp.com/"+query;


$.getJSON(url, function (res) {
    $("#money").text(res['Value']);
    print(res['d']['liveNavList'][0]['values'], res['d']['liveNavList'][0]['startSecond']);
})

function print(res, index) {
    $("#money").text(res[index]['Value']);
    if (index < 60) {
        setTimeout(function () {
            print(res, ++index);
        }, 1000);
    } else {
        $.getJSON(url, function (res) {
            $("#money").text(res['Value']);
            print(res['d']['liveNavList'][0]['values'], res['d']['liveNavList'][0]['startSecond']);
        })
    }
}