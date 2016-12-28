var bouton=G("#bouton"), div=G("#affichage"),multip=G("#multip"),autocq=G("#autocq"),
score=0,compteur=1,prix=50,auto=0, prixauto=200,timer;
multip.innerHTML="Multiplicateur x"+compteur+ " prix"+prix;
autocq.innerHTML="Autoclique vitesse x"+auto+ " prix"+prixauto;



bouton.addEventListener('click', function(e){         /*Lorsque l'on clique sur le bouton*/
    e.preventDefault();
    cliq();

});

multip.addEventListener('click', function(e){
	e.preventDefault();
	incrementer();
});

var cliq=function(){
		score = score + compteur;
		div.innerHTML=score;
}

var incrementer = function(){
	if(score>=prix){
		score=score-prix;
		compteur++;
		div.innerHTML=score;
		prix=prix*2;
		multip.innerHTML="Multiplicateur x"+compteur+ " prix"+prix;
	}
};

autocq.addEventListener('click', function(e){
	e.preventDefault();
	activetimer();
  });

var activetimer=function() {
	 if(score>=prixauto){
	    	score=score-prixauto;
	    	div.innerHTML=score;
	    	prixauto=prixauto*2;
	    	auto++;
	   	clearInterval(timer);
	  	 var timer=setInterval(function(){
			if(auto>0){cliq()}
			console.log(auto)
		}, 1000/(auto))
	  	 autocq.innerHTML="Autoclique vitesse x"+auto+ " prix"+prixauto;
	 }
}


