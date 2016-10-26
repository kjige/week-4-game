var obiwan = {
		name: 'Obiwan Kenobi',
		health: 120,
		attack: 6,
		counter: 20,
		image: "assets/images/obi-wan.jpg"
}

var luke = {
		name: 'Luke Skywalker',
		health: 100,
		attack: 6,
		counter: 10,
		image: "assets/images/luke-skywalker.jpg"
}

var sidious = {
		name: 'Darth Sidious',
		health: 140,
		attack: 6,
		counter: 30,
		image: "assets/images/darth-sidious.png"
}

var maul = {
		name: 'Darth Maul',
		health: 160,
		attack: 6,
		counter: 40,
		image: "assets/images/darth-maul.jpg"
}

function createObiwan() {
	var a = $('<p></p>').text(obiwan.name);
	$(this).append(a);
	var b = $('<img></img>');
	b.attr({
		'src': obiwan.image,
		'height': '100px',
		})
	$(this).append(b);
	var c = $('<p></p>').text(obiwan.health);
	$(this).append(c);
}

function createLuke() {
	var a = $('<p></p>').text(luke.name);
	$(this).append(a);
	var b = $('<img></img>');
	b.attr({
		'src': luke.image,
		'height': '100px',
		})
	$(this).append(b);
	var c = $('<p></p>').text(luke.health);
	$(this).append(c);
}

function createSidious() {
	var a = $('<p></p>').text(sidious.name);
	$(this).append(a);
	var b = $('<img></img>');
	b.attr({
		'src': sidious.image,
		'height': '100px',
		})
	$(this).append(b);
	var c = $('<p></p>').text(sidious.health);
	$(this).append(c);
}

function createMaul() {
	var a = $('<p></p>').text(maul.name);
	$(this).append(a);
	var b = $('<img></img>');
	b.attr({
		'src': maul.image,
		'height': '100px',
		})
	$(this).append(b);
	var c = $('<p></p>').text(maul.health);
	$(this).append(c);
}

$('.chooseObiwan').createObiwan();
$('.chooseLuke').createLuke();
$('.chooseSidious').createSidious();
$('.chooseMaul').createMaul();
