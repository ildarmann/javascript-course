var imgs = document.getElementsByTagName('img');

for(let i=0; i<imgs.length; i++){
	imgs[i].addEventListener(
		'error',
		function(e){
			e.target.style.visibility = 'hidden';
		}
	);
}
