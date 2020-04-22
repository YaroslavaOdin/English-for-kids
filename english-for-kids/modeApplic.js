
nameCategory = getCookie('category');

function clickChbx() {
	var chbox;
	chbox = document.getElementById('switch');
	deleteCookie('mode_application');

	//чистим div с errors
	if(document.getElementById('errorSuccess')) {
		document.getElementById('errorSuccess').innerHTML = "";
	};
	
	if(chbox.checked) {
		setCookie('mode_application', 'mode_play');

		var elem = document.getElementById('menu');
		elem.classList.remove('burger-menu_nav');
 		elem.classList.add('burger-menu_nav_play');

 		//правим главную страницу
 		if (document.getElementById('id_card_gard_1')) {
 			for (let i = 1; i < 9; i++) {
	     		var elem = document.getElementById("id_card_gard_" + i);
	     		elem.classList.remove('card_grad');
	     		elem.classList.add('card_grad_play');
	     	};
 		};

		//правим div на клик по картинке
 		if(document.getElementsByClassName('front_side')) {
			var divFront = document.getElementsByClassName('front_side');
			for(let elem of divFront) {
				elem.removeAttribute('onclick');
			};
 		};

 		//правим вид рисунков
 		if(document.getElementById("img_1")) {
 			for (let i = 1; i < 9; i++) {
 				var elem = document.getElementById("img_" + i);
 				var srcImgMap = elem.getAttribute('src');
 				elem.setAttribute('onclick', "checkImgAudio('" + srcImgMap + "','img_" + i + "')");
 				elem.classList.remove('img_play_click');
            	elem.classList.add('img_play');
 			};
 		};

 		//правим надпись под картинкой и стрелки
 		if(document.getElementById("div_text_arrows_1")) {
 			for (let i = 1; i < 9; i++) {
 				var elem = document.getElementById("div_text_arrows_" + i);
 				elem.style.display = 'none';
 			};
 		};

 		//insert button Startgame
 		if(document.getElementsByClassName('card_container')) {
 			var divParent = document.getElementsByClassName('card_container');
 			if(divParent[0]) {
 				var divButton = document.createElement('div');
	        	divButton.setAttribute('id', 'divButton');
	        	divParent[0].append(divButton);

	        	var buttonPlay = document.createElement('input');
	        	buttonPlay.setAttribute('type', 'button');
	        	buttonPlay.setAttribute('id', 'buttonPlay');
	       		buttonPlay.setAttribute('onclick', "satrtGame('" + nameCategory + "')");
	        	buttonPlay.setAttribute('value', 'Start Game');
	        	divButton.append(buttonPlay);
 			};
		};
 	};

	if(!chbox.checked) {
		setCookie('mode_application', 'mode_train');

		var elem = document.getElementById("menu");
		elem.classList.remove('burger-menu_nav_play');
 		elem.classList.add('burger-menu_nav');

 		//правим главную страницу
		if (document.getElementById("id_card_gard_1")) {
 			for (let i = 1; i < 9; i++) {
	     		var elem = document.getElementById("id_card_gard_" + i);
	     		elem.classList.remove('card_grad_play');
	     		elem.classList.add('card_grad');
	     	};
 		};

 		//правим вид рисунков
 		if(document.getElementById("img_1")) {
 			for (let i = 1; i < 9; i++) {
 				var elem = document.getElementById("img_" + i);
 				elem.removeAttribute('onclick');
            	elem.classList.remove('img_play');
            	elem.classList.remove('img_play_click');
 			};
 		};

 		//правим надпись под картинкой и стрелки
 		if(document.getElementById("div_text_arrows_1")) {
 			for (let i = 1; i < 9; i++) {
 				var elem = document.getElementById("div_text_arrows_" + i);
 				elem.removeAttribute("style");
 			};
 		};

 		//правим div на клик по картинке
 		if(document.getElementsByClassName('front_side')) {
 			if(document.getElementsByClassName('front_side').length > 0) {
 				let mapCards;
 				for(let i = 0; i < arrCategory.length; i++) {
 					if(nameCategory == arrCategory[i]) {
 						mapCards = arr_cards_all[i];
 					};
 				};

			    let indexElem = 0;
			    for (let mapCard of mapCards.values()) {
				    let index = 1
				    let audioPlMap = '';
				    for (let cardMap of mapCard.values()) {
				        if( index == 3) {
				          audioPlMap = cardMap;
				        };
				        index ++;
				    };
				    var divFront = document.getElementsByClassName('front_side')[indexElem];
				    divFront.setAttribute('onclick', audioPlMap);
				    indexElem ++;
				};
 			};
 		};

 		//del button Startgame
 		if(document.getElementById("divButton")) {
 			var elem = document.getElementById('divButton');
			elem.parentNode.removeChild(elem)
 		};
	};
}

//запускается после заагрузки страницы (меню, категория)
function changeStyleDocument() {
	var elem = document.getElementById("menu");
	elem.classList.remove('burger-menu_nav');
	elem.classList.add('burger-menu_nav_play');
	
	if (document.getElementById("id_card_gard_1")) {
		for (let i = 1; i < 9; i++) {
 		var elem = document.getElementById("id_card_gard_" + i);
 		elem.classList.remove('card_grad');
 		elem.classList.add('card_grad_play');
     	};
	};
}