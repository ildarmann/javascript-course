$(
	() => {
		$("#calc").click( () => {	


			var expr = $('#expr').val();
        	var delay = $('#delay').val();

			$.ajax({
				type: "POST",
				url: 'http://bashtanov.info/20.php',
				data: {expression:expr, delay:delay},
				success: (data,status,jqXHR)=>{
					$('#result').html(
		                $('#result').html() +
		                '('+data.delay+' sec) '+
		                data.expression+' = '+
		                data.result+'<br/>'
	                );
				},
				error: (jqXHR,status,message)=>{
					//TODO
				}

			});
		})
	}
)