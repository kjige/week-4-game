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
	var a = $('<p>').html(chars[i].name);
	var b = $('<img>');
	b.attr({
		'src': chars[i].image,
		'height': '100px'
	});
	var c = $('<p>').html(chars[i].health);
	button.append(a,b,c);
	$('.options').append(button);
}

// player selects character
var chosen = true;
var index;
var enemyArray = [0,1,2,3];
if (chosen) {
	$('.charSelect').click(function() {
		$('.options').hide();
		index = $(this).data('index');
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

	// creates enemy options	
	enemyArray.splice(index, 1);
	for (var i = 0; i < enemyArray.length; i++) {
		var enemyIndex = enemyArray[i];
		var button = $('<button>');
		button.attr({
			'data-index': [enemyIndex],
			'class': 'enemyOption'
		});
		var a = $('<p>').html(chars[enemyIndex].name);
		var b = $('<img>').attr({
			'src': chars[enemyIndex].image,
			'height': '100px'
		});
		var c = $('<p>').html(chars[enemyIndex].health);
		button.append(a,b,c);
		$('.enemies').append(button);
	}
	})
}

// player selects enemy to attack
var enemyChosen = true;
var enemyIndex;
if (enemyChosen) {
	$('.enemyOption').click(function() {
		enemyIndex = $(this).data('index');
		var div = $('<div>');
		div.attr({
			'data-index': [enemyIndex],
			'class': 'enemyDef'
		});
		var a = $('<p>').html(chars[enemyIndex].name);
		var b = $('<img>').attr({
			'src': chars[enemyIndex].image,
			'height': '100px',
		});
		var c = $('<p>').html(chars[enemyIndex].health);
		div.append(a,b,c);
		$('.defender').append(div);
		enemyChosen = false;
	});
console.log(enemyIndex);
}

