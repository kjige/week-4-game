var chars = [
	obiwan = {
			name: 'Obiwan Kenobi',
			health: 120,
			attack: 8,
			counter: 15,
			image: "assets/images/obi-wan.jpg"
	},

	luke = {
			name: 'Luke Skywalker',
			health: 100,
			attack: 8,
			counter: 10,
			image: "assets/images/luke-skywalker.jpg"
	},

	sidious = {
			name: 'Darth Sidious',
			health: 150,
			attack: 8,
			counter: 20,
			image: "assets/images/darth-sidious.png"
	},

	maul = {
			name: 'Darth Maul',
			health: 180,
			attack: 8,
			counter: 25,
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
var enemyChosen = true;
var enemyIndex;
var enemyAlive = true;
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
		c.attr('class', 'playerHealth');
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

		// player selects enemy to attack
		$('.enemyOption').click(function() {
			if (enemyChosen) {
				enemyIndex = $(this).data('index');
				$(this).hide();
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
				c.attr('class', 'enemyHealth');
				div.append(a,b,c);
				$('.defender').append(div);
				enemyChosen = false;
				enemyAlive = true;
			};
		});

		// when attack button is clicked
		var a = $('<p>').attr('class', 'gameStatus');
		$('.attack').click(function() {	

			//reduce health of player and enemy 
			if (enemyAlive) {
				chars[enemyIndex].health -= chars[index].attack;
				chars[index].health -= chars[enemyIndex].counter;
				$('.enemyHealth').html(chars[enemyIndex].health);
				$('.playerHealth').html(chars[index].health);
				a.html(
					'You attacked ' + chars[enemyIndex].name + ' for ' + chars[index].attack + ' damage!\r' +
					chars[enemyIndex].name + ' attacked you back for ' + chars[enemyIndex].counter + ' damage!'
					);
				$('.defender').append(a);
				chars[index].attack += 8;
			}

			// check player's health
			if (chars[index].health < 1) {
				$('.gameStatus').html('You were defeated! Game Over!');
				$('<button>').attr('class', 'restart').html('Restart');
				enemyAlive = false;
				
			// check enemy's health
			} else if (chars[enemyIndex].health < 1) {
				$('.gameStatus').html(
					'You defeated ' + chars[enemyIndex].name + '!!!\r' +
					'Select next enemy!');
				$('.enemyDef').hide();
				enemyAlive = false;
				enemyChosen = true;
			}
		})
	});
}

