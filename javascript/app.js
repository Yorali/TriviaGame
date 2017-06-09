
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
q1 = 0;
q0 = 89;

$(document).ready(function() {

	$('#finishbutton').on('click', function() {
		console.log('working')
		// begin();
		// input class js-check
		nine();

		function nine() { $('#quiz input').on('change', function() {
			q0 = $('input[name=q1]:checked', '#quiz').val();
			})
		};

		q1 = $('.response input').on('change', function() {
			$('input[value1=0]:checked', '.response').val();
		})

		var q2 = $('.response2').attr('value2'); 
		var q3 = $('.response3').attr('value3'); 

		console.log(q0);
		// console.log(q2);
		// console.log(q3);

			var answerChosen = ($(this).attr('value'));
			var correct = (questions[this.name].correctAnswer);
			if (answerChosen === correct) {
				alert("Correct");
				right++;
				alert(correct);
			} 
			else {
				alert("Incorrect")
				wrong++;
				alert(wrong);
			}
		
	})

	$('#startbutton').on('click',function() {
		begin();
	})

	function begin() {
		var questionString = '';
		for (var i = 0; i<questions.length; i++) {

			var answerString = '';

			questionString = '<div>' + questions[i].question + '</div>';

			for(var a=0; a < questions[i].answers.length; a++) {

			}

			// $('#test').html(question[i].question)
		}
	}
});
