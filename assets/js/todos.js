//Create todos by pressing Enter key
$("input[type='text']").on("keypress", function(e){
	if(e.which === 13){
		//grab text from input
		var todoText = $(this).val();
		//create new li and append to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
		//clear text input
		$(this).val("");
	}
});

//Check off todos by clicking on them
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Clicking "X" delete the todos
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});