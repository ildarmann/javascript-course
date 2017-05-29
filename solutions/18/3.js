$(function(){
  
  $('body > *').click(
    function(e){
      $(this).hide('slow');
    }
  );
  
  $('html').bind(
    'dblclick',
    function(){
      $('*').show('fast');
    }
  );
  
});