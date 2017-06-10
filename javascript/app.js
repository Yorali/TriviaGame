
var questions = [
	{
		question: "Question 1",
		answers: ["A", "B", "Answer", "C"],
		correctAnswer: "Answer"
	},
	{
		question: "Question 2",
		answers: ["Answer", "A", "B", "C"],
		correctAnswer: "Answer"
	},
	{
		question: "Question 3",
		answers: ["A", "Answer", "B", "C"],
		correctAnswer: "Answer"
	},


]

que = [
	"Question 1",
	"Question 2",
	"Question 3"

];

selection = [
	["A", "B", "Answer", "C"],
	["Answer", "A", "B", "C"],
	["A", "Answer", "B", "C"]

];

correct = [
	selection[0][2],
	selection[1][0],
	selection[2][1]
];

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
			};
			$('.timer').html('Time left: ' + time + ' seconds');
		};


		
	};

});
