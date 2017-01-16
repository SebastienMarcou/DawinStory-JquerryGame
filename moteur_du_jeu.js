$( function() {
	$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(now) {
        $elem.css({
           transform: 'rotate(' + now + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};


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
	showWarningAnimation();

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
		showWarningAnimation();
	}

		function showWarningAnimation()
	{
		$("#animProf").animate({bottom: "+=110px", left: "+=110px"}, 300, 'linear').delay(2000).animate({bottom: "-=110px", left: "-=110px"}, 300, 'linear');
		$("#animDoigt").animate({bottom: "+=160px", left: "+=110px"}, 300, 'linear').delay(2000).animate({bottom: "-=110px", left: "-=110px"}, 300, 'linear');
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

	var actions = {
		"reset" : startGame,
		"getOneWarning" : getOneWarning,
		"looseOneWarning" : looseOneWarning,
		"looseAllWarnings" : initWarnings,
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
		"workAllNight" : cplusplusMediumGrade
	}

	$(".section > action").on("doAction", function(){
		actions[$(this).attr("name")]();
	})

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