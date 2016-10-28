// declare variables
var chars = [
	obiwan = {
			name: 'Obiwan Kenobi',
			health: 120,
			attack: 8,
			counter: 10,
			image: "assets/images/obi-wan.jpg"
	},

	luke = {
			name: 'Luke Skywalker',
			health: 100,
			attack: 8,
			counter: 5,
			image: "assets/images/luke-skywalker.jpg"
	},

	sidious = {
			name: 'Darth Sidious',
			health: 150,
			attack: 8,
			counter: 15,
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

var chosen = true;
var index = 0;
var enemyArray = [0,1,2,3];
var enemyChosen = true;
var enemyIndex = 0;
var enemyAlive = false;
var enemiesRemaining = 3;
var chosenChar;
var enemyChoice;

$('document').ready(function(){
	resetChars();
});

// resets characters
function resetChars() {
	chars = [
		obiwan = {
				name: 'Obiwan Kenobi',
				health: 120,
				attack: 8,
				counter: 10,
				image: "assets/images/obi-wan.jpg"
		},

		luke = {
				name: 'Luke Skywalker',
				health: 100,
				attack: 8,
				counter: 5,
				image: "assets/images/luke-skywalker.jpg"
		},

		sidious = {
				name: 'Darth Sidious',
				health: 150,
				attack: 8,
				counter: 15,
				image: "assets/images/darth-sidious.png"
		},

		maul = {
				name: 'Darth Maul',
				health: 180,
				attack: 8,
				counter: 25,
				image: "assets/images/darth-maul.jpg"
		}
	];

chosen = true;
index = 0;
enemyArray = [0,1,2,3];
enemyChosen = true;
enemyIndex = 0;
enemyAlive = false;
enemiesRemaining = 3;
chosenChar = 0;
enemyChoice = 0;
$('.charSelected').remove();
$('.enemyOption').remove();
$('.gameStatus').remove();
$('.enemyDef').remove();
createCharSelection();
}

// create characters in DOM
function createCharSelection() {
	for (var i = 0; i < chars.length; i++) {
		var button = $('<button>');
		button.attr({
			'data-index': i,
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
	};
	charSelect();
}

// player selects character
function charSelect() {
	$('.charSelect').click(function() {
		chosenChar = $(this);
		checkChosen();
	});
}

// check if player has previously chosen a character
function checkChosen() {
	if (chosen) {
		chosen = false;
		charSelected();
	}
}

// appends selected character to div
function charSelected() {
	index = chosenChar.data('index');
	var div = $('<div>').attr('class', 'charSelected');
	var a = $('<p>').html(chars[index].name);
	var b = $('<img>').attr({
		'src': chars[index].image,
		'height': '100px'
	});
	var c = $('<p>').html(chars[index].health);
	c.attr('class', 'playerHealth');
	div.append(a,b,c);
	$('.selected').append(div);
	$('.charSelect').hide();
	enemyOptions();
}

// creates enemy options
function enemyOptions() {
	enemyArray.splice(index, 1);
	for (var i = 0; i < enemyArray.length; i++) {
		var enemyIndex = enemyArray[i];
		var button = $('<button>');
		button.attr({
			'data-index': enemyIndex,
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
	};
	enemyClick();
}

// creates click event listener for when choosing an enemy to fight
function enemyClick() {
	$('.enemyOption').click(function() {
		enemyChoice = $(this);
		enemyWasChosen();
	});
}

// check if enemy has already been chosen prevously
function enemyWasChosen() {
	if (enemyChosen) {
		enemyChosen = false;
		enemyAlive = true;
		enemySelect();
	}
}

// append selected enemy to div
function enemySelect() {
	enemyIndex = enemyChoice.data('index');
	enemyArray.splice(enemyIndex, 1);
	enemyChoice.hide();
	var div = $('<div>');
	div.attr({
		'data-index': enemyIndex,
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
	$('.gameStatus').html('');
	enemyChosen = false;
	attack();
}

// creates click event listener for attack button
function attack() {
	$('.attack').click(function() {	
		isEnemyAlive();
	});
}

// check if enemy is alive
function isEnemyAlive() {
	if (enemyAlive) {
		enemyAttacked();
	}
}

//reduce health of player and enemy 
function enemyAttacked() {
	chars[enemyIndex].health -= chars[index].attack;
	chars[index].health -= chars[enemyIndex].counter;
	$('.enemyHealth').html(chars[enemyIndex].health);
	$('.playerHealth').html(chars[index].health);
	damage();
}

// updates player on damage taken and increases attack
var z = $('<p>').attr('class', 'gameStatus');
function damage() {
	z.html( 'You attacked ' + 
		chars[enemyIndex].name + ' for ' + 
		chars[index].attack + ' damage!' + '\n' +
		chars[enemyIndex].name + ' attacked you back for ' + 
		chars[enemyIndex].counter + ' damage!');
	$('.defender').append(z);
	chars[index].attack += 8;
	playerHealth();
}

// check player's health
function playerHealth() {
	if (chars[index].health < 1) {
		enemyAlive = false;
		playerDefeated();
	} else {
		enemyHealth();
	}
}
	
// player was defeated
function playerDefeated() {
	$('.gameStatus').html('You were defeated! Game Over!');
	enemyAlive = false;
	chars[enemyIndex].attack = 0;
	restartButton();
}

// check enemy's health
function enemyHealth() {
	if (chars[enemyIndex].health < 1) {	
		enemyAlive = false;
		chars[enemyIndex].attack = 0;
		enemyDefeated();
	}
}

// tells player that enemy was defeated
function enemyDefeated() {
	$('.attack').click(function(){});
	$('.gameStatus').html('');
	$('.gameStatus').html(
		'You defeated ' + chars[enemyIndex].name + '!!!' +
		'\n' + 'Select next enemy!');
	$('.enemyDef').remove();
	chars[enemyIndex].attack = 0;
	enemyChosen = true;
	enemyAlive = false;
	enemiesRemaining -= 1;
	enemiesLeft();
}

// check if all enemies are defeated
function enemiesLeft() {
	if (enemiesRemaining === 0) {
		enemyAlive = false;
		enemyChosen = false;
		allDefeated();
	} else {
		chars[enemyIndex].attack = 0;
		enemyAlive = false;
		enemyChosen = true;
	}
}

// tells player when all enemies are defeated
function allDefeated() {
	$('.gameStatus').html('');
	$('.gameStatus').html('You defeated all enemies! You win! Game Over!!!');
	restartButton();
}

// creates restart button
function restartButton() {
	var button = $('<button>').attr('class', 'restart').html('Restart');
	$('.gameStatus').append(button);
	$('.enemyDef').remove();
	restart();
}

// reset game when restart button is clicked
function restart() {
 	$('.restart').click(function() {
 		resetChars();
 	});
 }