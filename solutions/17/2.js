var select = document.getElementsByTagName('select')[0];

document.getElementById('add').addEventListener('click',
  function(e){
    let newOption = document.getElementById('new').value;
    select.innerHTML += '<option selected>'+newOption+'</option>';
  }
);

document.getElementById('clear').addEventListener('click',
  function(e){
    select.innerHTML = '';
  }
);