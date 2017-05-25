document.getElementById('calc').addEventListener(
  'click',
  function(){ 
    var xhr = new XMLHttpRequest();
    var expr = document.getElementById('expr').value;
    var delay = document.getElementById('delay').value;

    
    xhr.open(
      'get',
      'http://bashtanov.info/20.php'+
       '?expression='+encodeURIComponent(expr)+
       '&delay='+encodeURIComponent(delay)
      ,
      true
    );
    xhr.send();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
      if(xhr.status==200){
          var responseObject = JSON.parse(xhr.responseText);
          document.getElementById('result').innerHTML += 
            '('+responseObject.delay+' sec) '+
            responseObject.expression+' = '+
            responseObject.result+'<br/>';
        }
      }
    }
  }
);

