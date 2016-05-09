// quote library
var quoteLib = [
	{
		"quoteContent": "Be thankful we're not getting all the government we're paying for.", 
		"quoteAuthor": "Will Rogers"
	},
	{
		"quoteContent": "All people are born alike - except Republicans and Democrats.", 
		"quoteAuthor": "Groucho Marx"
	},
	{
		"quoteContent": "If you're going to do something tonight that you'll be sorry for tomorrow morning sleep late.",
		"quoteAuthor": "Henny Youngman"
	},
	{
		"quoteContent": "Life is hard. After all it kills you.",
		"quoteAuthor": "Katharine Hepburn"
	},
	{
		"quoteContent": "My definition of an intellectual is someone who can listen to the William Tell Overture without thinking of the Lone Ranger.",
		"quoteAuthor": "Billy Connolly"
	}

];

var button = document.querySelector("#reset-button");
var quoteText = document.querySelector("#quote-content");
var quoteAuthor = document. querySelector("#quote-author");



// Generate quote on initial page load

$(document).ready(function(){

  $('quote-content').css('color', 'white');
  $('quote-author').css('color', 'white');
  quoteMaker();
});

// Generate another quote when button clicked
button.addEventListener('click', function() {
	quoteMaker();
});



// function to select/generate quote
function quoteMaker() {
	console.log(quoteLib);
	// select quote from library by random
	var quoteNumber = Math.floor(Math.random() * 5);
	console.log(quoteNumber);
	var quote = quoteLib[quoteNumber];
	console.log(quote);
	// pull quote text and author 
	quoteText.textContent = quote.quoteContent;
	quoteAuthor.textContent = quote.quoteAuthor;
}






	