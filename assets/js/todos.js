//Check off todos by clicking on them
$("li").on("click", function(){
	if($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	} else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
});