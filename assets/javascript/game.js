// declare variables
var chars = [
		{
			c: {
					name: 'Obiwan Kenobi',
					health: 120,
					attack: 6,
					counter: 7,
					image: "assets/images/obi-wan.jpg"
			}
		},

		{

			c: {
					name: 'Luke Skywalker',
					health: 100,
					attack: 6,
					counter: 5,
					image: "assets/images/luke-skywalker.jpg"
			}
		},

		{
			c: {
					name: 'Darth Sidious',
					health: 140,
					attack: 6,
					counter: 9,
					image: "assets/images/darth-sidious.png"
			}
		}, 

		{
			c: {
					name: 'Darth Maul',
					health: 160,
					attack: 6,
					counter: 11,
					image: "assets/images/darth-maul.jpg"
			}
		}]


var chosen = true;
var index = '';
var enemyArray = [0,1,2,3];
var enemyChosen = true;
var enemyIndex = '';
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
		{
			c: {
					name: 'Obiwan Kenobi',
					health: 120,
					attack: 6,
					counter: 7,
					image: "assets/images/obi-wan.jpg"
			}
		},

		{

			c: {
					name: 'Luke Skywalker',
					health: 100,
					attack: 6,
					counter: 5,
					image: "assets/images/luke-skywalker.jpg"
			}
		},

		{
			c: {
					name: 'Darth Sidious',
					health: 140,
					attack: 6,
					counter: 9,
					image: "assets/images/darth-sidious.png"
			}
		}, 

		{
			c: {
					name: 'Darth Maul',
					health: 160,
					attack: 6,
					counter: 11,
					image: "assets/images/darth-maul.jpg"
			}
		}]

	chosen = true;
	index = '';
	enemyArray = [0,1,2,3];
	enemyChosen = true;
	enemyIndex = '';
	enemyAlive = false;
	enemiesRemaining = 3;
	chosenChar = 0;
	enemyChoice = 0;
	$('.charSelected').remove();
	$('.enemyOption').remove();
	$('.gameStatus').remove();
	$('.enemyDef').remove();
	$('.attack').off();
	$('.enemyOption').off();
	$('.restart').off();
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
		var a = $('<p>').html(chars[i].c.name);
		var b = $('<img>');
		b.attr({
			'src': chars[i].c.image,
			'height': '100px'
		});
		var c = $('<p>').html(chars[i].c.health);
		button.append(a,b,c);
		$('.options').append(button);
	};
	charSelect();
}

// player selects character
function charSelect() {
	$('.charSelect').on('click', function() {
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
	var a = $('<p>').html(chars[index].c.name);
	var b = $('<img>').attr({
		'src': chars[index].c.image,
		'height': '100px'
	});
	var c = $('<p>').html(chars[index].c.health);
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
		var a = $('<p>').html(chars[enemyIndex].c.name);
		var b = $('<img>').attr({
			'src': chars[enemyIndex].c.image,
			'height': '100px'
		});
		var c = $('<p>').html(chars[enemyIndex].c.health);
		button.append(a,b,c);
		$('.enemies').append(button);
	};
	enemyClick();
}

// creates click event listener for when choosing an enemy to fight
function enemyClick() {
	$('.enemyOption').on('click', function() {
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
	var a = $('<p>').html(chars[enemyIndex].c.name);
	var b = $('<img>').attr({
		'src': chars[enemyIndex].c.image,
		'height': '100px',
	});
	var c = $('<p>').html(chars[enemyIndex].c.health);
	c.attr('class', 'enemyHealth');
	div.append(a,b,c);
	$('.defender').append(div);
	$('.gameStatus').html('');
	enemyChosen = false;
	attack();
}

// creates click event listener for attack button
function attack() {
	$('.attack').on('click', function() {
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
	chars[enemyIndex].c.health -= chars[index].c.attack;
	chars[index].c.health -= chars[enemyIndex].c.counter;
	$('.enemyHealth').html(chars[enemyIndex].c.health);
	$('.playerHealth').html(chars[index].c.health);
	damage();
}

// updates player on damage taken and increases attack
var z = $('<p>').attr('class', 'gameStatus');
function damage() {
	z.html( 'You attacked ' + 
		chars[enemyIndex].c.name + ' for ' + 
		chars[index].c.attack + ' damage!' + '\n' +
		chars[enemyIndex].c.name + ' attacked you back for ' + 
		chars[enemyIndex].c.counter + ' damage!');
	$('.defender').append(z);
	chars[index].c.attack += 8;
	playerHealth();
}

// check player's health
function playerHealth() {
	if (chars[index].c.health < 1) {
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
	chars[enemyIndex].c.attack = 0;
	enemyIndex = '';
	index = '';
	restartButton();
}

// check enemy's health
function enemyHealth() {
	if (chars[enemyIndex].c.health < 1) {	
		enemyAlive = false;
		chars[enemyIndex].c.attack = 0;
		enemyDefeated();
	}
}

// tells player that enemy was defeated
function enemyDefeated() {
	$('.gameStatus').html('');
	$('.gameStatus').html(
		'You defeated ' + chars[enemyIndex].c.name + '!!!' +
		'\n' + 'Select next enemy!');
	$('.enemyDef').remove();
	chars[enemyIndex].c.attack = 0;
	enemyChosen = true;
	enemyAlive = false;
	enemiesRemaining -= 1;
	$('.attack').off();
	enemiesLeft();
}

// check if all enemies are defeated
function enemiesLeft() {
	if (enemiesRemaining === 0) {
		enemyAlive = false;
		enemyChosen = false;
		allDefeated();
	} else {
		chars[enemyIndex].c.attack = 0;
		enemyAlive = false;
		enemyChosen = true;
	}
}

// tells player when all enemies are defeated
function allDefeated() {
	$('.gameStatus').html('');
	$('.gameStatus').html('You defeated all enemies! You win! Game Over!!!');
	enemyIndex = '';
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
 	$('.restart').on('click', function() {
 		resetChars();
 	});
 }