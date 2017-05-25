$('p').each(function(){
  $(this).html(
    $(this).html()+'<br/><span class="copy">Copyright (c) Ilya Bashtanov<span>'
  );});