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

//loop to create chars
for (var i = 0; i < chars.length; i++) {
	var button = $('<button>');
	button.attr({
		'data-name': chars[i].name,
		'data-health': chars[i].health,
		'data-attack': chars[i].attack,
		'data-counter': chars[i].counter,
		'data-image': chars[i].image
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

$('.options').click(function() {
	// $('.options').hide();
	var div = $('<div>');
	var a = $('<p>').text($(this).data('name'));
	var b = $('<img>').attr({
		'src': $(this).data('image'),
		'height': '100px'
	});
	var c = $('<p>').text($(this).data('health'));
	div.append(a,b,c);
	$('.selected').append(div);
})
