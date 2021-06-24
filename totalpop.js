var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function()
{
    var data = JSON.parse(this.response);
    var res = data.reduce(function foo(acc,ele){
        return acc + ele.population

    },0)

    console.log(res);
}