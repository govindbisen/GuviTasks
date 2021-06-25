/*
problems with clean code
*/

var request = new XMLHttpRequest();
url = 'https://restcountries.eu/rest/v2/all'
request.open('GET',url,true);
request.send();
request.onload = function(){

    var data = JSON.parse(this.response);
    // all json data from restcountries
    console.log(data);

    // All countries in Asia region using filter function
    var countriesAsia  = data.filter((ele)=>ele.region==="Asia")
    console.log(countriesAsia);

    // Total population of all countries
    var totalPopulation = data.reduce(function totalpopulation(acc,ele){ return acc + ele.population  },0)
    console.log(totalPopulation);

    //Countries where population is less than 200000
    var populationLesser2l = data.filter((ele)=>ele.population<200000);
    console.log(populationLesser2l);

    // Countries with name capital and flag
     data.forEach(element => { console.log(element.name+ " " +element.capital +" "+ element.flag);     });



}
