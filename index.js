'use strict'

console.log('Loading function');

exports.handler = (event, context, callback)=>{
	let min= parseInt(event.min);
	let max= parseInt(event.max);
	let generatedNumber = Math.floor(Math.random() * max ) + min;
	
let msg = {
     "statusCode": 200,
	 "headers": { 'Content-Type': 'application/json' },
	 "body": JSON.stringify(generatedNumber),
}

callback(null,msg);
	
};


// Configurar no Body Mapping Templates
// Add mapping template - application/json
//{
//"min": $input.params('min'),
//"max": $input.params('max')
//}


//https://gm2ur0kv84.execute-api.us-east-1.amazonaws.com/producao/random?min=10&max=90