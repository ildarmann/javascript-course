
$( 
	$("button").click(moveButton);
)

function moveButton(e) {
	let button = e.target;
	let parent = button.parentNode;
	//let parentNum = parent.id == 'div0' ? 0 : 1;
	parentNum = $(this).parent().attr("id") === 'div1' ? 1 : 0

	
	$(this).css("color", parentNum==0?'red':'black')
	let otherNum = parentNum === 0 ? 1 : 0;
	$(this).appendTo($("#div" + otherNum));

}
