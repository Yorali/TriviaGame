
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

	$('#startbutton').on('click', function() {
		begin();
		// input class js-check
		$('.js-check').on('click', function() {
			var answerChosen = ($(this).attr('data-name'));
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
	})

	// $('#startbutton').on('click',function() {
	// 	begin();
	// })

	function begin() {
		var questionString = '';
		for (var i = 0; i<questions.length; i++) {

			var answerString = '';

			questionString = '<div>' + questions[i].question + '</div>';

			for(var a=0; a < questions[i].answer.length; a++) {

			}

			// $('#test').html(question[i].question)
		}
		}
	}
});