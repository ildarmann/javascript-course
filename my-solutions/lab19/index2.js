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

let nameCookie = 'myCookie';
let btn = document.getElementById("save");
btn.addEventListener("click", (e) => {
	
	let nameCookieVal = prompt();
	console.log(nameCookieVal);
  let expires = 1;
	setCookie(nameCookie, nameCookieVal, expires);
})

document.getElementById("div0").innerHTML = getCookie(nameCookie);

document.getElementById("clear").addEventListener("click", 	(e) => {
  console.log('sdf');
		setCookie(nameCookie, '', -1)
	})