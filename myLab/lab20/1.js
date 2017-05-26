function calc(expression, delay, callTime){
	var xhr = new XMLHttpRequest();
	xhr.open('GET'
		,'http://bashtanov.info/20.php' + "?" + "expression=" + expression + "&delay=" + delay
		,true); 
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	     if(xhr.status == 200) {
	     	const replyTile = new Date();
	     	const execTime = new Date() - callTime;
			const res = JSON.parse(xhr.responseText);
     		document.getElementById("result").innerHTML += 
     			expression + '=' + res.result + 
     			', exec time = ' + execTime + '<BR/>';
	     }
	} };
	xhr.send();
}

calc("2*2", "5", new Date() );
calc("2*1", "3", new Date() );
calc("2+1", "1", new Date() );

// document.getElementById("result").innerHTML = expression + '=' + res.result;