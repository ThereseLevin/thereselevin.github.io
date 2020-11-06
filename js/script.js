// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Härifrån fick Ida klamydia",
					answer: "Biltema",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Här träffade Ida skåningarna för första gången",
					answer: "emmaboda",
					position: 2,
					orientation: "across",
					startx: 9,
					starty: 1
				},
				{
					clue: "Created from a separation of charge",
					answer: "capacitance",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "Vad vinner Ida alltid i?",
					answer: "uno",
					position: 8,
					orientation: "across",
					startx: 9,
					starty: 5
				},
				{
					clue: "Fågelröv",
					answer: "gump",
					position: 10,
					orientation: "across",	
					startx: 1,
					starty: 7
				},
				{
					clue: "Idas nuvarande yrke",
					answer: "målare",
					position: 13,
					orientation: "across",
					startx: 5,
					starty: 9
				},
				{
					clue: "Type of ray emitted frm the sun",
					answer: "gamma",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "C programming language operator",
					answer: "cysan",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clue: "Vem vill slicka Idas fötter",
					answer: "Battulga",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "Den här sliten har Daniel",
					answer: "emo",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "Här härstammar Idas katt ifrån",
					answer: "mumindalen",
					position: 4,
					orientation: "down",
					startx: 10,
					starty: 1
				},
				{
					clue: "Här härstammar Idas katt ifrån",
					answer: "Mumin",
					position: 6,
					orientation: "down",
					startx: 8,
					starty: 3
				},
				{
					clue: "Vad brukar finnas i Idas mun",
					answer: "snus",
					position: 7,
					orientation: "down",
					startx: 9,
					starty: 3
				},
				{
					clue: "Idas true identity",
					answer: "darling",
					position: 9,
					orientation: "down",
					startx: 15,
					starty: 1
				},
				{
					clue: "Emits a lout wailing sound",
					answer: "siren",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "Information technology (abbr.)",
					answer: "it",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: "Asynchronous transfer mode (abbr.)",
					answer: "atm",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "Idas favoritfisk",
					answer: "ål",
					position: 15,
					orientation: "down",
					startx: 6,
					starty: 9
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
