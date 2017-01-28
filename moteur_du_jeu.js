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
	var showedImage;
	var englishJokes;

	// Variables pour les notes de chaque matière
	var tabGrades = new Object();
	var finalGrade;
	var nbGrades;


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
	}

	function getWarnings() {
		return nbWarnings;
	}

	function initWarnings() {
		nbWarnings = 0;
		warnings.text(getWarnings());

	}


	function getOneWarning() {
		nbWarnings++;
		showWarningAnimation();
		warnings.text(getWarnings());

	}

		function showWarningAnimation()
	{
		$("#animProf").animate({bottom: "+=110px", left: "+=110px"}, 300, 'linear').delay(2000).animate({bottom: "-=110px", left: "-=110px"}, 300, 'linear');
	}

	function looseOneWarning(){
		nbWarnings--;
	}

	function endGame() {
		alert("DEAD");
	}

	function initData(){
		
	playerName = "";
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
	showedImage = false;
	englishJokes = false;

	tabGrades = {"cplusplusGrade" : 0,
			  "ergonomyGrade" : 0,
			  "htmlGrade" : 0,
			  "jeeGrade" : 0,
			  "webglGrade" : 0,
			  "englishGrade" : 0,
			  "phpGrade" : 0,
			  "jQueryGrade" : 0,
			  "projectGrade" : 0};
	finalGrade = 0;
	nbGrades = 9;
	}

	var actions = {
		"reset" : restart,
		"getOneWarning" : getOneWarning,
		"looseOneWarning" : looseOneWarning,
		"looseAllWarnings" : initWarnings,
		"chooseName" : chooseName,
		"chooseSmall" : playerChooseSmallAppartment,
		"chooseMedium" : playerChooseMediumAppartment,
		"chooseBig" : playerChooseBigAppartment,
		"displayCorrectGroupOptions" : displayCorrectGroupOptions,
		"chooseGirl" : playerChooseGirl,
		"chooseGuy" : playerChooseGuy,
		"chooseFriends" : playerChooseFriends,
		"chooseNobody" : playerChooseNobody,
		"laughWithTeacher" : playerLaughWithTeacher,
		"laughWithFriend" : playerLaughWithFriend,
		"workNow" : playerWorkNow,
		"workLater" : playerWorkLater,
		"ergonomyBadGrade" : ergonomyBadGrade,
		"ergonomyGoodGrade" : ergonomyGoodGrade,
		"ergonomyMediumGrade" : ergonomyMediumGrade,
		"checkHTML" : checkHtml,
		"checkCplusplus" : checkCplusplus,
		"sendNow" : cplusplusBadGrade,
		"workAllNight" : cplusplusMediumGrade,
		"jeeBadGrade" : jeeBadGrade,
		"jeeGoodGrade" : jeeGoodGrade,
		"webGLGoodGrade" : webGLGoodGrade,
		"webGLMediumGrade" : webGLMediumGrade,
		"webGLBadGrade" : webGLBadGrade,
		"playerShowedImage" : playerShowedImage,
		"displayCorrectNetOptions" : displayCorrectNetOptions,
		"englishGoodOral" : englishGoodOral,
		"englishMediumOral" : englishMediumOral,
		"englishBadOral" : englishBadOral,
		"checkEnglish" : checkEnglish,
		"checkPHP" : checkPHP,
		"jQueryGoodGrade" : jQueryGoodGrade,
		"displayCorrectProjectOptions" : displayCorrectProjectOptions,
		"displayCorrectResults" : displayCorrectResults
	}

	$(".section > action").on("doAction", function(){
		actions[$(this).attr("name")]();
	})
		function restart(){
			initWarnings();
			initData();
		}

		function chooseName(){
			playerName = $("#name").val();
			$(".prenom").html(playerName);
		}

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
			tabGrades["cplusplusGrade"] =  tabGrades["cplusplusGrade"] + 1;
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
			tabGrades["ergonomyGrade"] = tabGrades["ergonomyGrade"] + 2;
		}

		function ergonomyGoodGrade(){
			tabGrades["ergonomyGrade"] = tabGrades["ergonomyGrade"] + 8;
		}

		function ergonomyMediumGrade(){
			tabGrades["ergonomyGrade"] = tabGrades["ergonomyGrade"] + 5;
		}

		function checkHtml(){
			if($('#htmlQ1:checked').attr('value') == "ok")
				tabGrades["htmlGrade"] = tabGrades["htmlGrade"] + 2.5;

			if($('#htmlQ2:checked').attr('value') == "ok")
				tabGrades["htmlGrade"] = tabGrades["htmlGrade"] + 2.5;

			if($('#htmlQ3:checked').attr('value') == "ok")
				tabGrades["htmlGrade"] = tabGrades["htmlGrade"] + 2.5;

			if($('#htmlQ4:checked').attr('value') == "ok")
				tabGrades["htmlGrade"] = tabGrades["htmlGrade"] + 2.5;

			$("#resultHTML").html("Note : " + tabGrades["htmlGrade"] + "/10");
		}

		function checkCplusplus(){
			if(workNow){
				$("#cplusplusOption").attr('go',"cplusplusDone");
				tabGrades["cplusplusGrade"] = tabGrades["cplusplusGrade"] + 8;
			}
			else if(workLater){
				$("#cplusplusOption").attr('go',"cplusplusNotDone"); 
			}
		}

		function cplusplusBadGrade(){
			tabGrades["cplusplusGrade"] = tabGrades["cplusplusGrade"] + 2;		}

		function cplusplusMediumGrade(){
			tabGrades["cplusplusGrade"] = tabGrades["cplusplusGrade"] + 5;
		}

		function jeeBadGrade(){
			tabGrades["jeeGrade"] = 4;
		}

		function jeeGoodGrade(){
			tabGrades["jeeGrade"] = 8;
		}

		function webGLGoodGrade(){
			tabGrades["webglGrade"] = 8;
		}

		function webGLMediumGrade(){
			tabGrades["webglGrade"] = 5;
		}

		function webGLBadGrade(){
			tabGrades["webglGrade"] = 2;
		}

		function playerShowedImage(){
			showedImage = true;
		}

		function displayCorrectNetOptions(){
			if(showedImage){
				$("#teacherAnswer").html("Oui ça va pour cette fois.")
				$("#netChoice").attr('go',"goToToilets");
			}
			else{
				$("#teacherAnswer").html("Non, vous aviez qu'à me montrer l'image avant !")
				$("#netChoice").attr('go',"dotNetOups"); 
			}

		}

		function englishGoodOral(){
			tabGrades["englishGrade"] = tabGrades["englishGrade"] + 5;
		}

		function englishMediumOral(){
			tabGrades["englishGrade"] = tabGrades["englishGrade"] + 3;
		}

		function englishBadOral(){
			tabGrades["englishGrade"] = tabGrades["englishGrade"] + 1;
		}

		function checkEnglish(){
			if($('#englishQ1:checked').attr('value') == "ok")
				tabGrades["englishGrade"] = tabGrades["englishGrade"] + 2.5;

			if($('#englishQ2:checked').attr('value') == "ok")
				tabGrades["englishGrade"] = tabGrades["englishGrade"] + 2.5;

			if($('#englishQ1:checked').attr('value') == "almostOk" && $('#englishQ2:checked').attr('value') == "almostOk"){
				tabGrades["englishGrade"] = tabGrades["englishGrade"] + 2;
				englishJokes = true;
			}
				
			if(englishJokes)
				$("#englishResults").html("Un peu d’humour est toujours bon à prendre chez un DAWIN. +2 points sur votre note pour la peine.<br> Note totale : " + englishGrade + "/10");
			else
				$("#englishResults").html("Note totale : " + tabGrades["englishGrade"] +"/10");
		}

		function checkPHP(){
			if($('#phpQ1:checked').attr('value') == "ok")
				tabGrades["phpGrade"] = tabGrades["phpGrade"] + 2.5;

			if($('#phpQ2:checked').attr('value') == "ok")
				tabGrades["phpGrade"] = tabGrades["phpGrade"] + 2.5;

			if($('#phpQ3:checked').attr('value') == "ok")
				tabGrades["phpGrade"] = tabGrades["phpGrade"] + 2.5;

			if($('#phpQ4:checked').attr('value') == "ok")
				tabGrades["phpGrade"] = tabGrades["phpGrade"] + 2.5;

			$("#resultsPHP").html("Note : " + tabGrades["phpGrade"] + "/10");
		}

		function jQueryGoodGrade(){
			tabGrades["jQueryGrade"] = 10;
		}

		function displayCorrectProjectOptions(){

			if(chooseGirl){
				$("#projectGrades").attr('go',"projectGirl");
				tabGrades["projectGrade"] = 7; 
			}

			if(chooseGuy){
				$("#projectGrades").attr('go',"projectGuy");
				tabGrades["projectGrade"] = 9;
			}

			if(chooseFriends){
				$("#projectGrades").attr('go',"projectFriends");
				tabGrades["projectGrade"] = 3;
			}

			if(chooseNobody){
				$("#projectGrades").attr('go',"projectNobody");
				tabGrades["projectGrade"] = 5; 
			}
		}

		function displayCorrectResults(){
			for(var grade in tabGrades)
				finalGrade = finalGrade + tabGrades[grade];

			finalGrade = finalGrade / nbGrades;
			finalGrade = finalGrade.toFixed(2);
			console.log(finalGrade);

			if(finalGrade < 5){
				$("#results").attr("go","bilanBad");
				$("#finalGrade").html("Votre moyenne générale est de " + finalGrade + "/10" );
			}
			else if(finalGrade < 7){
				$("#results").attr("go","bilanOk");
				$("#finalGrade").html("Votre moyenne générale est de " + finalGrade + "/10" );			
			}
			else{
				$("#results").attr("go","bilanGood");
				$("#finalGrade").html("Votre moyenne générale est de " + finalGrade + "/10" );
			}
		}
	} );