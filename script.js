// 1. Create a xml http request object
var request = new XMLHttpRequest();
//2. open / initiate a connection 
request.open('GET','https://restcountries.eu/rest/v2/all',true); //to avoid unexpected error we use true
//3. Sending the connection
request.send();
//4. Receiving the data(successfully received from server) //onload is event
// the data received from the server will  be of string format
request.onload = function(){   //onload is event 
    //json.parse same as parseint or parsefloat here we are typecasting data into json
var data = JSON.parse(this.response); //this.response is data we received from server
//console.log(data);
// i have to write name of all the countries in console
// code start here


for( var  i  in data)
{
    //console.log(data)
console.log(data[i].name+ " , " + data[i].capital + " ," + data[i].flag );

}
}

// Questions to ask 
// 1. 
// 2. 