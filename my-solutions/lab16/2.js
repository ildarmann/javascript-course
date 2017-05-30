window.onerror = function(){
	document.getElementById('result').innerHTML = '&nbsp;';
  document.getElementById('error').innerHTML = 'Calculation error';
}

setInterval(
  function(){
    let arg = Math.round(Math.random()*2000-1000);
    document.getElementById('number').innerHTML = arg;
    let res = Math.sqrt(arg);
    if(isNaN(res)){
      res = '';
      throw new Error('Number is negative');
    }
    document.getElementById('result').innerHTML = res;
    document.getElementById('error').innerHTML = '&nbsp;';
  },
  2000
); 
