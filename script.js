var coockie = G("#coockie"),
	haut = G("#haut"),
	multip = G("#multip"),
	autocq = G({
		id: "autocq"
	}),
	gauche = G({
		id: "gauche"
	}),
	bouton=[],
	score = 0,
	compteur = 1,
	prix = 50,
	auto = 0,
	prixauto = 200,
	kc = 1,
	auto = 1,
	timer;


var redim = function() {
	var largeur = window.innerWidth;
	var hauteur = window.innerHeight;

	if (largeur < 500) {
		if ((hauteur - 130) > (largeur / 2)) {
			coockie.style.lineHeight = largeur / 2 + "px";
			coockie.style.marginLeft=0+"px";
			coockie.style.width  = 100+"%";
		} else {
			coockie.style.lineHeight = hauteur - 130 + "px";
			coockie.style.width  = hauteur - 130 + "px";
				var marg=((largeur / 2)-(hauteur - 130))/2;
			coockie.style.marginLeft=marg+"px";

		}
	} else {
		if ((hauteur - 130) > (largeur / 3)) {
			coockie.style.lineHeight = largeur / 3 + "px";
			coockie.style.marginLeft=0+"px";
			coockie.style.width  = 100+"%";
		} else {
			coockie.style.lineHeight = hauteur - 130 + "px";
			coockie.style.width  = hauteur - 130 + "px";
			var marg=((largeur / 3)-(hauteur - 130))/2;
			coockie.style.marginLeft=marg+"px";

		}
	}

};

multip.innerHTML = "Multiplicateur x" + compteur + " prix" + prix;
autocq.innerHTML = "Autoclique vitesse x" + auto + " prix" + prixauto;
redim();

window.onresize = redim;

var affsc = function(scor) {
	if (score<prix){
		 multip.classList.add("innact");
	}else{multip.classList.remove("innact")};

	if (score<prixauto){
		autocq.classList.add("innact");
	}else{autocq.classList.remove("innact")};
	var sco = {
		val: 0,
		unite: ""
	};
	if (scor >= 1000000000) {
		sco.val = (scor / 1000000000).toFixed(9);
		sco.unite = "Milliards";
	} else if (scor >= 1000000) {
		sco.val = (scor / 1000000).toFixed(6);
		sco.unite = "Millions";
	} else if (scor >= 1000) {
		sco.val = (scor / 1000).toFixed(3);
		sco.unite = "Milliers";
	} else {
		sco.val = scor;
		sco.unite = "";

	};

	return sco;
};

var cliq = function() {

	gauche.elthtml({
		tag: "div",
		contenu: "+" + compteur,
		duree: 1000,
		prop: ".geph"
	})
	if (Array.isArray(G({
			class: "geph"
		}))) {
		taille = G({
			class: "geph"
		}).length;
		G({
			class: "geph"
		})[taille - 1].style.top = event.clientY + "px";
		G({
			class: "geph"
		})[taille - 1].style.left = event.clientX + "px";
	} else {
		G({
			class: "geph"
		}).style.top = event.clientY + "px";
		G({
			class: "geph"
		}).style.left = event.clientX + "px";

	}
	compt();
};




/*____________________________________________*/
var incrementer = function() {

	if (score >= prix) {
		score = score - prix;
		prix = prix * 2;
		compteur++;

		coockie.innerHTML = affsc(score).val;
		haut.innerHTML = affsc(score).unite;

		multip.innerHTML = "Multiplicateur x" + compteur + "prix\n " + affsc(prix).val + affsc(prix).unite;
	}
};

var activetimer = function() {
	if (score >= prixauto) {
		score = score - prixauto;
		coockie.innerHTML = affsc(score).val;
		haut.innerHTML = affsc(score).unite;
		prixauto = prixauto * 2;

		auto = parseFloat(((auto) + 0.1).toFixed(1));
		clearInterval(timer);
		var timer = setInterval(function() {
			if (auto > 0) {
				compt();
			};
		}, 1000 / (auto));
		autocq.innerHTML = "Autoclique vitesse x" + auto + " prix\n " + affsc(prixauto).val + affsc(prixauto).unite;
	}
};
/*_____________________________________________________*/
var compt = function() {

	score = score + compteur;
	coockie.innerHTML = affsc(score).val;
	haut.innerHTML = affsc(score).unite;
};



/*________________________________________________*/
autocq.addEventListener('click', function(e) {
	e.preventDefault();
	activetimer();
});

multip.addEventListener('click', function(e) {
	e.preventDefault();
	incrementer();
});

coockie.addEventListener('click', function(e) { /*Lorsque l'on clique sur le coockie*/
	e.preventDefault();
	cliq();
});
/*_________________________________________________*/

var creebouton = function(arg){

	var prix = arg.prix,
		idt = arg.idt,
		nom = arg.nom;
		nb =  arg.nb;
	return {
		prix: prix,
		idt: idt,
		nom:nom,
		nb:nb
	};
}

bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));

bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000,
	idt: bouton.length+2,
	nom:"grandmere",
	nb:0
}));


for (var i = 0; i < bouton.length; i++) {
			G("#droite").elthtml({
			contenu: bouton[i].nom+" x" + bouton[i].nb + " prix\n " + affsc(bouton[i].prix).val + affsc(bouton[i].prix).unite,
			tag: "button",
			prop: [".innact","#"+bouton[i].idt]
	});
}










/*_____________________________________________________*/
if (window.addEventListener) {
	var kkeys = [],
		konami = "38,38,40,40,37,39,37,39,66,65";
	window.addEventListener("keydown", function(e) {
		kkeys.push(e.keyCode);
		if (kkeys.toString().indexOf(konami) >= 0) {
			kkeys = []; /*important de vider la liste d'evenements pour avoir a refaire le code en entier) */
			score = score + kc * 1000;
			coockie.innerHTML = affsc(score).val;
			haut.innerHTML = affsc(score).unite;
			kc = kc * 10;
		};
	}, true);
};
