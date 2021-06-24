var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function()
{
    var data = JSON.parse(this.response);
    var res = data.filter(function Dollar(element)
    {
        return element.currencies[0].code == 'USD'
     }).map(function write(element){
        return element.name
    })
    console.log(res);
}