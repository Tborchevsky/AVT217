$(document).ready(function() {
	MovieGuess();
});




function MovieGuess() {
	var MovieArray =["spiderman", "doctor strange", "antman", "captain america", "black panther", "iron man", "guardians of the galaxy", "the incredible hulk", "thor", "deadpool", "xmen", ]
	var Movie = Math.floor(Math.random() * MovieArray.length);
	console.log(MovieArray[Movie]);
    $('#submit').click(function() {
        var guess = $('input').val();
        console.log(guess);
      if  (guess == MovieArray[Movie]) {
            $('h1').text(guess + ' Very Right');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' Not Right');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })




}

