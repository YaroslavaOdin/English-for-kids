
let nameCategory = getCookie('category');

if(!nameCategory) {
    document.location.href = "index.html";
};

deleteCookie('category');

let nameModeApplication =  getCookie('mode_application');
let modePlay = (nameModeApplication == 'mode_play');
console.log('inner modePlay :: ',modePlay);

document.body.onload = addElementSection;

function addElementSection() {
    var newSection = document.createElement('section');
    newSection.setAttribute('id', nameCategory);
    
    document.body.append(newSection);
    var newDiv1 = document.createElement('div');
    newDiv1.setAttribute('id', 'flexContainer');
    newSection.prepend(newDiv1);

    var newDiv2 = document.createElement('div');
    var idNewDiv2 = 'id_' + nameCategory;
    newDiv2.classList.add('card_container');
    newDiv2.setAttribute('id', idNewDiv2);
    newDiv1.prepend(newDiv2);

    for(let i = 0; i < arrCategory.length; i++) {
        if(nameCategory == arrCategory[i]) {
            addElementDiv(idNewDiv2, arr_cards_all[i]);
            let elemA = document.getElementById('id_menu_category_'+i);
            elemA.classList.add('menu_active');
            break;
        };
    };

    //div для ошибок и плюсов
    var newDivError = document.createElement('div');
    newDivError.setAttribute('id', 'errorSuccess');
    newSection.prepend(newDivError);

    //div для завершающей картинки
    var newDivEndGame = document.createElement('div');
    newDivEndGame.setAttribute('id', 'divEndGame');
    newSection.prepend(newDivEndGame);
}

function addElementDiv(idSectionDiv, mapCards) {
    let indexId = 1;
    for (let mapCard of mapCards.values()) {
        let index = 1
        let idCardMap = '';
        let idFrontMap = '';
        let audioPlMap = '';
        let srcImgMap = '';
        let textP1Map = '';
        let textP2Map = '';
        let arr_map = [idCardMap,idFrontMap,audioPlMap,srcImgMap,textP1Map,textP2Map];
        for (let cardMap of mapCard.values()) {
            arr_map[index-1] = cardMap;
            index ++;
        };

        var divParent = document.getElementById(idSectionDiv);
        var newDiv3 = document.createElement('div');
        newDiv3.classList.add('card');
        newDiv3.setAttribute('id', arr_map[0]);
        newDiv3.setAttribute('onmouseleave', "reverseCardFront('" + arr_map[0] + "')");
        divParent.append(newDiv3);

        var newDiv4 = document.createElement('div');
        newDiv4.classList.add('front_side');
        newDiv4.setAttribute('id', arr_map[1]);
        if(!modePlay) {
            newDiv4.setAttribute('onclick', arr_map[2]);
        };
        newDiv3.prepend(newDiv4);

        var newImg1 = document.createElement('img');
        newImg1.setAttribute('id', 'img_' + indexId);
        newImg1.setAttribute('src', arr_map[3]);
        newImg1.setAttribute('alt', 'image');
        newImg1.setAttribute('style', 'width:100%');
        if(modePlay) {
            newImg1.setAttribute('onclick', "checkImgAudio('" + arr_map[3] + "','img_" + indexId + "')");
            newImg1.classList.add('img_play');
        };
        newDiv4.prepend(newImg1);
       
        var newDiv5 = document.createElement('div');
        newDiv5.setAttribute('id', 'div_text_arrows_' + indexId);
        newDiv5.classList.add('container_not_main');
        if(modePlay) {
            newDiv5.style.display = 'none';
        };
        newDiv4.append(newDiv5);
        
        var newP1 = document.createElement('p');
        newP1.innerHTML = arr_map[4];
        newDiv5.append(newP1);

        var newImg2 = document.createElement('img');
        newImg2.classList.add('row');
        newImg2.setAttribute('id', 'img_arrows' + indexId );
        newImg2.setAttribute('src', 'assets/arrows.jpg');
        newImg2.setAttribute('onclick', "reverseCardBack('" + arr_map[0] + "')");
        newDiv5.append(newImg2);

        indexId++;
        
        var newDiv6 = document.createElement('div');
        newDiv6.classList.add('back_side');
        newDiv3.append(newDiv6);

        var newImg3 = document.createElement('img');
        newImg3.setAttribute('src', arr_map[3]);
        newImg3.setAttribute('alt', 'image');
        newImg3.setAttribute('style', 'width:100%');
        newDiv6.append(newImg3);

        var newDiv7 = document.createElement('div');
        newDiv7.classList.add('container_not_main');
        newDiv6.append(newDiv7);

        var newP2 = document.createElement('p');
        newP2.innerHTML = arr_map[5];
        newDiv7.append(newP2);
    };

    if(modePlay) {
        //addButton();
        var divParent = document.getElementById('flexContainer');
        var divButton = document.createElement('div');
        divButton.setAttribute('id', 'divButton');
        divParent.append(divButton);

        var buttonPlay = document.createElement('input');
        buttonPlay.setAttribute('type', 'button');
        buttonPlay.setAttribute('id', 'buttonPlay');
        buttonPlay.setAttribute('onclick', "satrtGame('" + nameCategory + "')");
        buttonPlay.setAttribute('value', 'Start Game');
        divButton.append(buttonPlay);
    };

}
