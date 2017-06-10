
score = 0;
right = 0;
wrong = 0;

$(document).ready(function() {

	$("input[value='1']").change(function() {
		right++;
	});

	$("input[value='0']").change(function() {
		wrong++;
	});	

	$('#finishbutton').on('click', function() {
		console.log('Number correct: ' + right);
		console.log('Number incorrect: ' + wrong);
		document.getElementById("visibi").style.visibility = 'hidden';
		$('#numcorrect').html("Correct: " + right);
		$('#numwrong').html("Incorrect: " + wrong)
		document.getElementById("statspage").style.visibility = 'visible';
	});

	$('#startbutton').on('click',function() {
		begin();
	});

	function begin() {
		document.getElementById("visibi").style.visibility = 'visible';

		var time = 60;
		var countdown = setInterval(timer, 1000) 
		function timer() {
			time = time-1;
			if (time <= 0) {
				clearInterval(countdown);
				$('.timer').html('Game Over');
				document.getElementById("visibi").style.visibility = 'hidden';
				document.getElementById("statspage").style.visibility = 'visible';
			};
			$('.timer').html('Time left: ' + time + ' seconds');
		};


		
	};

});
