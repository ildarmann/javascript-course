var input = document.getElementsByTagName('input')[0];

input.addEventListener('input',
  function(e){
		let nSymbols = this.value.length;
		//��-��������, � split ����� ������������ ���������� ��������� ��� ����������� ����
		let nWords = this.value.trim().split(' ').length;
    document.getElementById('div1').innerHTML = 'Symbols: '+nSymbols+'<br/>'+'Words: '+nWords;
  }
);

input.focus();
