function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires;
  if(exdays===undefined){
    expires='';
  }
  else{
    expires = "expires="+ d.toUTCString();
  }
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
     c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
     return c.substring(name.length,c.length);
    }
  }
  return "";
}

document.getElementsByTagName('button')[0].addEventListener(
	'click',
	function(e){
		let name = prompt('Введите имя');
		if(name){
			setCookie('name',name);
			document.getElementById('div1').innerHTML = name;
		}
	}
);

document.getElementById('div1').innerHTML = getCookie('name');
