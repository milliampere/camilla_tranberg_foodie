/*********************************/
/*   Vad ska du laga för mat?    */
/*     av Camilla Tranberg,  	 */
/*       18 november 2016        */
/*********************************/

/*********************/
/*     Maträtter     */
/*********************/

//Konstruktor 
function dish(name, veg, url){
	this.name  = name;
	this.veg = veg;
	this.url = url;
}

//Skapar maträtter
var dishes = [
	new dish("Palak Paneer", true, "http://www.manjulaskitchen.com/palak-paneer-2016/"),
	new dish("Gulaschsoppa", false, "http://www.tasteline.com/recept/gulashsoppa/"), 
	new dish("Pannkakor/plättar med sylt & grädde", true, "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/"),
	new dish("Baconinlindad kycklingfile", false, "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"),
	new dish("Majsplättar med avokadoröra", true, "https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"),
	new dish("Grönkålssoppa med chorizo", false, "http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WCxTNcn3b9I"),
	new dish("Lasagne med köttfärssås", false, "http://www.koket.se/lasagne-med-kottfarssas"),
	new dish("Pastagratäng med rökt lax och spenat", false, "www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"),
	new dish("Thaigryta med kyckling", false, "http://www.koket.se/mitt-kok/donal-skehan/thaigryta-med-kyckling/"),
	new dish("Lax med nudelsallad", false, "https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander"),
	new dish("Lasagne med halloumi, spenat och pumpakärnor", true, "www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/"),
	new dish("Rödbetsrisotto med hyvlad halloumi och valnötter", true, "www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/"),
	new dish("Halstrad tonfisk med avokadohummus", false, "www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"),
	new dish("Viltskavsgryta med mandelpotatispuré & rårörda lingon", false, "https://www.mathem.se/recept/viltskavsgryta-med-mandelpotatispure-o-rarorda-lingon"),
	new dish("Coq Au Vin", false, "http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html"),
	new dish("Indisk linssoppa ”Mulligatawny”", true, "http://www.ica.se/recept/indisk-linssoppa-mulligatawny-718554/"),
	new dish("Falafel med hummus, yoghurtdressing och picklad rödlök ", true, "http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/"),
	new dish("Vegetarisk pastagratäng", true, "https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/"),
	new dish("Morotsbiffar", true, "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"),
	new dish("Biff teriyaki", false, "http://www.arla.se/recept/biff-teriyaki"),
	new dish("Korvstroganoff", false, "http://www.ica.se/recept/korvstroganoff-med-ris-533512/"),
	new dish("Ugnssteks falukorv med rostade rotsaker", false, "http://www.ica.se/recept/ugnsstekt-falukorv-med-rostade-rotfrukter-713615/")
];	


/*********************/
/*     Knapp         */
/*********************/

//Hämtar knapp
var generateButton = document.getElementById("generateButton");
//När knappen klickas på slumpas maträtt fram som visas på hemsidan
generateButton.addEventListener("click", showDish);


/*********************/
/*     Slumpa     */
/*********************/

// Funktion som hämtar en slumpad maträtt 
function getRandomDish(){

// ALTERNATIV 1
//	// Hämtar slumpmässigt objekt i arrayen
//	var randomDish = dishes[Math.floor(Math.random()*dishes.length)];
//
//	// Kollar om användaren endast vill se vegetariska rätter
//	var vegoCheckbox = document.getElementById("vegoCheckbox");
//	if (vegoCheckbox.checked === true) {		
//		//Skapar en ny array med vegetariska rätter
//		var vegoDishes = [];
//		for(let i = 0; i < dishes.length; i++){
//			if(dishes[i].veg === true){
//				vegoDishes.push(dishes[i]);
//			}
//		}
//		//Hämtar slumpad rätt ut vego-arrayen
//		randomDish = vegoDishes[Math.floor(Math.random()*vegoDishes.length)];
//	}
//
//	return randomDish;

// ALTERNATIV 2 
	// Hämtar slumpmässigt objekt i arrayen
	var randomDish = dishes[Math.floor(Math.random()*dishes.length)];

	// Kollar om användaren endast vill se vegetariska rätter
	if (vegoCheckbox.checked === true) {
		// Hämtar nya rätter tills vegetarisk rätt kommer upp
		while(randomDish.veg === false){
			randomDish = dishes[Math.floor(Math.random()*dishes.length)];
		}
	}

	return randomDish;
}

/*********************/
/*     Resultat      */
/*********************/

// Funktion som visar maträtten på hemsidan
function showDish(){
	//Hämtar p-taggen
	var result = document.getElementById("result");
	var dishToDisplay = getRandomDish();
	
	// Kapar namnet på maträtten om den är fler tecken än vad som blir snyggt i diven
	if(dishToDisplay.name.length > 70){
		dishToDisplay.name = dishToDisplay.name.substring(0,70) + "...";
	}

	// Lägger in url till recept
	result.setAttribute("href", dishToDisplay.url);

	//Skriver över
	result.innerHTML = dishToDisplay.name;
}










