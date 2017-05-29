function askServer(expr,delay) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url:'http://bashtanov.info/20.php',
      type: 'POST',
      data: {expression:expr,delay:delay},
      success: data=>resolve(data)
    });
  });
}

function displayResult(data){
    $('#result').html(
      $('#result').html() + '('+data.delay+' sec) '+
      data.expression+' = ' + data.result+'<br/>'
    );
    return data;
}

$( ()=>{
     $('#calc').click(
        ()=>{ 
          askServer('2*2',2)
          .then(displayResult)
          .then(()=>askServer('2*3',1))
          .then(displayResult)
          .then(()=>askServer('2*5',2))
          .then(displayResult)
        }
      )
});
