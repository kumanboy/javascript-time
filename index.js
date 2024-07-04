const car ={
    name: 'BMW',
    color: 'black',
    year: 2010,
    howToStart: function(){
        console.log('Start');
    }
}

console.log(JSON.stringify(car))

const JsondanObjectga = JSON.stringify(car)
console.log(JSON.parse(JsondanObjectga))

