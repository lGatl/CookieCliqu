var bouton		= G("#bouton"),
	haut		= G("#haut"),
	multip		= G("#multip"),
	autocq		= G({id:"autocq"}),
	div			= bouton,
	score		= 0,
	compteur	= 1,
	prix			= 50,
	auto		= 0,
	prixauto	= 200,
	kc			= 1,
	timer;


var redim = function(){
	var largeur = window.innerWidth;
	if (largeur<600){
		bouton.style.lineHeight = largeur/2+"px";
	}else{
		bouton.style.lineHeight = largeur/3+"px";
	}
};

multip.innerHTML = "Multiplicateur x" + compteur + " prix" + prix;
autocq.innerHTML = "Autoclique vitesse x" + auto + " prix" + prixauto;
redim();

window.onresize = redim;

var affsc=function(scor){
	var sco={val:0,unite:""};
	if(scor>=1000000000){sco.val=(scor/1000000000);
	sco.unite="Milliards";
	}else if(scor>=1000000){sco.val=(scor/1000000);
	sco.unite="Millions";
	}else if(scor>=1000){sco.val=(scor/1000);
	 	sco.unite="Milliers";
	}else{
		sco.val=scor;
		sco.unite="";

	};

	 return sco;
};

var cliq = function() {
	score = score + compteur;
	div.innerHTML  	= affsc(score).val;
	haut.innerHTML = affsc(score).unite;
};

var incrementer = function() {
	if (score >= prix) {
		score = score - prix;
		compteur++;
		div.innerHTML  	= affsc(score).val;
		haut.innerHTML = affsc(score).unite;
		prix = prix * 2;
		multip.innerHTML = "Multiplicateur x" + compteur + " prix " + prix;
	}
};

var activetimer = function() {
	if (score >= prixauto) {
		score = score - prixauto;
		div.innerHTML  	= affsc(score).val;
		haut.innerHTML = affsc(score).unite;
		prixauto = prixauto * 2;
		auto++;
		clearInterval(timer);
		var timer = setInterval(function() {
			if (auto > 0) {
				cliq();
			};
		}, 1000 / (auto));
		autocq.innerHTML = "Autoclique vitesse x" + auto + " prix " + prixauto;
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
			kkeys = []; /*important de vider la liste d'evenements pour avoir a refaire le code en entier) */
			score = score+kc*1000;
			div.innerHTML  	= affsc(score).val;
			haut.innerHTML = affsc(score).unite;
			kc=kc*10;
		};
	}, true);
};













