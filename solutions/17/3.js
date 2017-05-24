var input = document.getElementsByTagName('input')[0];

input.addEventListener('input',
  function(e){
		let nSymbols = this.value.length;
		//по-хорошему, в split нужно использовать регулярное выражение для разделителя слов
		let nWords = this.value.trim().split(' ').length;
    document.getElementById('div1').innerHTML = 'Symbols: '+nSymbols+'<br/>'+'Words: '+nWords;
  }
);

input.focus();
