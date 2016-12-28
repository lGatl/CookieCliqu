var bouton		= G("#bouton"),
	div			= G("#affichage"),
	multip		= G("#multip"),
	autocq		= G("#autocq"),
	score		= 0,
	compteur	= 1,
	prix			= 50,
	auto		= 0,
	prixauto	= 200,
	kc			= 1,
	timer;

multip.innerHTML = "Multiplicateur x" + compteur + " prix" + prix;
autocq.innerHTML = "Autoclique vitesse x" + auto + " prix" + prixauto;

var cliq = function() {
	score = score + compteur;
	div.innerHTML = score;
};

var incrementer = function() {
	if (score >= prix) {
		score = score - prix;
		compteur++;
		div.innerHTML = score;
		prix = prix * 2;
		multip.innerHTML = "Multiplicateur x" + compteur + " prix" + prix;
	}
};

var activetimer = function() {
	if (score >= prixauto) {
		score = score - prixauto;
		div.innerHTML = score;
		prixauto = prixauto * 2;
		auto++;
		clearInterval(timer);
		var timer = setInterval(function() {
			if (auto > 0) {
				cliq();
			};
		}, 1000 / (auto));
		autocq.innerHTML = "Autoclique vitesse x" + auto + " prix" + prixauto;
	}
};

autocq.addEventListener('click', function(e) {
	e.preventDefault();
	activetimer();
});

multip.addEventListener('click', function(e) {
	e.preventDefault();
	incrementer();
});

bouton.addEventListener('click', function(e) { /*Lorsque l'on clique sur le bouton*/
	e.preventDefault();
	cliq();
});

if ( window.addEventListener ) {
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
	window.addEventListener("keydown", function(e){
		kkeys.push( e.keyCode );
		if ( kkeys.toString().indexOf( konami ) >= 0 ) {
			kkeys = []; /*important de vider la liste d'evenements pour que le convertisseur soit toujours utilisable ;) */
			score = score+kc*1000;
			div.innerHTML = score;
			kc=kc*10;
		};
	}, true);
};













