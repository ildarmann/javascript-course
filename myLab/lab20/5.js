function calc(expression, delay, callTime){
	return new Promise(
		(resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open('GET'
				,'http://bashtanov.info/20.php' + "?" + "expression=" + expression + "&delay=" + delay
				,true); 
			xhr.onload = function() {
			     if(xhr.status == 200) {

			     	resolve(expression, JSON.parse(xhr.responseText), callTime);

			     
			     }
			};
			xhr.send();
		}	
	);
}

function printResult(expression, resObj, callTime){
	console.log(resObj);
	const replyTile = new Date();
 	const execTime = new Date() - callTime;
	document.getElementById("result").innerHTML += 
		expression + '=' + resObj.result + 
		', exec time = ' + execTime + '<BR/>';
}

calc("2*2", "1", new Date() ).then(printResult);
calc("2*1", "3", new Date() );
calc("2+1", "1", new Date() );

// document.getElementById("result").innerHTML = expression + '=' + res.result;