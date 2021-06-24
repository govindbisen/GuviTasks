var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all' ,true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    res = data.filter(function populationTwo(element){
        return element.population>=200000

    }).map(function write(element){
        return element.name
    })
    console.log(res);
}