$(
  function(){
    $('button').click(
      function(){
        let parentNum = ($(this).parent().attr('id')=='div0') ? 0 : 1;
        let otherNum = parentNum==0?1:0;
        $(this).css('color',parentNum==0?'red':'black')
          .appendTo($('#div'+otherNum));
      }
    );
  }
);
