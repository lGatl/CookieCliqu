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
	wi,
	hi,
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

var testinnact=function(){
	for(var b=0;b<bouton.length;b++){
		if (score<bouton[b].prix){
		 G("#"+(b+2)).classList.add("innact");
		}else{ G("#"+(b+2)).classList.remove("innact")};

	}

	if (score<prix){
		 multip.classList.add("innact");
	}else{multip.classList.remove("innact")};;

	if (score<prixauto){
		autocq.classList.add("innact");
	}else{autocq.classList.remove("innact")};;
	var sco = {
		val: 0,
		unite: ""
	};
}
var affsc = function(scor) {
	sco={}
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

var cliq = function(event) {

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
	compt(compteur);
};




/*____________________________________________*/
var incrementer = function() {

	if (score >= prix) {
		score = score - prix;
		prix = prix * 2;
		compteur++;
		testinnact()
		coockie.innerHTML = affsc(score).val;
		haut.innerHTML = affsc(score).unite;

		multip.innerHTML = "Multiplicateur x " + compteur + " prix \n " + affsc(prix).val +" " +affsc(prix).unite;
	}
};

var activetimer = function() {
	if (score >= prixauto) {
		score = score - prixauto;
		testinnact()
		coockie.innerHTML = affsc(score).val;
		haut.innerHTML = affsc(score).unite;
		prixauto = prixauto * 2;

		auto = parseFloat(((auto) + 0.1).toFixed(1));
		clearInterval(timer);
		var timer = setInterval(function() {
			if (auto > 0) {
				compt(compteur);
			};
		}, 1000 / (auto));
		autocq.innerHTML = "Autoclique vitesse x " + auto + " prix \n " + affsc(prixauto).val + " "+affsc(prixauto).unite;
	}
};

var activebouton = function (btn) {

	var prixb = bouton[btn.id-2].prix,
		idt = bouton[btn.id-2].idt,
		nom = bouton[btn.id-2].nom,
		nb =  bouton[btn.id-2].nb;

	if (score>prixb) {
		score = score - prixb;
		testinnact();
		coockie.innerHTML = affsc(score).val;
		haut.innerHTML = affsc(score).unite;
		prixb = prixb * 2;

		nb++
		var comp=nb*Math.pow(10,idt)

		if("timer" + idt){clearInterval(eval("timer" + idt))};
		(function(comp){
		window["timer" + idt]= setInterval(function() {

				compt(comp);

		}, 2000 / (auto));
	})(comp)
		G("#"+( idt)).innerHTML =nom+"nb x "+nb*Math.pow(10,idt)+ " prix \n " + affsc(prixb).val + " "+affsc(prixb).unite;

	}

	return  {prix: prixb,
			idt: idt,
			nom: nom,
			nb: nb}
};

/*_____________________________________________________*/
var compt = function(comp) {

	score = score + comp;
	coockie.innerHTML = affsc(score).val;
	haut.innerHTML = affsc(score).unite;
	testinnact()
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
	cliq(e);
});

var enf=function(){
		coockie.classList.add("enfonc")
	coockie.classList.remove("relach")
}

var rel=function(){
		coockie.classList.remove("enfonc")
	coockie.classList.add("relach")
}
coockie.addEventListener("mousedown", function(){enf()});

coockie.addEventListener("mouseup", function(){rel()});

coockie.addEventListener("touchstart", function(){enf()})	;

coockie.addEventListener("touchend", function(){rel()});
/*_________________________________________________*/

var creebouton = function(arg){

	var prix = arg.prix,
		idt = arg.idt,
		nom = arg.nom,
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
	prix: 50000,
	idt: bouton.length+2,
	nom:"grandpere",
	nb:0
}));
bouton.push(creebouton({
	prix: 500000,
	idt: bouton.length+2,
	nom:"invasion",
	nb:0
}));
bouton.push(creebouton({
	prix: 5000000,
	idt: bouton.length+2,
	nom:"matrix",
	nb:0
}));
bouton.push(creebouton({
	prix: 50000000,
	idt: bouton.length+2,
	nom:"nucleaira",
	nb:0
}));
bouton.push(creebouton({
	prix: 500000000,
	idt: bouton.length+2,
	nom:"scoot",
	nb:0
}));

bouton.push(creebouton({
	prix: 5000000000,
	idt: bouton.length+2,
	nom:"boulanger",
	nb:0
}));
bouton.push(creebouton({
	prix: 50000000000,
	idt: bouton.length+2,
	nom:"boucher",
	nb:0
}));
bouton.push(creebouton({
	prix: 500000000000,
	idt: bouton.length+2,
	nom:"machine magique",
	nb:0
}));


for (var i = 0; i < bouton.length; i++) {
			G("#droite").elthtml({
			contenu: bouton[i].nom+" x" + bouton[i].nb + " prix\n " + affsc(bouton[i].prix).val + affsc(bouton[i].prix).unite,
			tag: "button",
			prop: [".innact","#" + bouton[i].idt , ".bouton"]
			});
			 window["timer" +bouton[i].idt]={}

}

for (var i = 0; i < G(".bouton").length ; i++) {

	G(".bouton")[i].addEventListener('click', function(e) {
	e.preventDefault();
	var th = this;
	 bouton[this.id-2]=activebouton(th);

	});
}

testinnact()












/*_____________________________________________________*/
if (window.addEventListener) {
	var kkeys = [],
		konami = "38,38,40,40,37,39,37,39,66,65";
	window.addEventListener("keydown", function(e) {
		kkeys.push(e.keyCode);
		if (kkeys.toString().indexOf(konami) >= 0) {
			kkeys = [];/* important de vider la liste d'evenements pour avoir a refaire le code en entier)*/
			score = score + kc * 100000;
			testinnact()
			coockie.innerHTML = affsc(score).val;
			haut.innerHTML = affsc(score).unite;
			kc = kc * 10;
		};
	}, true);
};
