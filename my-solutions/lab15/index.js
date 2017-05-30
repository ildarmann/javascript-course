//Task 15

function doSubmit() {
  	let form = document.getElementById('myForm');
	const radios = form.querySelectorAll('[name="myRadio"]');
  
  for (i in radios) {
    console.log(ps[i]);
    
  }
  console.log(radios);
  document.write('radios: ' + radios)
}


//doSubmit();