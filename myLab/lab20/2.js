document.getElementById("calc").addEventListener("click", (e) => {
	

	let expression = document.getElementById("expr").value;
	let delay = document.getElementById("delay").value;

	var xhr = new XMLHttpRequest();
	xhr.open('GET'
		,'http://bashtanov.info/20.php' + "?" 
			+ "expression=" + encodeURIComponent(expression) 
			+ "&delay=" + encodeURIComponent(delay)	
		,true); 
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	     if(xhr.status == 200) {
	       console.log(xhr.responseText);
	       const res = JSON.parse(xhr.responseText)
	       document.getElementById("result").innerHTML = expression + '=' + res.result;
	     }
	} };
	xhr.send();

	console.log("expression=" + expression + "&delay=" + delay);

})