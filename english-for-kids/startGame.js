
let arrMix;
let indexArrMixRepeat;

function satrtGame(nameCategory) {
	console.log(" satrtGame(nameCategory) :: ", nameCategory);
	
	let buttonStart = document.getElementById('buttonPlay');
	if(buttonStart.value == 'Start Game') {
		for(let i = 0; i < arrCategory.length; i++) {
	        if(nameCategory == arrCategory[i]) {
	        	arrMix = mix(arrAudioAll[i]);
	            break;
	        };
    	};

		buttonStart.value = 'Repeat';
		playAudio(arrMix[0]);
		indexArrMixRepeat = 0;
	} else {
		if(buttonStart.value == 'Repeat') {
			repeat(indexArrMixRepeat, arrMix);
		};
	};
}

function mix(firstArr) {
	var currentIndex = firstArr.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
		temporaryValue = firstArr[currentIndex];
	    firstArr[currentIndex] = firstArr[randomIndex];
	    firstArr[randomIndex] = temporaryValue;
  	};
	return firstArr;
}

function repeat(indexArr, arr) {
	let audio = new Audio(); 
    audio.src = arr[indexArr]; 
    audio.play();
}

function checkImgAudio(indexImg, idImg) {
	console.log('checkImgAudio indexImg :: ',indexImg);
	console.log('checkImgAudio idImg :: ',idImg);
	if(!arrMix) {
		return;
	};
	let mapImgAudio;
	let mapImgCookie;
	for(let i = 0; i < arrCategory.length; i++) {
        if(nameCategory == arrCategory[i]) {
			mapImgAudio = map_img_audio_all[i];
			mapImgCookie = map_img_cookie_all[i];
			break;
        };
	};
	//console.log("mapImgAudio.get(indexImg) :: ", mapImgAudio.get(indexImg));
	//console.log("arrMix :: ", arrMix);
	//console.log("arrMix.length :: ", arrMix.length);
	//console.log("indexArrMixRepeat :: ", indexArrMixRepeat);
	//console.log("arrMix[indexArrMixRepeat] :: ", arrMix[indexArrMixRepeat]);

	let idImgError = 1;
	if(mapImgAudio.get(indexImg) == arrMix[indexArrMixRepeat]) {
		//пишем в куки правильные ответы (кол-во)
		let name_cookie = mapImgCookie.get(indexImg) + '_success';
		if(getCookie(name_cookie)) {
			let current_value = getCookie(name_cookie);
            current_value++;
            setCookie(name_cookie, current_value);
		} else {
			setCookie(name_cookie, 1);
		};	
		
		playAudio('assets/success.mp3');
		if (document.getElementById("errorSuccess")) {
			let elem = document.getElementById("errorSuccess");
			let elemImg = document.createElement('img');
			elemImg.setAttribute('src', 'assets/successMark.jpg');
    		elemImg.setAttribute('alt', 'image'); 
    		elem.append(elemImg);
		};
		if(document.getElementById(idImg)) {
			let elem = document.getElementById(idImg);
			elem.classList.remove('img_play');
	     	elem.classList.add('img_play_click');
	     	elem.removeAttribute('onclick');
		};
		indexArrMixRepeat++;
		if(indexArrMixRepeat < arrMix.length) {
			setTimeout(() => repeat(indexArrMixRepeat, arrMix), 1000);
		};
		if(indexArrMixRepeat == arrMix.length) {
			let elem = document.getElementById("divEndGame");
			let isError = document.getElementById("img_error_1");
			if(isError) {
				let elemImg = document.createElement('img');
				elemImg.setAttribute('src', 'assets/losing.jpg');
	    		elemImg.setAttribute('alt', 'image'); 
	    		elem.append(elemImg);
	    		setTimeout(() => playAudio('assets/losing.mp3'), 1500);
			} else{
				let elemImg = document.createElement('img');
				elemImg.setAttribute('src', 'assets/victory.jpg');
	    		elemImg.setAttribute('alt', 'image'); 
	    		elem.append(elemImg);
	    		setTimeout(() => playAudio('assets/victory.mp3'), 1500);
			};
			let elemSection = document.getElementById('flexContainer');
			elemSection.style.display = 'none';
			let elemErrSucc = document.getElementById('errorSuccess');
			elemErrSucc.style.display = 'none';
			setTimeout(() => returnMenu(), 6000);
		};
	} else {
		//пишем в куки ошибки (кол-во)
		for (let [key, value] of mapImgAudio) {
		  	//console.log('key=value :: ',key + ' = ' + value);
		  	if(value == arrMix[indexArrMixRepeat]) {
				let name_cookie = mapImgCookie.get(key) + '_error';
				if(getCookie(name_cookie)) {
					let current_value = getCookie(name_cookie);
		            current_value++;
		            setCookie(name_cookie, current_value);
				} else {
					setCookie(name_cookie, 1);
				};	
			};
		};

		if (document.getElementById("errorSuccess")) {
			let elem = document.getElementById("errorSuccess");
			let elemImg = document.createElement('img');
			elemImg.setAttribute('id', 'img_error_' + idImgError);
			elemImg.setAttribute('src', 'assets/errorCross.jpg');
    		elemImg.setAttribute('alt', 'image'); 
    		elem.append(elemImg);
    		idImgError ++;
		};
		playAudio('assets/error.mp3');
	};
}

function returnMenu() {
	window.location='index.html';
}