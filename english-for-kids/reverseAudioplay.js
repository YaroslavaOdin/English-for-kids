
reverseCardBack = function(card_number) {
    if (document.getElementById(card_number).hasChildNodes()) {
        let children = document.getElementById(card_number).childNodes;
        children[0].classList.add('front_side_active');
        children[1].classList.add('back_side_active');
    };
};

reverseCardFront = function(card_number) {
    if (document.getElementById(card_number).hasChildNodes()) {
        let children = document.getElementById(card_number).childNodes;
        children[0].classList.remove('front_side_active');
        children[1].classList.remove('back_side_active');
    };
};

function audioPlay(src_path) {
    let target = event.target || event.srcElement;
    if(!target.id.startsWith("img_arrows")) {
        let audio = new Audio(); 
        audio.src = src_path; 
        audio.play();
        countClick(src_path);
    };
}

function playAudio(src_path) {
    let audio = new Audio(); 
    audio.src = src_path; 
    audio.play();
}

function countClick(src_path) {
    let arr_audio_current;
    let arr_name_cookie_current;
    
    for(let i = 0; i < arrCategory.length; i++) {
        if(nameCategory == arrCategory[i]) {
            console.log('arrCategory[i] :: ',arrCategory[i]);
            arr_audio_current = arrAudioAll[i];
            arr_name_cookie_current = arr_name_cookie_all[i];
        };
    };

    for(let i = 0; i < 8; i++) {
        if(src_path == arr_audio_current[i]) {
            if(getCookie(arr_name_cookie_current[i])) {
                let current_value = getCookie(arr_name_cookie_current[i]);
                current_value++;
                setCookie(arr_name_cookie_current[i], current_value);
            } else {
                setCookie(arr_name_cookie_current[i], 1);
            };
        };
    };
}


