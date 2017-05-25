$(
  function(){
   $('#calc').click(
      function(){ 
        var expr = $('#expr').val();
        var delay = $('#delay').val();

        $.ajax({
          url:'http://bashtanov.info/20.php',
          type: 'POST',
          data: {expression:expr,delay:delay},
          success: function(data){
              $('#result').html(
                $('#result').html() +
                '('+data.delay+' sec) '+
                data.expression+' = '+
                data.result+'<br/>'
              );
          }
        });
      }
    )
  }
);
