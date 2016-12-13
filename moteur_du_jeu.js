$( function() {
	var buttons = $(".section button");
	var status = $("#status");
	var life = $("#status .life .value");
	var nbLife;
	var action {
		"Avertissement" : loseOneLife,
		"start" : startGame,
		"reset" : startGame

	}


	
	startGame();
	
	buttons.click( function() {
		var a = $(this).attr('go');
		console.log(a);
		gotoSection(a);
		
	} );
	
	
	
	function gotoSection(key) {
		var next = $(".section#" +key);
		console.log(next);
		$(".section").hide();
		$(next).show();
	}
	
	function getLife() {
		return nbLife;
	}
	
	function setLife(v) {
		nbLife = v;
		
	}
	
	function loseOneLife() {

			return nbLife-1;
		
	}
	
	function startGame() {
	$(".section").hide();
	$("#intro").show();
		setLife(3);
		life.text(getLife());
	}
	
	function endGame() {
	
			alert("DEAD");
	
	}
	
} );