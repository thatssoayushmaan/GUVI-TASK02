//CREATE A REQUEST INSTANCE
var req = new XMLHttpRequest();
//INITIATE A CONNECTION
req.open('GET','https://restcountries.eu/rest/v2/all',true)
//SENDING THE REQUEST
req.send()
//LOAD THE FUNCTION
//Will ONLY BE TRIGGERED WHEN THE DATA HAS BEEN RETRIEVED SUCCESSFULLY
req.onload = function(){
    var data = JSON.parse(this.response)
    console.log(data)
    for(var i in data){
        console.log(data[i]["name"])
    }
}

//15d5db89456466b90d2c3b9c9bf070e6


