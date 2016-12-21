$( function() {
	// Variables de manipulation du DOM
	var buttons = $(".section button");
	var status = $("#status");
	var currentSection = $(".section").first();
	var warnings = $("#status .warning .value");
	var nbWarnings;

	// Booléens servant selon les choix pris par le joueur
	var chooseSmallAppartment;
	var chooseMediumAppartment;
	var chooseBigAppartment;
	var chooseGirl;
	var chooseGuy;
	var chooseFriends;
	var chooseNobody;
	var laughWithTeacher;
	var laughWithFriend;
	var workNow;
	var workLater;

	// Variables pour les notes de chaque matière
	var cplusplusGrade;
	var ergonomyGrade;
	var htmlGrade;
	var jeeGrade;
	var webglGrade;
	var englishGrade;
	var phpGrade;
	var jQueryGrade;
	var projectGrade;
	var nbGrades;
	var finalGrade;

	startGame();

	function startGame() {
		$(".section").hide();
		$("#intro").show();
		initWarnings();
		initData();
		warnings.text(getWarnings());
	}
	
	buttons.click(function () {
		gotoSection($(this).attr("go"));
	});

	function gotoSection(key) {
		currentSection.hide();
		currentSection = $("#" + key);
		currentSection.show();
		currentSection.find("action").trigger("doAction");
		warnings.text(getWarnings());
	}

	function getWarnings() {
		return nbWarnings;
	}

	function initWarnings() {
		nbWarnings = 0;
	}

	function getOneWarning() {
		nbWarnings++;
	}

	function looseOneWarning(){
		nbWarnings--;
	}

	function endGame() {
		alert("DEAD");
	}

	function initData(){
		
	chooseSmallAppartment = false;
	chooseMediumAppartment = false;
	chooseBigAppartment = false;
	chooseGirl = false;
	chooseGuy = false;
	chooseFriends = false;
	chooseNobody = false;
	laughWithTeacher = false;
	laughWithFriend = false;
	workNow = false;
	workLater = false;

	cplusplusGrade = 0;
	ergonomyGrade = 0;
	htmlGrade = 0;
	jeeGrade = 0;
	webglGrade = 0;
	englishGrade = 0;
	phpGrade = 0;
	jQueryGrade = 0;
	projectGrade = 0;
	nbGrades = 0;
	finalGrade = 0;
	}

		// Resume of actions
		$(".section > action[name='reset']").on("doAction", startGame);
		$(".section > action[name='getOneWarning']").on("doAction", getOneWarning);
		$(".section > action[name='looseOneWarning']").on("doAction", looseOneWarning);
		$(".section > action[name='looseAllWarnings']").on("doAction", initWarnings);
		$(".section > action[name='chooseSmall']").on("doAction", playerChooseSmallAppartment);
		$(".section > action[name='chooseMedium']").on("doAction", playerChooseMediumAppartment);
		$(".section > action[name='chooseBig']").on("doAction", playerChooseBigAppartment);
		$(".section > action[name='displayCorrectGroupOptions']").on("doAction", displayCorrectGroupOptions);
		$(".section > action[name='chooseGirl']").on("doAction", playerChooseGirl);
		$(".section > action[name='chooseGuy']").on("doAction", playerChooseGuy);
		$(".section > action[name='chooseFriends']").on("doAction", playerChooseFriends);
		$(".section > action[name='chooseNobody']").on("doAction", playerChooseNobody);
		$(".section > action[name='laughWithTeacher']").on("doAction", playerLaughWithTeacher);
		$(".section > action[name='laughWithFriend']").on("doAction", playerLaughWithFriend);
		$(".section > action[name='workNow']").on("doAction", playerWorkNow);
		$(".section > action[name='workLater']").on("doAction", playerWorkLater);
		$(".section > action[name='ergonomyBadGrade']").on("doAction", ergonomyBadGrade);
		$(".section > action[name='ergonomyGoodGrade']").on("doAction", ergonomyGoodGrade);
		$(".section > action[name='ergonomyMediumGrade']").on("doAction", ergonomyMediumGrade);
		$(".section > action[name='checkHTML']").on("doAction", checkHtml);
		$(".section > action[name='checkCplusplus']").on("doAction", checkCplusplus);
		$(".section > action[name='sendNow']").on("doAction", cplusplusBadGrade);
		$(".section > action[name='workAllNight']").on("doAction", cplusplusMediumGrade);

		function playerChooseSmallAppartment(){
			chooseSmallAppartment = true;
		}

		function playerChooseMediumAppartment(){
			chooseMediumAppartment = true;

		}

		function playerChooseBigAppartment(){
			chooseBigAppartment = true;
		}

		function displayCorrectGroupOptions(){
			if(chooseSmallAppartment)
				$("#groupChoice").attr('go',"groupProjectSmall"); 
			else if(chooseMediumAppartment)
				$("#groupChoice").attr('go',"groupProjectMedium");
			else
				$("#groupChoice").attr('go',"groupProjectBig");
		}

		function playerChooseGirl(){
			chooseGirl = true;
		}

		function playerChooseGuy(){
			chooseGuy = true;
		}

		function playerChooseFriends(){
			chooseFriends = true;
		}

		function playerChooseNobody(){
			chooseNobody = true;
		}

		function playerLaughWithTeacher(){
			cplusplusGrade =  cplusplusGrade + 1;
		}

		function playerLaughWithFriend(){
			getOneWarning();
		}

		function playerWorkNow(){
			workNow = true;
		}

		function playerWorkLater(){
			workLater = true;
		}

		function ergonomyBadGrade(){
			ergonomyGrade = ergonomyGrade + 2;
		}

		function ergonomyGoodGrade(){
			ergonomyGrade = ergonomyGrade + 8;
		}

		function ergonomyMediumGrade(){
			ergonomyGrade = ergonomyGrade + 5;
		}

		function checkHtml(){
			if($('#htmlQ1:checked').attr('value') == "ok")
				htmlGrade = htmlGrade + 2.5;

			if($('#htmlQ2:checked').attr('value') == "ok")
				htmlGrade = htmlGrade + 2.5;

			if($('#htmlQ3:checked').attr('value') == "ok")
				htmlGrade = htmlGrade + 2.5;

			if($('#htmlQ4:checked').attr('value') == "ok")
				htmlGrade = htmlGrade + 2.5;

			$("#resultHTML").html("Note : " + htmlGrade + "/10");
		}

		function checkCplusplus(){
			if(workNow){
				$("#cplusplusOption").attr('go',"cplusplusDone");
				cplusplusGrade = cplusplusGrade + 8;
			}
			else if(workLater){
				$("#cplusplusOption").attr('go',"cplusplusNotDone"); 
			}
		}

		function cplusplusBadGrade(){
			cplusplusGrade = cplusplusGrade + 2;
		}

		function cplusplusMediumGrade(){
			cplusplusGrade = cplusplusGrade + 5;
		}
	} );