var chars = [
	obiwan = {
			name: 'Obiwan Kenobi',
			health: 120,
			attack: 6,
			counter: 20,
			image: "assets/images/obi-wan.jpg"
	},

	luke = {
			name: 'Luke Skywalker',
			health: 100,
			attack: 6,
			counter: 10,
			image: "assets/images/luke-skywalker.jpg"
	},

	sidious = {
			name: 'Darth Sidious',
			health: 140,
			attack: 6,
			counter: 30,
			image: "assets/images/darth-sidious.png"
	},

	maul = {
			name: 'Darth Maul',
			health: 160,
			attack: 6,
			counter: 40,
			image: "assets/images/darth-maul.jpg"
	}
]

//loop to create characters
for (var i = 0; i < chars.length; i++) {
	var button = $('<button>');
	button.attr({
		'data-index': [i],
		'class': 'charSelect'
	});
	var a = $('<p>').text(chars[i].name);
	var b = $('<img>');
	b.attr({
	'src': chars[i].image,
	'height': '100px'
	});
	var c = $('<p>').text(chars[i].health);
	button.append(a,b,c);
	$('.options').append(button);
}

// player selects character
var chosen = true;
if (chosen) {
	$('.charSelect').one('click', function() {
		$('.options').hide();
		var index = $(this).data('index');
		var div = $('<div>');
		var a = $('<p>').html(chars[index].name);
		var b = $('<img>').attr({
			'src': chars[index].image,
			'height': '100px'
		});
		var c = $('<p>').html(chars[index].health);
		div.append(a,b,c);
		$('.selected').append(div);
		chosen = false;
	})
}


